// STATIC CONTENT FOR HOME PAGE

// * Four square content
// Content as an array of string. Each string is a paragraph.
const fourSquareContent = [
  {
    _id: '1',
    title: 'Tournois français',
    content: [
      'Chaque saison, les joueurs français de roundnet participent à une multitude de tournois. Roundnet France organise deux types de tournois: la coupe de France et les rencontres inter-clubs. La coupe de France s’agit de trois Tour Stops (tournois) et le championnat de France. Cela détermine les champions et championnes de France, mais aussi l\'équipe française qui représente la France lors des championnats du monde.',
      'Les rencontres inter-clubs est un nouveau format ou les clubs membres de la fédération s\'affrontent entre eux. Un seul club en sortira champion ! Pour plus d’informations et pour répondre à vos questions, allez consulter les pages dédiées à ces compétitions.',
    ],
    links: [
      {
        href: '/competition/coupe-de-france-roundnet',
        text: 'Coupe de France',
      },
      {
        href: '/competition/rencontres-inter-clubs',
        text: 'Rencontres inter-clubs',
      },
    ],
    icon: 'verified',
  },
  {
    _id: '2',
    title: 'Rayonnement et rassemblement des clubs français',
    content: [
      'Roundnet France a pour but de faire rayonner les clubs qui y sont adhérents. Les tournois et les informations de ces clubs sont donc accessibles sur ce site. Vous cherchez un club dans votre région ? Vous partez en vacances en France et vous voulez jouer au roundnet lors de votre séjour ? Allez voir la liste des clubs !'
    ],
    links: [{
      href: '/clubs-et-communautes/liste-des-clubs',
      text: 'Liste des clubs',
    }],
    icon: 'event',
  },
  {
    _id: '3',
    title: 'Accompagnement de création de clubs',
    content: [
      'Vous êtes dans une ville avec une petite communauté qui joue au roundnet mais vous n’avez pas d’association pour représenter votre club ? Roundnet France accompagne les joueurs pour passer d’une communauté à un club français reconnus pour toutes les démarches administratives. Pour avoir plus d’informations, allez visiter la page d’adhésion.'
    ],
    links: [{
      href: '/clubs-et-communautes/adherer-a-roundnet-france',
      text: 'Adhérer à la fédération',
    }],
    icon: 'equalizer',
  },
  {
    _id: '4',
    title: 'Les acteurs de la fédération',
    content: [
      'La fédération a été créée en 2021 pour rassembler et construire une communauté française autour du roundnet. L’équipe est constituée de plusieurs personnes (joueurs et non-joueurs) passionnés de roundnet.'
    ],
    links: [{
      href: '/qui-sommes-nous/equipe-roundnet-france',
      text: 'L\'équipe Roundnet France',
    }],
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