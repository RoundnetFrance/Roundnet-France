const menuElements = [
  {
    name: 'Compétition',
    url: '/competition',
    slug: 'competition',
    subElements: [
      {
        name: 'Règles',
        url: '/competition/regles',
      },
      {
        name: 'Compétitions et tournois',
        url: '/competition/competitions-et-tournois',
      },
      {
        name: 'Liste des résultats',
        url: '/competition/liste-des-resultats',
      },
      {
        name: 'Classement national',
        url: '/competition/classement-national',
      },
      {
        name: 'Hall Of Fame',
        url: '/competition/hall-of-fame',
      },
      {
        name: 'Mondiaux 2022',
        url: '/competition/mondiaux-2022',
      }
    ]
  },
  {
    name: 'Clubs & communautés',
    url: '/clubs-et-communautes',
    slug: 'communities',
    subElements: [
      {
        name: 'Communautés',
        url: '/clubs-et-communautes/communautes',
      },
      {
        name: 'Adhérer à la fédération',
        url: '/clubs-et-communautes/adherer-a-la-federation',
      },
      {
        name: 'Créer votre club',
        url: '/clubs-et-communautes/creer-votre-club',
      },
    ]
  },
  {
    name: 'Boutique',
    url: '/boutique',
    slug: 'shop',
  },
  {
    name: 'Qui sommes-nous ?',
    url: '/qui-sommes-nous',
    slug: 'about',
    subElements: [
      {
        name: 'La fédération',
        url: '/qui-sommes-nous/la-federation',
      },
      {
        name: 'Contact',
        url: '/qui-sommes-nous/contact',
      },      
    ],
  },
];

export default menuElements;