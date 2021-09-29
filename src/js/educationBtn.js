const content = document.getElementById('content-list');
const btnRef = document.querySelector('.education__title__btn');
const arrowBtnRef = document.querySelector('.arrow-icon');

btnRef.addEventListener('click', onClickButton);
arrowBtnRef.addEventListener('click', onClickButton);

function onClickButton() {
  content.classList.toggle('show-content');
  arrowBtnRef.classList.toggle('open');

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
}
