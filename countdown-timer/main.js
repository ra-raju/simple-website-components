// create a extra time for 1 hour

let countTime = new Date().getTime() + 1000 * 60 * 60 * 48;

console.log(countTime);

// use setInterval for live reload
let x = setInterval(() => {
  let presentTime = new Date().getTime();

  let distance = countTime - presentTime;

  let day = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   day < 10 ? 0 + day : day;
  if (day < 10) {
    day = '0' + day;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  let countdownTime = `${day} : ${hours} : ${minutes} : ${seconds}`;

  document.querySelector('.countdown-time').innerHTML = countdownTime;

  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);
