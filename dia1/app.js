let numeroUn = 1
let stringUn = '1'
let numeroTreinta = 30
let stringTreinta = '30'
let numeroDiez = 10
let stringDiez = '10'

if (numeroUn == stringUn) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor')
}

 
if (numeroTreinta !== stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
} else {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
}

 
if (numeroDiez == stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}

// Resultados esperados:
// Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes
// Las variables numeroTreinta y stringTreinta no tienen el mismo tipo

// Funcionalidad de navegación para los botones del header
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const menuButton = document.getElementById('menu-button');
    
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            // Como es el día 1, no hay página anterior
            // Podemos redirigir al último día o mostrar un mensaje
            window.location.href = '../dia7/index.html';
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            window.location.href = '../dia2/index.html';
        });
    }
    
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            window.location.href = '../index.html';
        });
    }
});
// Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes