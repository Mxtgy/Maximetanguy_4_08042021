function openMenu() {
  const navHeader = document.getElementById('myTopnav');

  if (navHeader.className === 'topnav') {
    navHeader.className += ' burgerOpened';

    return true;
  }

  navHeader.className = 'topnav';

  return true;
}

export default openMenu;
