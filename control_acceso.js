function verificarAcceso() {
    var usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuariosRegistrados.length === 0) {
        alert("No hay usuarios registrados. Por favor, regístrate primero.");
        window.location.replace("login.html");
    }
}
