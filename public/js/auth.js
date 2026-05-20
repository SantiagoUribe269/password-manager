document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const messageEl = document.getElementById('message');
  
    function displayMessage(text, isError = true) {
      messageEl.textContent = text;
      messageEl.style.color = isError ? 'red' : 'green';
    }
  
    if (loginForm) {
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
  
        try {
          const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ username, password }),
          });
  
          const data = await res.json();
          if (res.ok) {
            displayMessage('Inicio de sesión exitoso. Redirigiendo...', false);
            setTimeout(() => { window.location.href = '/dashboard.html'; }, 1000);
          } else {
            displayMessage(data.error || 'Error al iniciar sesión.');
          }
        } catch (err) {
          displayMessage('Error de conexión con el servidor.');
        }
      });
    }
  
    if (registerForm) {
      registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
  
        try {
          const res = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ username, password }),
          });
  
          const data = await res.json();
          if (res.ok) {
            displayMessage('Registro exitoso. Redirigiendo...', false);
            setTimeout(() => { window.location.href = '/dashboard.html'; }, 1000);
          } else {
            displayMessage(data.error || 'Error al registrar la cuenta.');
          }
        } catch (err) {
          displayMessage('Error de conexión con el servidor.');
        }
      });
    }
  });