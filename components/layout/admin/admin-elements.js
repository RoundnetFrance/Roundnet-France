const adminElements = [
    {
      name: 'Compétition',
      slug: 'competition',
      icon: 'emoji_events',
      subElements: [
        {
          name: 'Calendrier',
          url: '/rf-admin/competition/calendrier',
        },
        {
          name: 'Coupe de France',
          url: '/rf-admin/competition/resultats-coupe-de-france',
        },
        {
          name: 'Règles',
          url: '/rf-admin/competition/regles',
        },
        {
          name: 'Hall Of Fame',
          url: '/rf-admin/competition/hall-of-fame',
        },
      ]
    },
    {
      name: 'Clubs & communautés',
      slug: 'communities',
      icon: 'supervised_user_circle',
      subElements: [
        {
          name: 'Liste des clubs',
          url: '/rf-admin/clubs-et-communautes/liste-des-clubs',
        },
      ]
    },
    {
      name: 'Association',
      slug: 'about',
      icon: 'info',
      subElements: [
        {
          name: 'L\'équipe Roundnet France',
          url: '/rf-admin/association/equipe-roundnet-france',
        },    
      ],
    },
    {
        name: 'Paramètres',
        slug: 'settings',
        icon: 'settings',
        subElements: [
          {
            name: 'Administrateurs',
            url: '/rf-admin/parametres/administrateurs',
          },    
        ],
      },
  ];
  
  export default adminElements;