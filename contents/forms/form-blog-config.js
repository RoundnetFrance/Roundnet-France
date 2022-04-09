export default function getBlogFormConfig() {
  return {
    name: "Ajouter un article de blog",
    fields: [
      {
        id: "title",
        label: "Titre de l'article",
        type: "text",
        options: {
          required: true,
        },
      },
      {
        id: "content",
        label: "Contenu de l'article",
        type: "md-editor",
        options: {
          required: true,
        },
      },
      {
        id: "image",
        label: "Photo principale",
        type: "file",
        options: {
          // required: true,
          fileConfig: {
            type: "image",
            imageMaxWidth: 1200,
          },
        },
      },
      {
        id: "summary",
        label: "Résumé de l'article",
        type: "text",
        options: {
          required: true,
        },
      },
    ],
    endpoint: "posts",
    submitText: "Ajouter un article",
  };
}
