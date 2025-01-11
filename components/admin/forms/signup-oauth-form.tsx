import type { FormConfig } from "../../../models/Form";
import { FormBuilder } from "../../form-builder";

function SignUpOAuthForm({ clubs, hiddenFields }) {
  const { name, email } = hiddenFields;

  const descriptionBefore =
    "Pour finaliser la création de votre compte, vous devez entrer les détails suivants.";

  // Handle first render of empty query params
  let formConfig: FormConfig | null = null;
  if (name && email) {
    formConfig = {
      name: "Créer un compte",
      fields: [
        {
          id: "name",
          label: "Nom & Prénom",
          type: "text",
          options: {
            required: true,
            hidden: true,
            defaultValue: name,
          },
        },
        {
          id: "email",
          label: "Email",
          type: "email",
          options: {
            required: true,
            hidden: true,
            defaultValue: email,
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
  }

  return formConfig ? <FormBuilder formConfig={formConfig} /> : null;
}

export default SignUpOAuthForm;
