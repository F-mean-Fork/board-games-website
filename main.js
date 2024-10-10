const items = document.querySelectorAll('.wrapper__header__bar__item');

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