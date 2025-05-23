const form = document.getElementById('signup-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('name').value;
  const password = document.getElementById('password').value;

  localStorage.setItem('name', username);
  localStorage.setItem('password', password);

  alert('¡Registro exitoso!');
  window.location.href = "login.html";
});
