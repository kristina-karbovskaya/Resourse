const menuLinks = document.querySelectorAll('.nav__list-link[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;

    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const goToBlock = document.querySelector(menuLink.dataset.goto);
      const goToBlockValue =
        goToBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector('.header').offsetHeight;

      const goToBlockValueMob =
        goToBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector('.header-adaptive').offsetHeight;

      window.scrollTo({
        top: goToBlockValue,
        top: goToBlockValueMob,
        behavior: 'smooth'
      });

      if (iconMenu.classList.contains('__active')) {
        document.body.classList.remove('__lock');
        iconMenu.classList.remove('__active');
        burgerMenu.classList.remove('__active');
      }

      e.preventDefault();
    }
  }
}

const iconMenu = document.querySelector('.header-adaptive__icon');
const burgerMenu = document.querySelector('.nav-adaptive');

if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('__lock');
    iconMenu.classList.toggle('__active');
    burgerMenu.classList.toggle('__active');
  });
}

// iconMenu.addEventListener('click', () => {
//   nav.classList.toggle('__active');
// });
