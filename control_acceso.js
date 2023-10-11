function verificarAcceso() {
    var codigoIngresado = prompt("Se ha enviado un código de verificación al correo del administrador. Ingresa el código:");

    if (codigosPermitidos.includes(codigoIngresado)) {
        alert("Código correcto. Acceso permitido.");
        window.location.replace("login.html");
    } else {
        alert("Código incorrecto. Acceso denegado.");
    }
}
