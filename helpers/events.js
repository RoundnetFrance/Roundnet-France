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
    case "nonMixed":
      return "Non-Mixte";
    case "free":
      return "Libre";
    case "mixed-non-mixed":
      return "Mixte & Non-Mixte";
    case "cdf":
      return "Championnat de France";
    case "cdfSquads":
      return "Championnat de France des Clubs"; 
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
    case "tourStop":
      return "Tour Stop";
    case "ets":
      return "ETS - Tournoi européen"
    default:
      return label;
  }
}
