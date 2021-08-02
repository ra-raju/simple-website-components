let button = document.querySelector('#btn');
let demoText = document.querySelector('.demo-text');

let i = 0;
let speed = 50;
let text =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam temporibus quisquam rerum, possimus voluptate hic maxime iusto? Doloremque earum officia dolorum molestias repellendus voluptatum itaque nulla optio tenetur quam a corrupti rerum laudantium nobis fuga, nostrum ut! Ullam, cum? Tenetur accusamus consequatur sed? Saepe voluptates quidem voluptatibus ex omnis tempora.';

button.addEventListener('click', function typeWritter() {
  if (i < text.length) {
    demoText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWritter, speed);
  }
});
