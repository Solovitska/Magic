const photos = [
  './img/military/ten.webp',
  './img/military/seven.webp',
  './img/military/one.webp',
  './img/military/five.webp',
  './img/military/onee.webp',
   './img/military/three.webp',
  './img/military/eleven.webp',
   './img/military/kozak.webp',
 
];

let index = 0;
const mainPhoto = document.getElementById('mainPhoto');

setInterval(() => {
  index = (index + 1) % photos.length;
  mainPhoto.src = photos[index];
}, 3000); // змінює фото кожні 3 секунди
