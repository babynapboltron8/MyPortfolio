// ! NEEDS TO BE UPDATED TO WORK WITH NODEMAILER
const contactForm = document.querySelectorAll('.form-1, .form-2');

contactForm.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted');
  });
});
