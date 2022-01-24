// COMPONENT IMPORTS
import FormBuilder from "../../components/form-builder";

function ContactForm() {
  const descriptionBefore =
    "Une question à nous poser, une demande spécifique ? N'hésitez pas à contacter Roundnet France via ce formulaire.";

  const formConfig = {
    name: "Formulaire de contact",
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
        id: "subject",
        label: "Objet",
        type: "text",
        options: {
          required: true,
        },
      },
      {
        id: "message",
        label: "Message",
        type: "longtext",
        options: {
          required: true,
        },
      },
    ],
    endpoint: "send-mail",
    descriptionBefore,
  };

  return <FormBuilder formConfig={formConfig} />;
}

export default ContactForm;
