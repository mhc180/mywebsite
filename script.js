let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

// Function to initialize and show the first slide
function initSlides() {
  slides[slideIndex].classList.add("active"); 
  dots[slideIndex].classList.add("active-dot");
  setTimeout(showSlides, 5000); // Initial delay for 5 seconds
}

// Main function to show slides
function showSlides() {
  // Remove "active" class from current slide and dot
  slides[slideIndex].classList.remove("active");
  dots[slideIndex].classList.remove("active-dot");

  // Increment index to move to the next slide
  slideIndex = (slideIndex + 1) % slides.length; // Loop back to start if at end

  // Add "active" class to the new slide and dot
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active-dot");

  // Call showSlides again after 5 seconds
  setTimeout(showSlides, 5000); // 5-second interval
}

// Initialize slides on load
initSlides();

// Manual slide controls
function changeSlide(n) {
  slides[slideIndex].classList.remove("active");
  dots[slideIndex].classList.remove("active-dot");

  // Calculate new index
  slideIndex = (slideIndex + n + slides.length) % slides.length;

  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active-dot");
}

function setSlide(n) {
  slides[slideIndex].classList.remove("active");
  dots[slideIndex].classList.remove("active-dot");

  slideIndex = n;

  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active-dot");
}
