let button = document.querySelector('button');
let snackbar = document.querySelector('.snackbar');

button.addEventListener('click', () => {
  snackbar.classList.add('show');

  setTimeout(() => {
    snackbar.classList.remove('show');
  }, 3000);
});
