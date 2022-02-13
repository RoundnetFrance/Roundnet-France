export default function getOfficialFormConfig(doctype) {
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
}
