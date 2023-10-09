function verificarCredenciales() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    if (usuario === "sena" && contrasena === "Practica") {
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
        // Aquí puedes agregar código para guardar el nuevo usuario y contraseña
        alert("Usuario registrado exitosamente. Puedes iniciar sesión ahora.");
    } else {
        alert("No se pudo registrar el usuario. Asegúrate de proporcionar un nombre de usuario y una contraseña.");
    }
}
