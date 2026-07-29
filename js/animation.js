/* ==========================================================================
   SYNC RESTAURANT - ANIMATIONS MODULE
   Handles Typing Effect, Counter Animations, Scroll Reveals & Parallax
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------------
     1. Typing Effect for Hero Subheading ("Where Taste Meets Perfection")
     ------------------------------------------------------------------------ */
  const typingElement = document.getElementById('typing-text');
  if (typingElement) {
    const textToType = "Where Taste Meets Perfection";
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
      const currentText = textToType.substring(0, charIndex);
      typingElement.textContent = currentText;

      if (!isDeleting && charIndex < textToType.length) {
        charIndex++;
        setTimeout(typeEffect, 90);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 40);
      } else {
        isDeleting = !isDeleting;
        setTimeout(typeEffect, isDeleting ? 2500 : 800);
      }
    }

    setTimeout(typeEffect, 1200);
  }

  /* ------------------------------------------------------------------------
     2. Scroll Reveal Animations (Intersection Observer)
     ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve once revealed
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ------------------------------------------------------------------------
     3. Animated Statistics Counters
     ------------------------------------------------------------------------ */
  const counterElements = document.querySelectorAll('.stat-number[data-target]');
  let countersTriggered = false;

  function runCounters() {
    counterElements.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const duration = 2000; // 2 seconds
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target.toLocaleString() + '+';
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current).toLocaleString() + '+';
        }
      }, stepTime);
    });
  }

  const statsSection = document.getElementById('stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersTriggered) {
          countersTriggered = true;
          runCounters();
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  }

  /* ------------------------------------------------------------------------
     4. Button Ripple Effect
     ------------------------------------------------------------------------ */
  const rippleButtons = document.querySelectorAll('.btn-luxury, .btn-add-cart, .filter-btn');

  rippleButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const circle = document.createElement('span');
      circle.classList.add('ripple');
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const existingRipple = this.querySelector('.ripple');
      if (existingRipple) {
        existingRipple.remove();
      }

      this.appendChild(circle);
    });
  });

  /* ------------------------------------------------------------------------
     5. Mouse Parallax Effect on Floating Icons
     ------------------------------------------------------------------------ */
  const heroSection = document.getElementById('home');
  const floatingIcons = document.querySelectorAll('.floating-icon');

  if (heroSection && floatingIcons.length > 0) {
    heroSection.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const moveX = (clientX - centerX) / 45;
      const moveY = (clientY - centerY) / 45;

      floatingIcons.forEach((icon, index) => {
        const speed = (index + 1) * 0.4;
        icon.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    });
  }
});
