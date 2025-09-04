// Funcionalidad de navegación para el botón de menú
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            window.location.href = '../index.html';
        });
    }
});