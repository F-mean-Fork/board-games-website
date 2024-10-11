const items = document.querySelectorAll('.wrapper__header__bar__item');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.wrapper__header__menu');

const closeButton = document.querySelector('.wrapper__header__menu__close');

const carousel = document.getElementById('carouselExample');
const carouselInner = document.querySelector('.carousel-inner');
const dots = document.querySelectorAll('.wrapper__feedback__content__dots__dot');
const slideCountElement = document.querySelector('.wrapper__feedback__titleWrap__num__count');


items.forEach((item) => {
  item.addEventListener('mouseover', () => {
    const highlight = item.querySelector('.wrapper__header__bar__item__highlight');
    highlight.style.opacity = 100;
  });

  item.addEventListener('mouseout', () => {
    const highlight = item.querySelector('.wrapper__header__bar__item__highlight');
    highlight.style.opacity = 0;
  });
});

burger.addEventListener('click', () => {
  menu.classList.add('wrapper__header__menu-slide');
});


closeButton.addEventListener('click', () => {
  menu.classList.remove('wrapper__header__menu-slide');
});


dots[0].classList.add('active');
slideCountElement.textContent = `1 /`;

carouselInner.addEventListener('scroll', function () {
  const activeIndex = Math.floor(carouselInner.scrollLeft / carouselInner.children[0].offsetWidth);
  dots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  slideCountElement.textContent = `${activeIndex + 1} /`;
});

