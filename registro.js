function registrarNuevoUsuario() {
    var nuevoUsuario = document.getElementById("usuario_registro").value;
    var nuevaContrasena = document.getElementById("contrasena_registro").value;

    if (nuevoUsuario && nuevaContrasena) {
        var usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

        var nuevoUsuarioObj = {
            usuario: nuevoUsuario,
            contrasena: nuevaContrasena
        };

        usuariosRegistrados.push(nuevoUsuarioObj);
        localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

        alert("Usuario registrado exitosamente. Puedes iniciar sesión ahora.");
        window.location.href='login.html'; // Redirige de nuevo a la página de login
    } else {
        alert("No se pudo registrar el usuario. Asegúrate de proporcionar un nombre de usuario y una contraseña.");
    }
}
