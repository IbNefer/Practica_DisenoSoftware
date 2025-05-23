document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const usernameInput = document.getElementById('name').value;
  const passwordInput = document.getElementById('password').value;

  const savedUsername = localStorage.getItem('name');
  const savedPassword = localStorage.getItem('password');

  if (usernameInput === savedUsername && passwordInput === savedPassword) {
    alert('¡Bienvenido ' + usernameInput + '!');
    window.location.href = 'yup.html';
  } else {
    alert('Nombre o contraseña incorrectos.');
  }
});
