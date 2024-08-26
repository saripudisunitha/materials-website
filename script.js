let currentIndex = 0;
const intervalTime = 3000; // Time in milliseconds (3 seconds)
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSliderPosition() {
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSliderPosition();
});

document.querySelector('.prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1;
  }
  updateSliderPosition();
});

// Automatic sliding
setInterval(() => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSliderPosition();
}, intervalTime);
