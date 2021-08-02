/* 
f244 <i class="fas fa-battery-empty"></i>
f243 <i class="fas fa-battery-quarter"></i>
f242 <i class="fas fa-battery-half"></i>
f241 <i class="fas fa-battery-three-quarters"></i>
f240 <i class="fas fa-battery-full"></i>

*/

/* 

f11a f118 f119 f596

*/

function changeBattary() {
  var battary = document.getElementById('battary');
  battary.innerHTML = '&#xf244;';
  setTimeout(function () {
    battary.innerHTML = '&#xf243;';
  }, 1000);
  setTimeout(function () {
    battary.innerHTML = '&#xf242;';
  }, 2000);
  setTimeout(function () {
    battary.innerHTML = '&#xf241;';
  }, 3000);
  setTimeout(function () {
    battary.innerHTML = '&#xf240;';
  }, 4000);
}

setInterval(changeBattary, 5000);

changeBattary();

/* change emoji */

function changeEmoji() {
  let emoji = document.getElementById('emoji');

  emoji.innerHTML = '&#xf11a;';

  setTimeout(() => {
    emoji.innerHTML = '&#xf118;';
  }, 3000);

  setTimeout(() => {
    emoji.innerHTML = '&#xf119;';
  }, 6000);

  setTimeout(() => {
    emoji.innerHTML = '&#xf596;';
  }, 9000);

  setInterval(changeEmoji, 12000);
}

changeEmoji();
