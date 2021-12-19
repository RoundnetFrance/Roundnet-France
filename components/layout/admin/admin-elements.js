const adminElements = [
    {
      name: 'Compétition',
      slug: 'competition',
      icon: 'emoji_events',
      subElements: [
        {
          name: 'Calendrier',
          url: '/rf-admin/calendrier',
        },
        {
          name: 'Coupe de France',
          url: '/rf-admin/resultats-coupe-de-france',
        },
        {
          name: 'Rencontres inter-clubs',
          url: '/rf-admin/rencontres-inter-clubs',
        },
        {
          name: 'Hall Of Fame',
          url: '/rf-admin/hall-of-fame',
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
        {
          name: 'Demandes d\'adhésion',
          url: '/rf-admin/demandes-adhesion',
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