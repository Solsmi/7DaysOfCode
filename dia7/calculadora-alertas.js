// Calculadora con alertas
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

// Función principal de la calculadora
function calculadora() {
    while (true) {
        // Mostrar menú de operaciones
        const operacion = prompt("Elija la operación que desea realizar:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n\nPara salir, presione el botón Cancelar");
        
        // Verificar si el usuario canceló
        if (operacion === null) {
            alert("Hasta la próxima");
            break;
        }
        
        // Convertir a número
        const opcion = parseInt(operacion);
        
        // Verificar si es una opción válida
        if (isNaN(opcion) || opcion < 1 || opcion > 4) {
            alert("Opción no válida. Por favor, elija una opción del 1 al 4.");
            continue;
        }
        
        // Obtener los valores
        const valor1Str = prompt("Ingrese el primer valor:");
        if (valor1Str === null) {
            alert("Operación cancelada");
            continue;
        }
        
        const valor1 = parseFloat(valor1Str);
        if (isNaN(valor1)) {
            alert("Valor no válido. Debe ingresar un número.");
            continue;
        }
        
        const valor2Str = prompt("Ingrese el segundo valor:");
        if (valor2Str === null) {
            alert("Operación cancelada");
            continue;
        }
        
        const valor2 = parseFloat(valor2Str);
        if (isNaN(valor2)) {
            alert("Valor no válido. Debe ingresar un número.");
            continue;
        }
        
        // Realizar la operación
        let resultado;
        switch (opcion) {
            case 1:
                resultado = suma(valor1, valor2);
                alert(`El resultado de la suma es: ${resultado}`);
                break;
            case 2:
                resultado = resta(valor1, valor2);
                alert(`El resultado de la resta es: ${resultado}`);
                break;
            case 3:
                resultado = multiplicacion(valor1, valor2);
                alert(`El resultado de la multiplicación es: ${resultado}`);
                break;
            case 4:
                resultado = division(valor1, valor2);
                alert(`El resultado de la división es: ${resultado}`);
                break;
        }
    }
}

// Iniciar la calculadora
calculadora();