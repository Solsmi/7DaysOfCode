// Funcionalidad de navegación para los botones del header
document.addEventListener('DOMContentLoaded', function() {
    // Elementos de la interfaz
    const operationSelection = document.getElementById('operationSelection');
    const operationButtons = document.querySelectorAll('.operation-btn');
    const inputSection = document.getElementById('inputSection');
    const resultSection = document.getElementById('resultSection');
    const inputTitle = document.getElementById('inputTitle');
    const valor1Input = document.getElementById('valor1');
    const valor2Input = document.getElementById('valor2');
    const resultElement = document.getElementById('result');
    const nextBtn = document.getElementById('nextBtn');
    const backBtn = document.getElementById('backBtn');
    const continueBtn = document.getElementById('continueBtn');
    
    // Variables para almacenar la operación seleccionada y los valores
    let currentOperation = '';
    let valor1 = null;
    let valor2 = null;
    let step = 1; // 1: seleccionar operación, 2: ingresar primer valor, 3: ingresar segundo valor, 4: mostrar resultado
    
    // Funciones de operaciones matemáticas
    function suma(a, b) {
        return a + b;
    }
    
    function resta(a, b) {
        return a - b;
    }
    
    function multiplicacion(a, b) {
        return a * b;
    }
    
    function division(a, b) {
        if (b === 0) {
            return "Error: División por cero";
        }
        return a / b;
    }
    
    // Función para salir
    function salir() {
        // Ocultar todas las secciones
        operationSelection.style.display = 'none';
        inputSection.style.display = 'none';
        resultSection.style.display = 'none';
        
        // Crear y mostrar mensaje de despedida
        const goodbyeMessage = document.createElement('div');
        goodbyeMessage.className = 'goodbye-message';
        goodbyeMessage.textContent = 'Hasta la próxima';
        goodbyeMessage.style.cssText = `
            font-size: 24px;
            font-weight: bold;
            color: var(--color-primary);
            margin: 20px 0;
            padding: 20px;
            background-color: #f5f5f5;
            border-radius: 5px;
            text-align: center;
        `;
        
        // Agregar el mensaje al contenedor de la calculadora
        document.querySelector('.calculator').appendChild(goodbyeMessage);
    }
    
    // Función para reiniciar el flujo
    function resetFlow() {
        // Reiniciar variables
        currentOperation = '';
        valor1 = null;
        valor2 = null;
        step = 1;
        
        // Limpiar inputs
        valor1Input.value = '';
        valor2Input.value = '';
        
        // Mostrar selección de operación
        operationSelection.style.display = 'block';
        inputSection.style.display = 'none';
        resultSection.style.display = 'none';
        
        // Mostrar solo el primer input
        valor1Input.style.display = 'block';
        valor2Input.style.display = 'none';
        nextBtn.textContent = 'Siguiente';
    }
    
    // Event listeners para los botones de operación
    operationButtons.forEach(button => {
        button.addEventListener('click', function() {
            const operation = this.getAttribute('data-operation');
            
            if (operation === 'salir') {
                salir();
                return;
            }
            
            currentOperation = operation;
            step = 2; // Pasar al paso de ingresar primer valor
            
            // Mostrar el título de la operación
            let operationName = '';
            switch (operation) {
                case 'suma':
                    operationName = 'Suma';
                    break;
                case 'resta':
                    operationName = 'Resta';
                    break;
                case 'multiplicacion':
                    operationName = 'Multiplicación';
                    break;
                case 'division':
                    operationName = 'División';
                    break;
            }
            
            inputTitle.textContent = `Ingrese el primer valor para ${operationName}`;
            operationSelection.style.display = 'none';
            inputSection.style.display = 'block';
            resultSection.style.display = 'none';
            
            // Mostrar solo el primer input
            valor1Input.style.display = 'block';
            valor2Input.style.display = 'none';
            nextBtn.textContent = 'Siguiente';
            
            // Limpiar inputs y enfocar el primero
            valor1Input.value = '';
            valor2Input.value = '';
            valor1Input.focus();
        });
    });
    
    // Event listener para el botón de siguiente
    nextBtn.addEventListener('click', function() {
        if (step === 2) {
            // Validar y guardar el primer valor
            const val1 = parseFloat(valor1Input.value);
            if (isNaN(val1)) {
                alert("Por favor ingrese un valor válido");
                return;
            }
            valor1 = val1;
            
            // Pasar al paso de ingresar segundo valor
            step = 3;
            
            // Mostrar el título para el segundo valor
            let operationName = '';
            switch (currentOperation) {
                case 'suma':
                    operationName = 'Suma';
                    break;
                case 'resta':
                    operationName = 'Resta';
                    break;
                case 'multiplicacion':
                    operationName = 'Multiplicación';
                    break;
                case 'division':
                    operationName = 'División';
                    break;
            }
            
            inputTitle.textContent = `Ingrese el segundo valor para ${operationName}`;
            
            // Mostrar el segundo input
            valor1Input.style.display = 'none';
            valor2Input.style.display = 'block';
            valor2Input.value = '';
            valor2Input.focus();
        } else if (step === 3) {
            // Validar y guardar el segundo valor
            const val2 = parseFloat(valor2Input.value);
            if (isNaN(val2)) {
                alert("Por favor ingrese un valor válido");
                return;
            }
            valor2 = val2;
            
            // Calcular el resultado
            let result;
            switch (currentOperation) {
                case 'suma':
                    result = suma(valor1, valor2);
                    break;
                case 'resta':
                    result = resta(valor1, valor2);
                    break;
                case 'multiplicacion':
                    result = multiplicacion(valor1, valor2);
                    break;
                case 'division':
                    result = division(valor1, valor2);
                    break;
                default:
                    result = "Operación no válida";
            }
            
            // Mostrar el resultado
            resultElement.textContent = result;
            inputSection.style.display = 'none';
            resultSection.style.display = 'block';
            
            // Pasar al paso de mostrar resultado
            step = 4;
        }
    });
    
    // Event listener para el botón de volver
    backBtn.addEventListener('click', function() {
        if (step === 2 || step === 3) {
            // Volver a la selección de operación
            resetFlow();
        }
    });
    
    // Event listener para el botón de continuar
    continueBtn.addEventListener('click', function() {
        // Volver a la selección de operación
        resetFlow();
    });
    
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
    
    // Inicializar el flujo
    resetFlow();
});