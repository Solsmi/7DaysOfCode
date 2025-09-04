// Funcionalidad de navegación para los botones del header
document.addEventListener('DOMContentLoaded', function() {
    // Elementos de la interfaz
    const startButton = document.getElementById('startCalculator');
    
    // Event listener para el botón de iniciar calculadora
    if (startButton) {
        startButton.addEventListener('click', function() {
            // Cargar el script de la calculadora con alertas
            const script = document.createElement('script');
            script.src = 'calculadora-alertas.js';
            document.body.appendChild(script);
            
            // Ocultar el botón después de hacer clic
            startButton.style.display = 'none';
        });
    }
    
    // Funcionalidad de navegación para los botones del header
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