// Dynamically generate slides
const slideshowContainer = document.querySelector(".slideshow-container");
const totalImages = 15;

for (let i = 1; i <= totalImages; i++) {
  const slide = document.createElement("div");
  slide.className = "slide";
  if (i === 1) slide.classList.add("active");

  slide.innerHTML = `
    <img src="Pictures/Darts/image${i}.jpg" alt="Darts photo ${i}">
  `;

  slideshowContainer.appendChild(slide);
}

(() => {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const slideCounter = document.getElementById("slide-counter");
  let slideInterval;
  let isTransitioning = false;

  if (slides.length === 0) return;

  const updateSlideCounter = () => {
    slideCounter.textContent = `${slideIndex + 1}/${slides.length}`;
  };

  const showSlide = (index) => {
    if (isTransitioning) return;
    isTransitioning = true;

    slides[slideIndex].classList.remove("active");

    slideIndex = (index + slides.length) % slides.length;

    slides[slideIndex].classList.add("active");
    updateSlideCounter();

    setTimeout(() => {
      isTransitioning = false;
    }, 600); // matches CSS fade duration
  };

  const changeSlide = (n) => {
    showSlide(slideIndex + n);
    resetAutoSlide();
  };

  const goToBeginning = () => {
    showSlide(0);
    resetAutoSlide();
  };

  const goToEnd = () => {
    showSlide(slides.length - 1);
    resetAutoSlide();
  };

  const autoSlide = () => {
    showSlide(slideIndex + 1);
  };

  const resetAutoSlide = () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoSlide, 5000);
  };

  const initSlides = () => {
    slides[slideIndex].classList.add("active");
    updateSlideCounter();
    slideInterval = setInterval(autoSlide, 5000);
  };

  // Expose only what the HTML needs
  window.changeSlide = changeSlide;
  window.goToBeginning = goToBeginning;
  window.goToEnd = goToEnd;

  initSlides();
})();

function addSwipeSupport() {
  const slideshow = document.querySelector(".slideshow-container");
  let touchStartX = 0;
  let touchEndX = 0;

  slideshow.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  slideshow.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  });

  function handleSwipeGesture() {
    const swipeThreshold = 50; // minimum distance to count as swipe
    const deltaX = touchEndX - touchStartX;

    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX < 0) {
        changeSlide(1); // swipe left → next slide
      } else {
        changeSlide(-1); // swipe right → previous slide
      }
    }
  }
}

addSwipeSupport();