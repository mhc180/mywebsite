let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const slideCounter = document.getElementById("slide-counter");
let slideInterval;

function updateSlideCounter() {
  slideCounter.textContent = `${slideIndex + 1}/${slides.length}`;
}

function showSlide(index) {
  // Remove "active" from current slide
  slides[slideIndex].classList.remove("active");

  // Update the index, wrapping around if necessary
  slideIndex = (index + slides.length) % slides.length;

  // Add "active" to the new slide
  slides[slideIndex].classList.add("active");

  // Update the slide counter
  updateSlideCounter();
}

function changeSlide(n) {
  showSlide(slideIndex + n);
  resetAutoSlide();
}

function goToBeginning() {
  showSlide(0);
  resetAutoSlide();
}

function goToEnd() {
  showSlide(slides.length - 1);
  resetAutoSlide();
}

function autoSlide() {
  showSlide(slideIndex + 1);
}

function resetAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = setInterval(autoSlide, 5000);
}

// Initialize slideshow
function initSlides() {
  slides[slideIndex].classList.add("active");
  updateSlideCounter();
  slideInterval = setInterval(autoSlide, 5000);
}

initSlides();
