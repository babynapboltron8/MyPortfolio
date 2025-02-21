// Script File

// Home Section Starts
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.nav-links');
var menuLinks = document.querySelectorAll('.nav-links li a');

menuBtn.addEventListener('click', activeClass);

function activeClass() {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
}

for (i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked() {
  menuBtn.classList.remove('active');
  menu.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', scrollFunction);
window.addEventListener('load', scrollFunction);

function scrollFunction() {
  if (window.scrollY > 60) {
    homeSection.classList.add('active');
  } else {
    homeSection.classList.remove('active');
  }
}
// Home Section Ends
// Portfolio Section Starts
var $galleryContainer = $('.gallery').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows',
});

$('.button-group .button').on('click', function () {
  $('.button-group .button').removeClass('active');
  $(this).addClass('active');

  var value = $(this).attr('data-filter');
  $galleryContainer.isotope({
    filter: value,
  });
});
// Portfolio Section Ends

// Testimonials Section Starts
$('.testimonials-container').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTime: 6000,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: true,
    },
    768: {
      items: 2,
    },
  },
});
// Testimonials Section Ends

// Go Top Button
const header = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', function () {
  if (window.scrollY >= 80) {
    header.classList.add('active');
    goTopBtn.classList.add('active');
  } else {
    header.classList.remove('active');
    goTopBtn.classList.remove('active');
  }
});
// GO Top Button Ends

// Dark Mode
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

if (darkmode === 'active') {
  document.body.classList.add('darkmode');
  const logo = document.querySelector('.logo img');
  logo.src = 'images/logo-name-dm.svg';
  document.body.insertAdjacentHTML(
    'beforeend',
    '<div class="cursor-light"></div>'
  );
}

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
  const logo = document.querySelector('.logo img');
  logo.src = 'images/logo-name-dm.svg';
  document.body.insertAdjacentHTML(
    'beforeend',
    '<div class="cursor-light"></div>'
  );
};

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
  const logo = document.querySelector('.logo img');
  logo.src = 'images/logo-name.svg';
  const cursorLight = document.querySelector('.cursor-light');
  if (cursorLight) cursorLight.remove();
};

themeSwitch.addEventListener('click', (event) => {
  event.preventDefault();
  darkmode = localStorage.getItem('darkmode');
  darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
});

// Cursor Light
document.addEventListener('mousemove', (e) => {
  const cursorLight = document.querySelector('.cursor-light');
  if (cursorLight) {
    cursorLight.style.left = `${e.clientX}px`;
    cursorLight.style.top = `${e.clientY}px`;
  }
});
// Dark Mode Ends

// Scroll Animation Services Starts
document.addEventListener('DOMContentLoaded', function () {
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

  serviceBoxesLeft.forEach((box) => {
    observer.observe(box);
  });
  serviceBoxesRight.forEach((box) => {
    observer.observe(box);
  });
  serviceBoxesCenter.forEach((box) => {
    observer.observe(box);
  });
  headings.forEach((header) => {
    observer.observe(header);
  });
});
// Scroll Animation Services Ends

// Bee Animation
const bee = document.createElement('img');
bee.src = 'images/bee.png';
bee.style.position = 'absolute';
bee.style.width = '40px';
bee.style.height = '40px';
bee.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
bee.style.opacity = '0';
bee.style.bottom = '-50px';
document.querySelector('.home').appendChild(bee);
document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.remove('preload');
});

function positionBee() {
  const homeSection = document.querySelector('.home');
  const hireButton = document.querySelector('.hire-btn');
  const homeRect = homeSection.getBoundingClientRect();
  const hireRect = hireButton.getBoundingClientRect();

  bee.style.left = `${hireRect.right - homeRect.left - 30}px`;
  bee.style.top = `${hireRect.top - homeRect.top - 30}px`;
}

function wiggleBee() {
  bee.style.transform = 'rotate(10deg)';
  setTimeout(() => {
    bee.style.transform = 'rotate(-10deg)';
    setTimeout(() => {
      bee.style.transform = 'rotate(0deg)';
    }, 500);
  }, 500);
}

window.addEventListener('load', () => {
  positionBee();
  setTimeout(() => {
    bee.style.opacity = '1';
    bee.style.bottom = 'auto';
    setTimeout(wiggleBee, 1000);
    setInterval(wiggleBee, 3000);
  }, 1700);
});

window.addEventListener('resize', positionBee);

// Bee Animation Ends
