let currentSlideIndex = 0;

function showSlide(index, sliderId) {
  const slides = document.querySelectorAll(`#${sliderId} .slide`);
  
  // Verstecke alle Slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // Zeige den aktuellen Slide an
  if (index >= slides.length) {
    currentSlideIndex = 0; // Wenn der Index über die Anzahl der Slides hinausgeht, zurück zum ersten Slide
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1; // Wenn der Index unter 0 ist, gehe zum letzten Slide
  } else {
    currentSlideIndex = index;
  }
  
  slides[currentSlideIndex].style.display = "block"; // Aktuellen Slide anzeigen
}

// Funktion zum Bewegen der Slides
function moveSlide(direction, sliderId) {
  showSlide(currentSlideIndex + direction, sliderId);
}

// Beim Laden der Seite den ersten Slide anzeigen
document.addEventListener("DOMContentLoaded", function () {
  showSlide(currentSlideIndex, "ci-slider");
});
