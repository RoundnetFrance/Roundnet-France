const postConfig = {
  title: "Modification d'article",
  endpoint: "posts",
  adminEndpoint: "/rf-admin/blog",
  tabs: [
    // GENERAL INFO
    {
      _id: "main",
      name: "Général",
      description: "Informations générales de l'article",
      layout: [
        {
          _id: "title",
          name: "Titre",
          type: "text",
          editable: true,
        },
        {
          _id: "image",
          name: "Image principale",
          type: "file",
          editable: true,
          options: {
            required: true,
            fileConfig: {
              type: "image",
            },
          },
        },
        {
          _id: "summary",
          name: "Résumé",
          type: "text",
          editable: true,
        },
      ],
    },
    // Post content
    {
      _id: "content",
      name: "Contenu",
      description: "...",
      layout: [
        {
          _id: "content",
          name: "Contenu de l'article",
          type: "rich-editor",
          editable: true,
        },
      ],
    },
  ],
};

export default postConfig;
