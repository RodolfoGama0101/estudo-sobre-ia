/* apresentacao-ia-2026/js/navigation.js */

document.addEventListener('DOMContentLoaded', () => {
  const slideshow = {
    currentSlide: 0,
    slides: [],
    dots: [],
    drawerItems: [],
    hud: null,
    sectionTitle: null,
    counter: null,
    drawer: null,
    backdrop: null,
    
    // Touch variables
    touchStartX: 0,
    touchEndX: 0,

    init() {
      this.slides = Array.from(document.querySelectorAll('.slide'));
      this.hud = document.querySelector('.hud-overlay');
      this.sectionTitle = document.querySelector('.hud-section-title');
      this.counter = document.querySelector('.hud-slide-counter');
      this.drawer = document.querySelector('.nav-drawer');
      this.backdrop = document.querySelector('.drawer-backdrop');
      
      if (this.slides.length === 0) return;

      this.createProgressDots();
      this.createDrawerList();
      this.setupEventListeners();
      this.setupResizeHandler();
      this.initTheme();
      this.initCustomCursor();
      this.initCursorColor();
      
      // Navigate to first slide
      this.goToSlide(0);
    },

    setupResizeHandler() {
      const updateScale = () => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Base dimensions of our presentation slide (16:10 aspect ratio)
        const baseWidth = 1280;
        const baseHeight = 800;
        
        // Calculate scale factor (with 5% side padding, 10% vertical padding)
        const scaleX = (viewportWidth * 0.94) / baseWidth;
        const scaleY = (viewportHeight * 0.86) / baseHeight;
        
        // Fit slide inside the viewport
        let scale = Math.min(scaleX, scaleY);
        
        // Don't scale above 1.25 to avoid blurriness on massive screens
        if (scale > 1.25) scale = 1.25;
        
        // Don't scale below 0.35 on tiny devices
        if (scale < 0.35) scale = 0.35;
        
        // Set CSS Custom Property
        document.documentElement.style.setProperty('--slide-scale', scale);
      };
      
      // Initial scale calculation
      updateScale();
      
      // Scale on resize
      window.addEventListener('resize', updateScale);
    },

    initTheme() {
      const themeBtn = document.querySelector('.theme-toggle-btn');
      const savedTheme = localStorage.getItem('presentation-theme');
      
      const setTheme = (theme) => {
        if (theme === 'light') {
          document.body.classList.add('light-theme');
          localStorage.setItem('presentation-theme', 'light');
          if (themeBtn) {
            themeBtn.innerHTML = '<i data-lucide="moon"></i>';
            if (window.lucide) lucide.createIcons();
          }
        } else {
          document.body.classList.remove('light-theme');
          localStorage.setItem('presentation-theme', 'dark');
          if (themeBtn) {
            themeBtn.innerHTML = '<i data-lucide="sun"></i>';
            if (window.lucide) lucide.createIcons();
          }
        }
      };

      // Set initial theme
      if (savedTheme === 'light') {
        setTheme('light');
      } else {
        setTheme('dark');
      }

      if (themeBtn) {
        themeBtn.addEventListener('click', () => {
          const isLight = document.body.classList.contains('light-theme');
          setTheme(isLight ? 'dark' : 'light');
        });
      }
    },

    toggleTheme() {
      const isLight = document.body.classList.contains('light-theme');
      const themeBtn = document.querySelector('.theme-toggle-btn');
      if (isLight) {
        document.body.classList.remove('light-theme');
        localStorage.setItem('presentation-theme', 'dark');
        if (themeBtn) {
          themeBtn.innerHTML = '<i data-lucide="sun"></i>';
          if (window.lucide) lucide.createIcons();
        }
      } else {
        document.body.classList.add('light-theme');
        localStorage.setItem('presentation-theme', 'light');
        if (themeBtn) {
          themeBtn.innerHTML = '<i data-lucide="moon"></i>';
          if (window.lucide) lucide.createIcons();
        }
      }
    },

    initCursorColor() {
      const cursorBtn = document.querySelector('.cursor-toggle-btn');
      const savedCursor = localStorage.getItem('presentation-cursor-color');
      
      const setCursorColor = (color) => {
        if (color === 'red') {
          document.body.classList.add('red-cursor');
          localStorage.setItem('presentation-cursor-color', 'red');
        } else {
          document.body.classList.remove('red-cursor');
          localStorage.setItem('presentation-cursor-color', 'default');
        }
      };

      if (savedCursor === 'red') {
        setCursorColor('red');
      } else {
        setCursorColor('default');
      }

      if (cursorBtn) {
        cursorBtn.addEventListener('click', () => {
          const isRed = document.body.classList.contains('red-cursor');
          setCursorColor(isRed ? 'default' : 'red');
        });
      }
    },

    toggleCursorColor() {
      const isRed = document.body.classList.contains('red-cursor');
      if (isRed) {
        document.body.classList.remove('red-cursor');
        localStorage.setItem('presentation-cursor-color', 'default');
      } else {
        document.body.classList.add('red-cursor');
        localStorage.setItem('presentation-cursor-color', 'red');
      }
    },

    initCustomCursor() {
      // Check if device supports hover (desktop)
      if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
      
      const dot = document.createElement('div');
      const ring = document.createElement('div');
      dot.className = 'custom-cursor-dot';
      ring.className = 'custom-cursor-ring';
      document.body.appendChild(dot);
      document.body.appendChild(ring);
      
      let mouseX = 0;
      let mouseY = 0;
      let ringX = 0;
      let ringY = 0;
      
      window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Move center dot immediately
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      });
      
      // Interpolated trailing loop using requestAnimationFrame (snappy tracking)
      const tick = () => {
        ringX += (mouseX - ringX) * 0.36;
        ringY += (mouseY - ringY) * 0.36;
        
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        requestAnimationFrame(tick);
      };
      tick();
      
      // Dynamically attach hover listeners to clickables, support dynamic elements too
      const addHoverListeners = () => {
        const interactives = document.querySelectorAll(
          'button, a, .progress-dot, .nav-drawer-item, .arrow-nav-btn, .quick-menu-btn, .theme-toggle-btn, .card, .pricing-card, .org-card, .flip-card-container, .agenda-link-card, [onclick]'
        );
        interactives.forEach(el => {
          // Prevent double-attaching
          if (el.dataset.hasCursorHover) return;
          el.dataset.hasCursorHover = 'true';
          
          el.addEventListener('mouseenter', () => {
            dot.classList.add('custom-cursor-active');
            ring.classList.add('custom-cursor-active');
          });
          el.addEventListener('mouseleave', () => {
            dot.classList.remove('custom-cursor-active');
            ring.classList.remove('custom-cursor-active');
          });
        });
      };
      
      // Initial attach
      addHoverListeners();
      
      // Re-attach listeners periodically or on events where UI changes (like slides change or menu open)
      document.addEventListener('slideChanged', addHoverListeners);
      const menuTrigger = document.querySelector('.quick-menu-btn');
      if (menuTrigger) {
        menuTrigger.addEventListener('click', () => {
          setTimeout(addHoverListeners, 100); // slight delay to wait for drawer render
        });
      }
    },

    createProgressDots() {
      const dotsContainer = document.querySelector('.hud-progress-dots');
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      
      this.slides.forEach((slide, index) => {
        const dot = document.createElement('button');
        dot.classList.add('progress-dot');
        dot.setAttribute('aria-label', `Ir para slide ${index + 1}`);
        dot.addEventListener('click', () => {
          this.goToSlide(index);
          this.closeDrawer();
        });
        dotsContainer.appendChild(dot);
        this.dots.push(dot);
      });
    },

    createDrawerList() {
      const drawerList = document.querySelector('.nav-drawer-list');
      if (!drawerList) return;
      drawerList.innerHTML = '';

      this.slides.forEach((slide, index) => {
        const titleEl = slide.querySelector('.slide-header h2') || slide.querySelector('h1');
        const titleText = titleEl ? titleEl.textContent.trim() : `Slide ${index + 1}`;
        
        const listItem = document.createElement('li');
        listItem.classList.add('nav-drawer-item');
        listItem.textContent = `${index + 1}. ${titleText}`;
        listItem.addEventListener('click', () => {
          this.goToSlide(index);
          this.closeDrawer();
        });
        drawerList.appendChild(listItem);
        this.drawerItems.push(listItem);
      });
    },

    setupEventListeners() {
      // Prev/Next buttons
      const nextBtn = document.querySelector('.arrow-nav-btn.next');
      const prevBtn = document.querySelector('.arrow-nav-btn.prev');
      
      if (nextBtn) nextBtn.addEventListener('click', () => this.next());
      if (prevBtn) prevBtn.addEventListener('click', () => this.prev());

      // Drawer toggle
      const menuBtn = document.querySelector('.quick-menu-btn');
      if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggleDrawer();
        });
      }

      if (this.backdrop) {
        this.backdrop.addEventListener('click', () => this.closeDrawer());
      }

      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        // Ignore if user is inside form inputs or checkboxes
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
          return;
        }

        switch (e.key) {
          case 'ArrowRight':
          case ' ':
          case 'Enter':
            e.preventDefault();
            this.next();
            break;
          case 'ArrowLeft':
            e.preventDefault();
            this.prev();
            break;
          case 'Home':
            e.preventDefault();
            this.goToSlide(0);
            break;
          case 'End':
            e.preventDefault();
            this.goToSlide(this.slides.length - 1);
            break;
          case 'f':
          case 'F':
            this.toggleFullscreen();
            break;
          case 't':
          case 'T':
            e.preventDefault();
            this.toggleTheme();
            break;
          case 'c':
          case 'C':
            e.preventDefault();
            this.toggleCursorColor();
            break;
          case 'Escape':
            this.closeDrawer();
            break;
        }
      });

      // Swipe support
      document.addEventListener('touchstart', (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      document.addEventListener('touchend', (e) => {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
      }, { passive: true });
    },

    handleSwipe() {
      const swipeDistance = this.touchEndX - this.touchStartX;
      const threshold = 80; // pixels
      
      // Swipe left -> next slide
      if (swipeDistance < -threshold) {
        this.next();
      }
      // Swipe right -> prev slide
      if (swipeDistance > threshold) {
        this.prev();
      }
    },

    next() {
      if (this.currentSlide < this.slides.length - 1) {
        this.goToSlide(this.currentSlide + 1);
      }
    },

    prev() {
      if (this.currentSlide > 0) {
        this.goToSlide(this.currentSlide - 1);
      }
    },

    goToSlide(index) {
      if (index < 0 || index >= this.slides.length) return;
      
      const prevActiveIndex = this.currentSlide;
      this.currentSlide = index;

      this.slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev-slide', 'next-slide');
        
        if (i === index) {
          slide.classList.add('active');
        } else if (i < index) {
          slide.classList.add('prev-slide');
        } else {
          slide.classList.add('next-slide');
        }
      });

      // Update active state in HUD indicators
      this.dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });

      this.drawerItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
      });

      // Update HUD values
      const currentSlideEl = this.slides[index];
      const categoryEl = currentSlideEl.querySelector('.slide-category');
      const categoryText = categoryEl ? categoryEl.textContent.trim() : 'Estudo de IA 2026';
      
      if (this.sectionTitle) {
        this.sectionTitle.textContent = categoryText;
      }
      
      if (this.counter) {
        this.counter.textContent = `${index + 1} / ${this.slides.length}`;
      }

      // Sync HUD theme
      if (this.hud) {
        this.hud.classList.remove('hud-dark', 'hud-navy');
        if (currentSlideEl.classList.contains('theme-dark')) {
          this.hud.classList.add('hud-dark');
        } else if (currentSlideEl.classList.contains('theme-navy')) {
          this.hud.classList.add('hud-navy');
        }
      }

      // Hide navigation arrows on Capa and Conclusao if preferred, or keep them
      const prevBtn = document.querySelector('.arrow-nav-btn.prev');
      const nextBtn = document.querySelector('.arrow-nav-btn.next');
      if (prevBtn) prevBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
      if (nextBtn) nextBtn.style.visibility = index === this.slides.length - 1 ? 'hidden' : 'visible';

      // Fire global slide change callbacks/events
      const event = new CustomEvent('slideChanged', {
        detail: {
          index: index,
          previousIndex: prevActiveIndex,
          slide: currentSlideEl
        }
      });
      document.dispatchEvent(event);
    },

    toggleDrawer() {
      if (this.drawer && this.backdrop) {
        const isOpen = this.drawer.classList.contains('open');
        if (isOpen) {
          this.closeDrawer();
        } else {
          this.drawer.classList.add('open');
          this.backdrop.classList.add('active');
        }
      }
    },

    closeDrawer() {
      if (this.drawer && this.backdrop) {
        this.drawer.classList.remove('open');
        this.backdrop.classList.remove('active');
      }
    },

    toggleFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
          console.error(`Erro ao ativar tela cheia: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  // Expose slideshow object globally
  window.slideshow = slideshow;
  slideshow.init();
});
