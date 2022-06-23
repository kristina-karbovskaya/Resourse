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
        goToBlock.getBoundingClientRect().topMob +
        pageYOffset -
        document.querySelector('.header-adaptive').offsetHeight;

      window.scrollTo({
        top: goToBlockValue,
        topMob: goToBlockValueMob,
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

// burger menu
const iconMenu = document.querySelector('.header-adaptive__icon');
const burgerMenu = document.querySelector('.nav-adaptive');
const mobLogo = document.querySelector('.header-adaptive__logo');

if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('__lock');
    iconMenu.classList.toggle('__active');
    burgerMenu.classList.toggle('__active');
    mobLogo.classList.toggle('__active');
  });
}

// search
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('.search-box__input');
const searchBtn = document.querySelector('.search-box__btn-wrapper');
const cancelBtn = document.querySelector('.search-box__btn-wrapper__cancel');

searchBtn.addEventListener('click', clickSearchBtn);

function clickSearchBtn() {
  searchBox.classList.add('active');
  searchInput.classList.add('active');
  searchBtn.classList.add('active');
  cancelBtn.classList.add('active');
}

cancelBtn.addEventListener('click', cancelSearchBtn);

function cancelSearchBtn(e) {
  searchBox.classList.remove('active');
  searchInput.classList.remove('active');
  searchBtn.classList.remove('active');
  cancelBtn.classList.remove('active');
}

// Animation on scroll
const animationItems = document.querySelectorAll('.__animation-item');

if (animationItems.length > 0) {
  window.addEventListener('scroll', animationOnScroll);

  function animationOnScroll() {
    for (let i = 0; i < animationItems.length; i++) {
      const animationItem = animationItems[i];
      const animationItemHeight = animationItem.offsetHeight;
      const animationItemOffSet = offset(animationItem).top;
      const animationStart = 4;

      let animationItemPoint =
        window.innerHeight - animationItemHeight / animationStart;

      if (animationItemHeight > window.innerHeight) {
        animationItemPoint =
          window.innerHeight - window.innerHeight / animationStart;
      }

      if (
        pageYOffset > animationItemOffSet - animationItemPoint &&
        pageYOffset < animationItemOffSet + animationItemHeight
      ) {
        animationItem.classList.add('scroll');
      } else {
        if (!animationItem.classList.contains('__hidden-anim')) {
          animationItem.classList.remove('scroll');
        }
      }
    }

    const mobHeaderAnim = document.querySelector('.header-adaptive');
    if (window.pageYOffset > 0) {
      mobHeaderAnim.classList.add('mob-header__anim');
    } else {
      mobHeaderAnim.classList.remove('mob-header__anim');
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }

  setTimeout(() => {
    animationOnScroll();
  }, 300);
}
