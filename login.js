function verificarCredenciales() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    var usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    var usuarioValido = usuariosRegistrados.find(function(user) {
        return user.usuario === usuario && user.contrasena === contrasena;
    });

    if (usuarioValido) {
        alert("¡Ingreso exitoso!");
        window.location.replace("pagina_secreta.html");
    } else {
        alert("Usuario y/o contraseña incorrectos. Intenta de nuevo.");
    }
}

function registrarUsuario() {
    var nuevoUsuario = prompt("Ingresa un nombre de usuario:");
    var nuevaContrasena = prompt("Ingresa una contraseña:");

    if (nuevoUsuario && nuevaContrasena) {
        var usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

        var nuevoUsuarioObj = {
            usuario: nuevoUsuario,
            contrasena: nuevaContrasena
        };

        usuariosRegistrados.push(nuevoUsuarioObj);
        localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

        alert("Usuario registrado exitosamente. Puedes iniciar sesión ahora.");
    } else {
        alert("No se pudo registrar el usuario. Asegúrate de proporcionar un nombre de usuario y una contraseña.");
    }
}
