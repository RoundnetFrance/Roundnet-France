import { fr } from "date-fns/locale";
import {
  type Dispatch,
  type FC,
  Fragment,
  type SetStateAction,
  useState,
} from "react";

import { DatePicker, LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDateFns";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import type {
  FormField as FormFieldType,
  FormOptions,
  FormType,
} from "../../models/Form";
import { Dialog, PasswordInput } from "../ui";

interface FormFieldProps {
  type: FormType;
  id: FormFieldType["id"];
  label: FormFieldType["label"];
  options?: FormOptions;
  value: FormFieldType["value"];
  handleChange: (event: any) => void;
  error: string | boolean;
  parentCheckboxes: { [key: string]: boolean };
  setParentCheckboxes: Dispatch<SetStateAction<{ [key: string]: boolean }>>;
}
export const FormField: FC<FormFieldProps> = ({
  type,
  id,
  label,
  options,
  value,
  handleChange,
  error,
  parentCheckboxes,
  setParentCheckboxes,
}) => {
  // Define error as a bool for MUI error prop
  const booleanError = error !== false;

  // Define state and function for file dialog
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleFileDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleFileDialogClose = () => {
    setDialogOpen(false);
  };

  // If input is hidden, return hidden input with defaultValue
  if (options?.hidden) {
    return (
      <input
        id={id}
        name={id}
        type='hidden'
        value={options?.defaultValue || ""}
      />
    );
  }

  // If input as an optional.parentText, return a checkbox
  let optional: JSX.Element;
  if (options?.optional?.parentText) {
    optional = (
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              value={parentCheckboxes[id]}
              onChange={() => {
                setParentCheckboxes((prevCheckboxes) => ({
                  ...prevCheckboxes,
                  [id]: !prevCheckboxes[id],
                }));
              }}
            />
          }
          label={options?.optional?.parentText}
        />
      </FormGroup>
    );
  }

  // If there's a dividerBottom option, add a MUI Divider.
  const dividerBottom = options?.dividerBottom ? <Divider /> : null;

  // Define input.
  let input: JSX.Element;

  // If input is a optional.child and its options.parent checkbox is not checked, return null
  if (
    options?.optional?.isChild &&
    !parentCheckboxes[options?.optional?.parent]
  ) {
    return null;
  }

  // Conditional rendering of form field. If a new one is added, add it to the switch in helper/form too.
  switch (type) {
    case "longtext":
      input = (
        <Fragment>
          <TextField
            id={id}
            label={label}
            variant='outlined'
            value={value}
            onChange={handleChange}
            error={booleanError}
            helperText={error}
            required={options?.required}
            multiline
            rows={options?.multilineRows || 4}
          />
          <FormHelperText>
            {options?.helperText}{" "}
            {!!options?.maxLength &&
              `(longueur maxi : ${options?.maxLength} caractères)`}
          </FormHelperText>
        </Fragment>
      );
      break;

    case "boolean":
      input = (
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                id={id}
                checked={!!value}
                onChange={() => {
                  handleChange({
                    target: {
                      id,
                      value: !value,
                    },
                  });
                }}
              />
            }
            label={label}
          />
        </FormGroup>
      );
      break;

    case "date":
      input = (
        <LocalizationProvider dateAdapter={DateAdapter} locale={fr}>
          <DatePicker
            disableFuture={options?.dateConfig?.disableFuture}
            clearable={options?.dateConfig?.clearable}
            error={booleanError}
            id={id}
            label={label}
            openTo={options?.dateConfig?.openTo || "month"}
            views={options?.dateConfig?.views || ["year", "month", "day"]}
            value={value || null}
            onChange={(newValue) => {
              handleChange({
                target: {
                  id,
                  value: newValue,
                },
              });
            }}
            renderInput={(params) => (
              <Fragment>
                <TextField
                  label='Date'
                  {...params}
                  required={options?.required}
                />
                <FormHelperText
                  error={booleanError}
                  id={`${label}-error`}
                  sx={{ position: "relative", bottom: 10 }}
                >
                  {error}
                </FormHelperText>
              </Fragment>
            )}
          />
        </LocalizationProvider>
      );
      break;

    case "autocomplete":
      input = (
        <Autocomplete
          disablePortal
          freeSolo
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id={id}
          value={typeof value === "string" ? value : ""}
          onChange={(event, newValue) => {
            handleChange({
              target: {
                id,
                value: newValue,
              },
            });
          }}
          options={options?.selectValues}
          renderInput={(params) => <TextField {...params} label={label} />}
        />
      );
      break;

    case "password":
      input = (
        <PasswordInput
          label={label}
          value={String(value)}
          name={id}
          handleChange={handleChange}
          error={booleanError}
          helperText={typeof error === "string" ? error : "Champ incorrect."}
          required={options?.required}
        />
      );
      break;

    case "select": {
      input = (
        <FormControl error={booleanError} required={options?.required}>
          <InputLabel id={id}>{label}</InputLabel>
          <Select
            labelId={id}
            label={label}
            id={id}
            value={value}
            onChange={(event) => {
              handleChange({
                target: {
                  id,
                  value: event.target.value,
                },
              });
            }}
          >
            {options?.selectValues.map((item) => {
              // Hide if needed
              if (item.hide) return null;
              // Else, return option
              return (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              );
            })}
          </Select>
          {booleanError && (
            <FormHelperText error={booleanError} id={`${label}-error`}>
              {error}
            </FormHelperText>
          )}
        </FormControl>
      );
      break;
    }

    case "file": {
      // Define which files are accept (HTML/Browser shallow validation only)
      let accept: string;
      switch (options?.fileConfig?.type) {
        case "image":
          accept = "image/*";
          break;

        case "pdf":
          accept = "application/pdf";
          break;

        default:
          accept = "*";
          break;
      }

      input = (
        <Fragment>
          <Box>
            <Button
              size='large'
              variant='outlined'
              color={booleanError ? "error" : "primary"}
              component='label'
              onClick={handleFileDialogOpen}
              sx={{ mr: 2 }}
            >
              {label} - Upload
            </Button>
            <Typography component='span' variant='body2'>
              {(typeof value === "object" && value.name) ||
                "Aucun fichier séléctionné"}
            </Typography>
            {options?.helperText && (
              <FormHelperText>{options?.helperText}</FormHelperText>
            )}
            {booleanError && (
              <FormHelperText error={booleanError} id={`${label}-error`}>
                {error}
              </FormHelperText>
            )}
          </Box>

          {/* Dialog component */}
          <Dialog
            open={dialogOpen}
            title='Uploader'
            handleClose={handleFileDialogClose}
            cancelText='Annuler'
            confirmButton={
              <Button variant='contained' onClick={handleFileDialogClose}>
                Choisir ce fichier
              </Button>
            }
          >
            <Button variant='contained' component='label' color='primary'>
              Envoyer un fichier{" "}
              <input
                type='file'
                name='file'
                accept={accept}
                hidden
                onChange={(event) =>
                  handleChange({
                    target: {
                      id,
                      value: event.target.files[0],
                    },
                  })
                }
              />
            </Button>
            <Typography variant='body2' mt={2} pl={2}>
              {typeof value === "object" && value
                ? value.name
                : "Aucun fichier sélectionné"}
            </Typography>
          </Dialog>
        </Fragment>
      );
      break;
    }

    case "number":
      input = (
        <TextField
          id={id}
          label={label}
          variant='outlined'
          value={value}
          inputProps={{
            inputMode: "numeric",
            type: "number",
          }}
          onChange={handleChange}
          error={booleanError}
          helperText={error || options?.helperText}
          required={options?.required}
        />
      );
      break;

    default:
      input = (
        <TextField
          id={id}
          label={label}
          variant='outlined'
          value={value}
          onChange={handleChange}
          error={booleanError}
          helperText={error || options?.helperText}
          required={options?.required}
        />
      );
      break;
  }

  return (
    <Fragment>
      {input}
      {optional}
      {dividerBottom}
    </Fragment>
  );
};
