const menuElements = [
  {
    name: 'Compétition',
    url: '/competition',
    slug: 'competition',
    subElements: [
      {
        name: 'Règles Officielles',
        url: '/competition/regles',
      },
      {
        name: 'Calendrier',
        url: '/competition/calendrier',
      },
      {
        name: 'Coupe de France',
        url: '/competition/coupe-de-france-roundnet',
      },
      {
        name: 'Rencontres inter-clubs',
        url: '/competition/rencontres-inter-clubs',
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