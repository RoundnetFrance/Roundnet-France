import { useSWRConfig } from "swr";
import {
  type Dispatch,
  type SetStateAction,
  useState,
  type FormEventHandler,
} from "react";

import {
  Box,
  Typography,
  Divider,
  Stack,
  Button,
  type AlertColor,
} from "@mui/material";

import { PasswordInput } from "../../../components/ui";
import type { User } from "../../../models/collections/Users";

interface AccountPasswordProps {
  setSnackbar: Dispatch<
    SetStateAction<{ open: boolean; message: string; severity: AlertColor }>
  >;
}

export default function AccountPassword({
  setSnackbar,
}: Readonly<AccountPasswordProps>) {
  const { mutate } = useSWRConfig();

  // Handle password state
  const [passwordValues, setPasswordValues] = useState({
    password: "",
    passwordConfirm: "",
  });

  // Handle form submit
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    // Prevent form from submitting
    event.preventDefault();

    // If passwords don't match, throw error
    if (passwordValues.password !== passwordValues.passwordConfirm) {
      return setSnackbar({
        open: true,
        message: "Les mots de passe ne correspondent pas.",
        severity: "error",
      });
    }

    // Get user data, patch it in the db, then return new patched local state
    mutate("/api/users/me", async (user: User) => {
      try {
        const response = await fetch("/api/users/me", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(passwordValues),
        });

        // If error on response status, throw
        if (!response.ok) {
          const { message } = await response.json();
          throw new Error(message);
        }
      } catch (err) {
        setSnackbar({
          open: true,
          message: err.message || "Une erreur est survenue",
          severity: "error",
        });
      }

      return user;
    });
    setSnackbar({
      open: true,
      message: "Vos informations ont été mises à jour",
      severity: "success",
    });
  };

  return (
    <Box component='form' onSubmit={handleSubmit}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent='space-between'
        alignItems={{ xs: "flex-start", md: "flex-end" }}
        ml={{ xs: 1, sm: 4 }}
        mb={4}
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <Typography variant='h5'>Mot de passe</Typography>
        </Stack>
        <Button
          variant='contained'
          color='primary'
          sx={{ mt: 2 }}
          type='submit'
        >
          Enregistrer les modifications
        </Button>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Box pl={4} py={2}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ width: "100%" }}
        >
          <PasswordInput
            label='Nouveau mot de passe'
            name='password'
            value={passwordValues.password}
            handleChange={(event) =>
              setPasswordValues({
                ...passwordValues,
                password: event.target.value,
              })
            }
            required
            error={false}
            helperText={"Champ incorrect."}
          />
          <PasswordInput
            label='Confirmer le nouveau mot de passe'
            name='password-confirm'
            value={passwordValues.passwordConfirm}
            handleChange={(event) =>
              setPasswordValues({
                ...passwordValues,
                passwordConfirm: event.target.value,
              })
            }
            required
            error={false}
            helperText={"Champ incorrect."}
          />
        </Stack>
      </Box>
    </Box>
  );
}
