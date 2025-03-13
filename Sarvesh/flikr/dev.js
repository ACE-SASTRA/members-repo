
const backgroundImages = ["./assets/night-sky-6245049.jpg","./assets/ocean-3605547.jpg","./assets/pexels-arkkrapol-anantachote-1571746.jpg","./assets/pexels-liger-pham-1108701.jpg","./assets/pexels-piccinng-3075993.jpg", "./assets/river-5572289.jpg", "./assets/star-trails-1846734.jpg"];

function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const selectedImage = backgroundImages[randomIndex];
    document.body.style.background = `url('${selectedImage}')`;
    document.body.style.backgroundSize = 'cover';
  }
  

setInterval(changeBackgroundImage, 5000);