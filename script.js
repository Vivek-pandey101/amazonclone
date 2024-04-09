// JavaScript for automatic sliding
let slideIndex = 0;

function nextSlide() {
  slideIndex++;
  showSlides();
}

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  const slideWidth = slides[0].clientWidth;
  const offset = -slideWidth * slideIndex;
  document.querySelector('.slider').style.transform = `translateX(${offset}px)`;
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
