// script.js
function mostrarSeccion(id) {
    // Ocultar todas las secciones
    var secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    var seccionSeleccionada = document.getElementById(id);
    seccionSeleccionada.style.display = 'block';
}

// Mostrar la primera sección por defecto
document.addEventListener('DOMContentLoaded', function() {
    mostrarSeccion('sobre-mi');
});