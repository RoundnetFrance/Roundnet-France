import type { FormConfig } from "../../models/Form";
import type * as OfficialDocs from "../../models/collections/OfficialDocs";

export const getOfficialDocFormConfig: (
  doctype: OfficialDocs.DocType,
) => FormConfig = (doctype) => {
  return {
    name: "Ajouter une version de fichier",
    fields: [
      {
        id: "url",
        label: "Fichier (format pdf)",
        type: "file",
        options: {
          required: true,
          fileConfig: {
            type: "pdf",
          },
        },
      },
      {
        id: "version",
        label: "Nom de version",
        type: "text",
        options: {
          required: true,
        },
      },
      {
        id: "description",
        label: "Description",
        type: "longtext",
      },
      {
        id: "doctype",
        label: "Type de document",
        type: "text",
        options: {
          hidden: true,
          defaultValue: doctype,
        },
      },
    ],
    endpoint: "official-docs",
    submitText: "Ajouter le fichier",
  };
};
