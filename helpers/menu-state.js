import menuElements from '../components/layout/header/menu-elements';

export default function() {
  const menuInitialState = {};
  menuElements.forEach(element => {
    menuInitialState[element.slug] = false;
  });
  return menuInitialState;
}