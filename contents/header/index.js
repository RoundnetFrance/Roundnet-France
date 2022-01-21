// Menu for front
const menuElements = [
  {
    name: 'Compétition',
    url: '/competition',
    slug: 'competition',
    icon: 'emoji_events',
    subElements: [
      {
        name: 'Règles Officielles',
        url: '/regles',
      },
      // {
      //   name: 'Calendrier',
      //   url: '/competition/calendrier',
      // },
      {
        name: 'Coupe de France',
        url: '/competition/coupe-de-france-roundnet',
      },
      {
        name: 'Rencontres inter-clubs',
        url: '/competition/rencontres-inter-clubs',
      },
      // {
      //   name: 'Hall Of Fame',
      //   url: '/competition/hall-of-fame',
      // },
      // {
      //   name: 'Mondiaux 2022',
      //   url: '/competition/mondiaux-2022',
      // }
    ]
  },
  {
    name: 'Clubs & communautés',
    url: '/clubs-et-communautes',
    slug: 'communities',
    icon: 'supervised_user_circle',
    subElements: [
      {
        name: 'Liste des clubs',
        url: '/clubs-et-communautes/liste-des-clubs',
      },
      {
        name: 'Adhérer à la fédération',
        url: '/clubs-et-communautes/adherer-a-roundnet-france',
      },
    ]
  },
  {
    name: 'Boutique',
    url: '/boutique',
    slug: 'shop',
    icon: 'shopping_cart',
  },
  {
    name: 'Qui sommes-nous ?',
    url: '/qui-sommes-nous',
    slug: 'about',
    icon: 'info',
    subElements: [
      {
        name: 'L\'équipe Roundnet France',
        url: '/qui-sommes-nous/equipe-roundnet-france',
      },
      {
        name: 'Statuts officiels',
        url: '/qui-sommes-nous/statuts-officiels-roundnet-france',
      },
      // {
      //   name: 'Le projet associatif',
      //   url: '/qui-sommes-nous/projet-associatif',
      // },
      {
        name: 'Contact',
        url: '/qui-sommes-nous/contact',
      },
    ],
  },
];

// Menu for admin
const adminElements = [
  {
    name: 'Dashboard',
    slug: 'dashboard',
    icon: 'dashboard',
    url: '/rf-admin'
  },
  {
    name: 'Compétition',
    slug: 'competition',
    icon: 'emoji_events',
    subElements: [
      // {
      //   name: 'Calendrier',
      //   url: '/rf-admin/competition/calendrier',
      // },
      {
        name: 'Coupe de France',
        url: '/rf-admin/competition/coupe-de-france',
      },
      {
        name: 'Règles',
        url: '/rf-admin/competition/regles',
      },
      {
        name: 'Rencontres inter-clubs',
        url: '/rf-admin/competition/ric',
      },
      // {
      //   name: 'Hall Of Fame',
      //   url: '/rf-admin/competition/hall-of-fame',
      // },
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
      {
        name: 'Statuts',
        url: '/rf-admin/association/statuts'
      }
    ],
  },
  {
    name: 'Paramètres',
    slug: 'settings',
    icon: 'settings',
    subElements: [
      {
        name: 'Mon Compte',
        url: '/rf-admin/parametres/mon-compte',
      },
      {
        name: 'Administrateurs',
        url: '/rf-admin/parametres/administrateurs',
      },
    ],
  },
];

export { adminElements, menuElements };