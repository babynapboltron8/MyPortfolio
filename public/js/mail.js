// ! NEEDS TO BE UPDATED TO WORK WITH NODEMAILER
const contactForm = document.querySelector('.contact-form');
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = {
    fname: fname.value,
    email: email.value,
    message: message.value,
  };
  console.log(formData);

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/send');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText === 'success') {
      alert('Email sent!');
      contactForm.reset();
    } else {
      alert('Something went wrong!');
    }
  };
  xhr.send(JSON.stringify(formData));
});
