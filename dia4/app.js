document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const resetButton = document.getElementById('resetButton');
    const messageDiv = document.getElementById('message');
    const attemptsDiv = document.getElementById('attempts');
    
    // Variables del juego
    let randomNumber;
    let attemptsLeft;
    
    // Inicializar el juego
    function initGame() {
        randomNumber = Math.floor(Math.random() * 11); // Número aleatorio entre 0 y 10
        attemptsLeft = 3;
        updateAttemptsDisplay();
        guessInput.disabled = false;
        guessButton.disabled = false;
        resetButton.style.display = 'none';
        messageDiv.style.display = 'none';
        guessInput.value = '';
        guessInput.focus();
    }
    
    // Actualizar el display de intentos
    function updateAttemptsDisplay() {
        attemptsDiv.textContent = `Intentos restantes: ${attemptsLeft}`;
    }
    
    // Mostrar mensaje
    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = 'message ' + type;
        messageDiv.style.display = 'block';
    }
    
    // Manejar el intento de adivinar
    function handleGuess() {
        const userGuess = parseInt(guessInput.value);
        
        // Validar la entrada
        if (isNaN(userGuess) || userGuess < 0 || userGuess > 10) {
            showMessage('Por favor, ingresa un número válido entre 0 y 10.', 'error');
            return;
        }
        
        // Reducir el número de intentos
        attemptsLeft--;
        updateAttemptsDisplay();
        
        // Comprobar si el usuario adivinó
        if (userGuess === randomNumber) {
            showMessage(`¡Felicidades! Adivinaste el número. Era ${randomNumber}.`, 'success');
            endGame();
        } else if (attemptsLeft === 0) {
            showMessage(`¡Agotaste tus intentos! El número era ${randomNumber}.`, 'error');
            endGame();
        } else {
            const hint = userGuess < randomNumber ? 'mayor' : 'menor';
            showMessage(`Incorrecto. Intenta con un número ${hint}. Te quedan ${attemptsLeft} intentos.`, 'info');
        }
        
        guessInput.value = '';
        guessInput.focus();
    }
    
    // Finalizar el juego
    function endGame() {
        guessInput.disabled = true;
        guessButton.disabled = true;
        resetButton.style.display = 'inline-block';
    }
    
    // Event Listeners
    guessButton.addEventListener('click', handleGuess);
    
    guessInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleGuess();
        }
    });
    
    resetButton.addEventListener('click', initGame);
    
    // Funcionalidad de navegación para los botones del header
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const menuButton = document.getElementById('menu-button');
    
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            window.location.href = '../dia3/index.html';
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            window.location.href = '../dia5/index.html';
        });
    }
    
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            window.location.href = '../index.html';
        });
    }
    
    // Iniciar el juego cuando se carga la página
    initGame();
});