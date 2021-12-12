const burgerBtnClose = document.querySelector('.nav__menu-close');
const burgerMenu = document.querySelector('.nav__list');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.add('nav__list-is-open');
  console.log(1)
})

burgerBtnClose.addEventListener('click', () => {
  burgerMenu.classList.remove('nav__list-is-open');
})
