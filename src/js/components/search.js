const searchBtn = document.querySelector('.search__button');
const search = document.querySelector('.search__wrap');
const searchCloseBtn = document.querySelector('.search__close');

searchBtn.addEventListener('click', function () {
  search.classList.add('search__wrap-is-open');
});

searchCloseBtn.addEventListener('click', function () {
  search.classList.remove('search__wrap-is-open');
})
