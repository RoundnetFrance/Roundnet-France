export function getEventField(field) {
  switch (field) {
    case "indoor":
      return "Indoor";
    case "grass":
      return "Herbe";
    case "sand":
      return "Sable";
    case "turf":
      return "Synthétique";
    case "urban":
      return "Urban";
    default:
      return "Autre";
  }
}

export function getEventFormat(format) {
  switch (format) {
    case "2v2":
      return "2v2";
    case "3v3":
      return "3v3";
    default:
      return "Autre";
  }
}

export function getEventCategory(category) {
  switch (category) {
    case "mixed":
      return "Mixte";
    case "male":
      return "Masculin";
    case "female":
      return "Féminin";
    default:
      return "Autre";
  }
}

export function getEventType(event) {
  switch (event) {
    case "cdf":
      return "Coupe de France";
    case "tour-stop":
      return "Tour Stop";
    case "ric":
      return "Rencontres Inter-Club";
    case "open":
      return "Tournoi Open";
    case "worlds":
      return "Championnats du monde";
    case "europe":
      return "Championnats d'Europe";
  }
}

export function getEventLevel(level) {
  switch (level) {
    case "all":
      return "Tous";
    case "beginnerFriendly":
      return "Ouvert aux débutants";
    case "noBeginner":
      return "Confirmés";
    default:
      return level;
  }
}

export default function getEventLabel(label) {
  switch (label) {
    case "other":
      return "Autre";
    case "indoor":
      return "Indoor";
    case "grass":
      return "Herbe";
    case "sand":
      return "Sable";
    case "turf":
      return "Synthétique";
    case "urban":
      return "Urban";
    case "2v2":
      return "2v2";
    case "3v3":
      return "3v3";
    case "mixed":
      return "Mixte";
    case "male":
      return "Masculin";
    case "female":
      return "Féminin";
    case "cdf":
      return "Coupe de France";
    case "ric":
      return "Rencontres Inter-Club";
    case "open":
      return "Tournoi Open";
    case "worlds":
      return "Championnats du monde";
    case "europe":
      return "Championnats d'Europe";
    case "all":
      return "Tous";
    case "beginnerFriendly":
      return "Ouvert aux débutants";
    case "noBeginner":
      return "Confirmés";
    default:
      return label;
  }
}
