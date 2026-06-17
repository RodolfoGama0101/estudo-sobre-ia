/* apresentacao-ia-2026/js/animations.js */

document.addEventListener('DOMContentLoaded', () => {
  // Listen for slide change events to trigger animations
  document.addEventListener('slideChanged', (e) => {
    const slideIndex = e.detail.index;
    const slide = e.detail.slide;

    // Reset animations on all inactive slides
    resetAllAnimations();

    // Trigger specific animations based on slide index
    switch (slideIndex) {
      case 0: // Slide 1: Capa (Typewriter)
        triggerTypewriter(slide);
        break;
      case 4: // Slide 5: A Virada de 2025 (Count up parameters)
        triggerCountUp(slide);
        break;
    }

    // Trigger general cascading entries for elements with class .animate-cascade
    triggerCascadingElements(slide);
  });

  // Typewriter effect function
  function triggerTypewriter(slide) {
    const titleEl = slide.querySelector('.typewriter-title');
    if (!titleEl) return;
    
    const text = titleEl.getAttribute('data-text') || titleEl.textContent;
    titleEl.textContent = '';
    titleEl.style.borderRight = '3px solid var(--color-secondary)';
    
    let i = 0;
    const speed = 70; // ms per char
    
    function type() {
      if (i < text.length) {
        titleEl.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        titleEl.style.borderRight = 'none'; // remove cursor when finished
      }
    }
    
    type();
  }

  // Parameter Count Up on Slide 5
  function triggerCountUp(slide) {
    const countEls = slide.querySelectorAll('.parameter-count');
    countEls.forEach(el => {
      const targetVal = parseFloat(el.getAttribute('data-target'));
      const format = el.getAttribute('data-format') || '';
      let currentVal = 0;
      const duration = 1500; // ms
      const stepTime = 30; // ms
      const steps = duration / stepTime;
      const increment = targetVal / steps;
      
      const timer = setInterval(() => {
        currentVal += increment;
        if (currentVal >= targetVal) {
          currentVal = targetVal;
          clearInterval(timer);
        }
        
        // Formatting helper
        if (currentVal % 1 !== 0) {
          el.textContent = currentVal.toFixed(1) + format;
        } else {
          el.textContent = Math.round(currentVal) + format;
        }
      }, stepTime);
    });
  }

  // Cascading reveal of cards/rows on current slide
  function triggerCascadingElements(slide) {
    const cascadeItems = slide.querySelectorAll('.animate-cascade');
    cascadeItems.forEach((item, index) => {
      const delay = parseFloat(item.getAttribute('data-delay') || (index * 0.1));
      
      item.style.opacity = '0';
      item.style.transform = 'translateY(15px)';
      item.style.transition = `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`;
      
      // Trigger rendering in next microtask
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 50);
    });
  }

  // Reset helper
  function resetAllAnimations() {
    // We clean inline styles of animations so they can run again
    const allCascades = document.querySelectorAll('.animate-cascade');
    allCascades.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(15px)';
      item.style.transition = 'none';
    });

    const counts = document.querySelectorAll('.parameter-count');
    counts.forEach(el => {
      el.textContent = '0' + (el.getAttribute('data-format') || '');
    });
  }
});
