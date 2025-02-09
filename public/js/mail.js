// ! NEEDS TO BE UPDATED TO WORK WITH NODEMAILER
const contactForm = document.querySelectorAll('.form-1, .form-2');
let fname = document.getElementById('fname');
let email = document.getElementById('email');
let message = document.getElementById('message');

contactForm.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
      fname: fname.value,
      email: email.value,
      message: message.value,
    };
    console.log(formData);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/send');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () {
      console.log(xhr.responseText);
      if (xhr.responseText == 'success') {
        alert('Email sent');
        fname.value = '';
        email.value = '';
        message.value = '';
      } else {
        alert('Something went wrong!');
      }
    };
    xhr.send(JSON.stringify(formData));
  });
});
