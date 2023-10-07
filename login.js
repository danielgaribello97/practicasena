document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;

    if (usuario === 'sena' && contrasena === 'Practica') {
        alert('¡Inicio de sesión exitoso!');
    } else {
        alert('Credenciales incorrectas. Por favor, intenta de nuevo.');
    }
});
