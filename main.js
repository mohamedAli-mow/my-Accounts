
const images = ["IMG_20260627_104312_744.jpg", "WhatsApp Image 2026-03-27 at 3.02.29 PM.jpeg" ,'snapchat1.jpg' , "snapchat2.jpg" , "snapchat3.jpg"];
let currentIndex = 0;

setInterval(() => {
  const element = document.querySelector('.pic');
  element.style.opacity = 0;
  
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    element.src = images[currentIndex];
    element.style.opacity = 1;
  }, 500);
}, 4000);