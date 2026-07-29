/* ==========================================================================
   SYNC RESTAURANT - SLIDER MODULE
   Handles Hero Full-screen Slideshow & Testimonial Carousel
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------------
     1. Hero Background Slider (10 Images, 4s interval)
     ------------------------------------------------------------------------ */
  const heroSlideContainer = document.getElementById('hero-slider-container');
  
  // 10 Changing Background Images
  const backgroundImages = [
    'images/backgrounds/hero1.png',
    'images/backgrounds/hero2.png',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1920&q=80'
  ];

  if (heroSlideContainer) {
    // Populate slides dynamically
    backgroundImages.forEach((imgUrl, index) => {
      const slide = document.createElement('div');
      slide.className = `hero-slide ${index === 0 ? 'active' : ''}`;
      slide.style.backgroundImage = `url('${imgUrl}')`;
      heroSlideContainer.appendChild(slide);
    });

    let currentSlide = 0;
    const slides = heroSlideContainer.querySelectorAll('.hero-slide');

    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }

    // Auto slideshow every 4 seconds
    setInterval(nextSlide, 4000);
  }

  /* ------------------------------------------------------------------------
     2. Testimonials Carousel
     ------------------------------------------------------------------------ */
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const dotsContainer = document.getElementById('testimonial-dots');
  let currentTestimonial = 0;
  let testimonialInterval;

  if (testimonialSlides.length > 0 && dotsContainer) {
    // Create navigation dots
    testimonialSlides.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `dot ${idx === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => goToTestimonial(idx));
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function goToTestimonial(index) {
      testimonialSlides[currentTestimonial].classList.remove('active');
      dots[currentTestimonial].classList.remove('active');
      currentTestimonial = index;
      testimonialSlides[currentTestimonial].classList.add('active');
      dots[currentTestimonial].classList.add('active');
      resetTestimonialTimer();
    }

    function nextTestimonial() {
      const nextIndex = (currentTestimonial + 1) % testimonialSlides.length;
      goToTestimonial(nextIndex);
    }

    function resetTestimonialTimer() {
      clearInterval(testimonialInterval);
      testimonialInterval = setInterval(nextTestimonial, 5000);
    }

    testimonialInterval = setInterval(nextTestimonial, 5000);
  }
});
