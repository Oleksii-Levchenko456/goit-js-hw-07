const form = document.querySelector('.login-form');
console.log('Form element:', form);

form.addEventListener('submit', handler);

function handler(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const objectWithPasswordEmail = { email, password };
  console.log(objectWithPasswordEmail);

  form.reset();
}