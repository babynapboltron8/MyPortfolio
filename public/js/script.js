// Home Section Starts
try {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.nav-links');
  const menuLinks = document.querySelectorAll('.nav-links li a');

  if (menuBtn && menu && menuLinks) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
    });

    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
      });
    });
  } else {
    console.error('Menu elements not found');
  }

  const homeSection = document.querySelector('.home');
  const scrollFunction = () => {
    if (window.scrollY > 60) {
      homeSection.classList.add('active');
    } else {
      homeSection.classList.remove('active');
    }
  };

  window.addEventListener('scroll', scrollFunction);
  window.addEventListener('load', scrollFunction);
} catch (error) {
  console.error('Error in Home Section:', error);
}
// Home Section Ends

// Portfolio Section Starts
try {
  const galleryContainer = document.querySelector('.gallery');
  if (galleryContainer) {
    const iso = new Isotope(galleryContainer, {
      itemSelector: '.item',
      layoutMode: 'fitRows',
    });

    document.querySelectorAll('.button-group .button').forEach((button) => {
      button.addEventListener('click', () => {
        document
          .querySelectorAll('.button-group .button')
          .forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        const value = button.getAttribute('data-filter');
        iso.arrange({ filter: value });
      });
    });
  } else {
    console.error('Gallery container not found');
  }
} catch (error) {
  console.error('Error in Portfolio Section:', error);
}
// Portfolio Section Ends

// Testimonials Section Starts
try {
  const testimonialsContainer = document.querySelector(
    '.testimonials-container'
  );
  if (testimonialsContainer) {
    $(testimonialsContainer).owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      margin: 10,
      nav: true,
      navText: [
        "<i class='fa-solid fa-arrow-left'></i>",
        "<i class='fa-solid fa-arrow-right'></i>",
      ],
      responsive: {
        0: { items: 1, nav: false },
        600: { items: 1, nav: true },
        768: { items: 2 },
      },
    });
  } else {
    console.error('Testimonials container not found');
  }
} catch (error) {
  console.error('Error in Testimonials Section:', error);
}
// Testimonials Section Ends

// Go Top Button
try {
  const header = document.querySelector('[data-header]');
  const goTopBtn = document.querySelector('[data-go-top]');

  if (header && goTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        header.classList.add('active');
        goTopBtn.classList.add('active');
      } else {
        header.classList.remove('active');
        goTopBtn.classList.remove('active');
      }
    });
  } else {
    console.error('Header or Go Top Button not found');
  }
} catch (error) {
  console.error('Error in Go Top Button Section:', error);
}
// GO Top Button Ends

// Dark Mode
try {
  let darkmode = localStorage.getItem('darkmode');
  const themeSwitch = document.getElementById('theme-switch');

  if (themeSwitch) {
    if (darkmode === 'active') {
      document.body.classList.add('darkmode');
      const logo = document.querySelector('.logo img');
      if (logo) logo.src = 'images/logo-name-dm.svg';
      document.body.insertAdjacentHTML(
        'beforeend',
        '<div class="cursor-light"></div>'
      );
    }

    const enableDarkmode = () => {
      document.body.classList.add('darkmode');
      localStorage.setItem('darkmode', 'active');
      const logo = document.querySelector('.logo img');
      if (logo) logo.src = 'images/logo-name-dm.svg';
      document.body.insertAdjacentHTML(
        'beforeend',
        '<div class="cursor-light"></div>'
      );
    };

    const disableDarkmode = () => {
      document.body.classList.remove('darkmode');
      localStorage.setItem('darkmode', null);
      const logo = document.querySelector('.logo img');
      if (logo) logo.src = 'images/logo-name.svg';
      const cursorLight = document.querySelector('.cursor-light');
      if (cursorLight) cursorLight.remove();
    };

    themeSwitch.addEventListener('click', (event) => {
      event.preventDefault();
      darkmode = localStorage.getItem('darkmode');
      darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
    });
  } else {
    console.error('Theme switch not found');
  }

  // Cursor Light
  document.addEventListener('mousemove', (e) => {
    const cursorLight = document.querySelector('.cursor-light');
    if (cursorLight) {
      cursorLight.style.left = `${e.clientX}px`;
      cursorLight.style.top = `${e.clientY}px`;
    }
  });
} catch (error) {
  console.error('Error in Dark Mode Section:', error);
}
// Dark Mode Ends

// Scroll Animation Services Starts
try {
  document.addEventListener('DOMContentLoaded', () => {
    const serviceBoxesLeft = document.querySelectorAll('.service-box-left');
    const serviceBoxesRight = document.querySelectorAll('.service-box-right');
    const serviceBoxesCenter = document.querySelectorAll('.service-box-center');
    const headings = document.querySelectorAll('.headings');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    serviceBoxesLeft.forEach((box) => observer.observe(box));
    serviceBoxesRight.forEach((box) => observer.observe(box));
    serviceBoxesCenter.forEach((box) => observer.observe(box));
    headings.forEach((header) => observer.observe(header));

    const wiggleText = document.getElementById('wiggle-text');
    if (wiggleText) {
      wiggleText.classList.add('wiggle');
      setTimeout(() => {
        wiggleText.classList.remove('wiggle');
      }, 2000); // Adjust the duration as needed
    }
  });
} catch (error) {
  console.error('Error in Scroll Animation Services Section:', error);
}
// Scroll Animation Services Ends

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('preload');
});
