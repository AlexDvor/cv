const content = document.getElementById('content-list');
const show = document.querySelector('.education__title__btn');

show.addEventListener('click', () => {
  content.classList.toggle('show-content');
});
