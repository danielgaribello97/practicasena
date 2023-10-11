function verificarCredenciales() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    var usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    var usuarioValido = usuariosRegistrados.find(function(user) {
        return user.usuario === usuario && user.contrasena === contrasena;
    });

    if (usuarioValido) {
        var codigoIngresado = prompt("Se ha enviado un código de verificación al correo del administrador. Ingresa el código:");

        if (codigoIngresado === "6473") {
            alert("¡Ingreso exitoso!");
            window.location.replace("pagina_secreta.html");
        } else {
            alert("Código de verificación incorrecto. Intenta de nuevo.");
        }
    } else {
        alert("Usuario y/o contraseña incorrectos. Intenta de nuevo.");
    }
}
    if (usuarioValido) {
        var codigoIngresado = prompt("Se ha enviado un código de verificación al correo del administrador. Ingresa el código:");

        if (codigoIngresado === "6501") {
            alert("¡Ingreso exitoso!");
            window.location.replace("pagina_secreta.html");
        } else {
            alert("Código de verificación incorrecto. Intenta de nuevo.");
        }
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

function verificarContrasenaAdmin() {
    var contrasenaAdmin = document.getElementById("contrasena_admin").value;

    if (contrasenaAdmin === "D8n456to") {
        eliminarUsuario();
    } else {
        alert("Contraseña de administrador incorrecta. No puedes eliminar usuarios.");
    }
}

function eliminarUsuario() {
    var usuarioAEliminar = prompt("Ingresa el nombre de usuario que deseas eliminar:");

    if (usuarioAEliminar) {
        var usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

        var usuariosFiltrados = usuariosRegistrados.filter(function(user) {
            return user.usuario !== usuarioAEliminar;
        });

        if (usuariosFiltrados.length < usuariosRegistrados.length) {
            localStorage.setItem('usuarios', JSON.stringify(usuariosFiltrados));
            alert("Usuario eliminado exitosamente.");
        } else {
            alert("No se encontró el usuario especificado.");
        }
    } else {
        alert("No se proporcionó un nombre de usuario.");
    }
}
