// STATIC CONTENT FOR HOME PAGE

// * Four square content
// Content as an array of string. Each string is a paragraph.
const fourSquareContent = [
  {
    _id: '1',
    title: 'Le rassemblement des clubs français',
    content: [
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ipsam eaque asperiores. Repudiandae, id aliquam placeat sed quo assumenda similique? Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minimous.',
    ],
    link: '/clubs-et-communautes/liste-des-clubs',
    linkText: 'Voir la liste des clubs',
    icon: 'verified',
  },
  {
    _id: '2',
    title: 'Nourri de vos tournois',
    content: [
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ipsam eaque asperiores. Repudiandae, id aliquam placeat sed quo assumenda similique? Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.'
    ],
    link: '/competition/calendrier',
    linkText: 'Consulter les tournois',
    icon: 'event',
  },
  {
    _id: '3',
    title: 'Référent pour la compétition',
    content: [
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ipsam eaque asperiores. Repudiandae, id aliquam placeat sed quo assumenda similique? Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.'
    ],
    link: '/competition/coupe-de-france-roundnet',
    linkText: 'La coupe de France',
    icon: 'equalizer',
  },
  {
    _id: '4',
    title: 'Découvrez les acteurs de la fédération',
    content: [
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ipsam eaque asperiores. Repudiandae, id aliquam placeat sed quo assumenda similique? Cupiditate dolore ipsum et ratione, minus suscipit! Quia, sed minima.'
    ],
    link: '/qui-sommes-nous/equipe-roundnet-france',
    linkText: 'Ils font Roundnet France',
    icon: 'people',
  }
]

// * Rules
const rulesItems = [
  {
    key: 1,
    text: '4 joueurs (2 vs 2) sont autour du filet de Roundnet. Equipe A vs Equipe B.',
  },
  {
    key: 2,
    text: 'Un joueur de l\'équipe A sert sur un joueur de l\'équipe B.'
  },
  {
    key: 3,
    text: 'L\'équipe B a trois touches pour renvoyer la balle sur le filet. Ils peuvent librement bouger et se placer autour du filet après le service.'
  },
  {
    key: 4,
    text: 'Si l\'équipe B renvoie la balle sur le filet, l\'équipe A a désormais trois touches pour la renvoyer à son tour.'
  },
  {
    key: 5,
    text: 'L\'échange continue jusqu\'à ce qu\'une équipe ne puisse pas renvoyer la balle.'
  }
]

export { fourSquareContent, rulesItems };