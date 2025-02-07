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

// magnific popup
$('.gallery').magnificPopup({
  delegate: '.overlay a',
  type: 'image',
  gallery: {
    enabled: true,
  },
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

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
};

if (darkmode === 'active') enableDarkmode();

themeSwitch.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
});
// Dark Mode Ends
