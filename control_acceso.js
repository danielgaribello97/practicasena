function verificarAcceso() {
    var codigoIngresado = prompt("Se ha enviado un código de verificación al correo del administrador. Ingresa el código:");

    var codigosPermitidos = ["6473", "6501", "0001", "0002", "5566", "9875", "4787"];

    if (codigosPermitidos.includes(codigoIngresado)) {
        alert("Código correcto. Acceso permitido.");
        window.location.replace("login.html");
    } else {
        alert("Código incorrecto. Acceso denegado.");
    }
}
