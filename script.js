// script.js

// Función para cambiar el modo
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Evento click del botón para cambiar el modo
    document.getElementById('modoToggle').addEventListener('click', toggleDarkMode);
});
