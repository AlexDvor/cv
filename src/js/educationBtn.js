const content = document.getElementById('content-list');
const show = document.querySelector('.education__title__btn');

show.addEventListener('click', () => {
  content.classList.toggle('show-content');
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
});
