const backgroundImages = [
  './assets/night-sky-6245049.jpg',
  './assets/ocean-3605547.jpg',
  './assets/pexels-arkkrapol-anantachote-1571746.jpg',
];

function changeBackgroundImage() {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  const selectedImage = backgroundImages[randomIndex];
  document.body.style.background = `url('${selectedImage}')`;
  document.body.style.backgroundSize = 'cover';
}

setInterval(changeBackgroundImage, 5000);
