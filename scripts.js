let currentSlideIndex = 0;

// Funktion zum Anzeigen des Slides anhand des Index
function showSlide(index, sliderId) {
  const slides = document.querySelectorAll(`#${sliderId} .slide`);

  // Verstecke alle Slides
  slides.forEach((slide) => {
    slide.classList.remove('show');
  });

  // Berechne den korrekten Index
  currentSlideIndex = (index + slides.length) % slides.length;

  // Füge die "show"-Klasse zum aktuellen Slide hinzu
  slides[currentSlideIndex].classList.add('show');
}

// Funktion zum Bewegen der Slides basierend auf der Richtung
function moveSlide(direction, sliderId) {
  showSlide(currentSlideIndex + direction, sliderId);
}

// Beim Laden der Seite den ersten Slide anzeigen
document.addEventListener("DOMContentLoaded", function () {
  showSlide(currentSlideIndex, "ci-slider");
});
