function registrarSolicitud() {
    var nuevoUsuario = document.getElementById("usuario").value;
    var nuevaContrasena = document.getElementById("contrasena").value;

    if (nuevoUsuario && nuevaContrasena) {
        var solicitudesPendientes = JSON.parse(localStorage.getItem('solicitudes')) || [];

        var nuevoUsuarioObj = {
            usuario: nuevoUsuario,
            contrasena: nuevaContrasena
        };

        solicitudesPendientes.push(nuevoUsuarioObj);
        localStorage.setItem('solicitudes', JSON.stringify(solicitudesPendientes));

        alert("Solicitud registrada. Espera aprobación.");
    } else {
        alert("Por favor, proporciona un nombre de usuario y una contraseña.");
    }
}
