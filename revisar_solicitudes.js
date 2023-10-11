function verificarCredenciales() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    if (usuario === "Daniel" && contrasena === "S510n45to") {
        cargarSolicitudesPendientes();
    } else {
        alert("Usuario y/o contraseña incorrectos. Intenta de nuevo.");
    }
}

function cargarSolicitudesPendientes() {
    var solicitudesPendientes = JSON.parse(localStorage.getItem('solicitudes')) || [];
    var listaSolicitudes = document.getElementById('solicitudes-list');

    if (solicitudesPendientes.length > 0
