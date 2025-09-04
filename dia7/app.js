// Funcionalidad de navegación para los botones del header
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const menuButton = document.getElementById('menu-button');
    
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            window.location.href = '../dia6/index.html';
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            // Como es el último día, redirigimos al primer día
            window.location.href = '../dia1/index.html';
        });
    }
    
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            window.location.href = '../index.html';
        });
    }
});