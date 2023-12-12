const DrawerInitiator = {
  init({ button, drawer, content }) {
    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('showNav');
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('showNav');
  },
};

export default DrawerInitiator;
