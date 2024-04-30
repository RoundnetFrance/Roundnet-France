import { Typography } from "@mui/material";
import { type FC, Fragment } from "react";
import { FormBuilder } from "../../form-builder";
import { Link } from "../../ui";
import type { FormConfig, FormSelectOption } from "../../../models/Form";

interface SignUpFormProps {
  clubs: FormSelectOption[];
}

const SignUpForm: FC<SignUpFormProps> = ({ clubs }) => {
  const descriptionBefore = (
    <Fragment>
      <Typography>
        La validation d&apos;un compte administrateur Roundnet France permet aux
        associations d&apos;enregistrer les résultats des tournois
        automatiquement. Elle est soumise à l&apos;acceptation d&apos;un membre
        du board administratif de la fédération.{" "}
      </Typography>
      <Typography>
        Pour en savoir plus,{" "}
        <Link href='/qui-sommes-nous/contact'>contactez-nous directement.</Link>
      </Typography>
    </Fragment>
  );

  const formConfig: FormConfig = {
    name: "Créer un compte",
    fields: [
      {
        id: "name",
        label: "Nom & Prénom",
        type: "text",
        options: {
          required: true,
        },
      },
      {
        id: "email",
        label: "Email",
        type: "email",
        options: {
          required: true,
        },
      },
      {
        id: "club",
        label: "Club",
        type: "select",
        options: {
          selectValues: clubs,
        },
      },
      {
        id: "password",
        label: "Mot de passe",
        type: "password",
        options: {
          required: true,
        },
      },
      {
        id: "passwordConfirm",
        label: "Confirmation du mot de passe",
        type: "password",
        options: {
          required: true,
          passwordConfirm: true,
        },
      },
    ],
    endpoint: "/auth/signup",
    submitText: "Créer un compte",
    descriptionBefore,
  };

  return <FormBuilder formConfig={formConfig} />;
};

export default SignUpForm;
