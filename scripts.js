let currentIndex = 0;

function moveSlide(step, sliderId) {
  const slider = document.getElementById(sliderId);
  const slides = slider.getElementsByClassName('slide');
  const totalSlides = slides.length;

  // Update the current index with wrap-around logic
  currentIndex = (currentIndex + step + totalSlides) % totalSlides;

  // Move the slider
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}
