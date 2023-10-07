function verificarCredenciales() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    if (usuario === "sena" && contrasena === "Practica") {
        alert("¡Ingreso exitoso!");
        window.location.replace("pagina_secreta.html"); // Redirigir a la página secreta
    } else {
        alert("Usuario y/o contraseña incorrectos. Intenta de nuevo.");
    }
}
