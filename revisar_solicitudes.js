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

    if (solicitudesPendientes.length > 0) {
        listaSolicitudes.innerHTML = ""; // Limpiar la lista antes de agregar elementos

        solicitudesPendientes.forEach(function(solicitud) {
            var itemSolicitud = document.createElement('li');
            itemSolicitud.textContent = 'Usuario: ' + solicitud.usuario + ', Contraseña: ' + solicitud.contrasena;
            listaSolicitudes.appendChild(itemSolicitud);
        });
    } else {
        var mensaje = document.createElement('p');
        mensaje.textContent = 'No hay solicitudes pendientes.';
        listaSolicitudes.appendChild(mensaje);
    }
}
