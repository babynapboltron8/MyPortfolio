const contactForm = document.querySelector('.contact-form');
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!fname.value.trim() || !email.value.trim() || !message.value.trim()) {
    alert('All fields are required.');
    return;
  }

  let formData = {
    fname: fname.value.trim(),
    email: email.value.trim(),
    message: message.value.trim(),
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
