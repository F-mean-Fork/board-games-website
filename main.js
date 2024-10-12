const items = document.querySelectorAll('.wrapper__header__bar__item');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.wrapper__header__menu');

const closeButton = document.querySelector('.wrapper__header__menu__close');

const carousel = document.getElementById('carouselExample');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
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
slideCountElement.textContent = `1 / `;


carouselInner.addEventListener('scroll', function () {
  const totalWidth = carouselInner.scrollWidth - carouselInner.clientWidth; 

  const scrollPercentage = (carouselInner.scrollLeft / totalWidth) * 100;
  let activeIndex = 0;
  
  if (scrollPercentage >= 0 && scrollPercentage < 20) {
      activeIndex = 0;
  } else if (scrollPercentage >= 20 && scrollPercentage < 40) {
      activeIndex = 1;
  } else if (scrollPercentage >= 40 && scrollPercentage < 60) {
      activeIndex = 2;
  } else if (scrollPercentage >= 60 && scrollPercentage < 80) {
      activeIndex = 3;
  } else if (scrollPercentage >= 80 && scrollPercentage <= 100) {
      activeIndex = 4;
  }

  dots.forEach((dot, index) => {
      if (index === Math.floor(activeIndex)) {
          dot.classList.add('active');
      } else {
          dot.classList.remove('active');
      }
  });

  let slideNumber = Math.ceil(scrollPercentage / 10);
  if (scrollPercentage === 0) {
      slideNumber = 1;
  }
  slideCountElement.textContent = `${slideNumber} / `;
});

