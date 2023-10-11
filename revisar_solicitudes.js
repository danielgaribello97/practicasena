unction cargarSolicitudesPendientes() {
    var solicitudesPendientes = JSON.parse(localStorage.getItem('solicitudes')) || [];
    var listaSolicitudes = document.getElementById('solicitudes-list');

    if (solicitudesPendientes.length > 0) {
        listaSolicitudes.innerHTML = ""; // Limpiar la lista antes de agregar elementos

        solicitudesPendientes.forEach(function(solicitud, index) {
            var itemSolicitud = document.createElement('li');
            itemSolicitud.textContent = 'Solicitud ' + (index + 1) + ': Usuario: ' + solicitud.usuario + ', Contraseña: ' + solicitud.contrasena;

            var aprobarBtn = document.createElement('button');
            aprobarBtn.textContent = 'Aprobar';
            aprobarBtn.onclick = function() {
                aprobarSolicitud(index);
            };

            var rechazarBtn = document.createElement('button');
            rechazarBtn.textContent = 'Rechazar';
            rechazarBtn.onclick = function() {
                rechazarSolicitud(index);
            };

            itemSolicitud.appendChild(aprobarBtn);
            itemSolicitud.appendChild(rechazarBtn);

            listaSolicitudes.appendChild(itemSolicitud);
        });
    } else {
        var mensaje = document.createElement('p');
        mensaje.textContent = 'No hay solicitudes pendientes.';
        listaSolicitudes.appendChild(mensaje);
    }
}

function aprobarSolicitud(index) {
    var solicitudesPendientes = JSON.parse(localStorage.getItem('solicitudes')) || [];
    var nuevoUsuario = solicitudesPendientes[index];

    var usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuariosRegistrados.push(nuevoUsuario);

    localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

    solicitudesPendientes.splice(index, 1);
    localStorage.setItem('solicitudes', JSON.stringify(solicitudesPendientes));

    cargarSolicitudesPendientes();
}

function rechazarSolicitud(index) {
    var solicitudesPendientes = JSON.parse(localStorage.getItem('solicitudes')) || [];
    solicitudesPendientes.splice(index, 1);
    localStorage.setItem('solicitudes', JSON.stringify(solicitudesPendientes));

    cargarSolicitudesPendientes();
}

// Asegúrate de cargar las solicitudes pendientes al cargar la página.
window.onload = cargarSolicitudesPendientes;
