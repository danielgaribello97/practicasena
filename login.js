function verificarCredenciales() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    var usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    var usuarioValido = usuariosRegistrados.find(function(user) {
        return user.usuario === usuario && user.contrasena === contrasena;
    });

    if (usuarioValido) {
        var codigoVerificacion = generarCodigoVerificacion();
        enviarCodigoAlCorreo(codigoVerificacion); // Esta función enviará el código al correo del administrador.

        var codigoIngresado = prompt("Se ha enviado un código de verificación al correo del administrador. Ingresa el código:");

        if (codigoIngresado === codigoVerificacion) {
            alert("¡Ingreso exitoso!");
            window.location.replace("pagina_secreta.html");
        } else {
            alert("Código de verificación incorrecto. Intenta de nuevo.");
        }
    } else {
        alert("Usuario y/o contraseña incorrectos. Intenta de nuevo.");
    }
}

function generarCodigoVerificacion() {
    return Math.floor(100000 + Math.random() * 900000); // Genera un código de 6 dígitos.
}

function enviarCodigoAlCorreo(codigo) {
    // Aquí se simula el envío de un correo electrónico al administrador.
    console.log("Se ha enviado el código de verificación al correo del administrador: " + codigo);
}
