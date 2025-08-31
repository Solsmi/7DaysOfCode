// Variables para almacenar las decisiones del usuario
let userPath = '';
let userFramework = '';
let userSpecialization = '';
let technologies = [];

// Función para ocultar todas las pantallas
function hideAllScreens() {
    const screens = document.querySelectorAll('.container > div');
    screens.forEach(screen => {
        screen.classList.add('hidden');
    });
}

// Función para seleccionar el área (Front-End o Back-End)
function selectOption(option) {
    userPath = option;
    hideAllScreens();
    
    if (option === 'frontend') {
        document.getElementById('screen-frontend').classList.remove('hidden');
    } else {
        document.getElementById('screen-backend').classList.remove('hidden');
    }
}

// Función para seleccionar el framework/lenguaje
function selectFramework(framework) {
    userFramework = framework;
    hideAllScreens();
    
    // Configurar el texto según la elección anterior
    const specializationText = document.getElementById('specialization-text');
    if (userPath === 'frontend') {
        specializationText.textContent = `Has elegido aprender ${framework}. Ahora debes decidir cómo continuar tu desarrollo profesional.`;
    } else {
        specializationText.textContent = `Has elegido aprender ${framework}. Ahora debes decidir cómo continuar tu desarrollo profesional.`;
    }
    
    document.getElementById('screen-specialization').classList.remove('hidden');
}

// Función para seleccionar la especialización
function selectSpecialization(option) {
    userSpecialization = option;
    hideAllScreens();
    
    // Configurar el mensaje final según las elecciones
    const finalMessage = document.getElementById('final-message');
    if (option === 'especializarse') {
        finalMessage.textContent = `¡Excelente decisión! Especializarte en ${userFramework} te convertirá en un experto en ${userPath === 'frontend' ? 'Front-End' : 'Back-End'}.`;
    } else {
        finalMessage.textContent = `¡Buena elección! Convertirte en Fullstack te dará una visión completa del desarrollo web, combinando ${userFramework} con otras tecnologías.`;
    }
    
    document.getElementById('screen-tech').classList.remove('hidden');
}

// Función para agregar tecnología
function addTechnology() {
    const technology = prompt('Ingresa el nombre de la tecnología que te gustaría aprender:');
    
    if (technology && technology.trim() !== '') {
        technologies.push(technology.trim());
        updateTechList();
        
        // Comentario sobre la tecnología (simplificado)
        let comment = '';
        const techLower = technology.toLowerCase();
        
        if (techLower.includes('react') || techLower.includes('angular') || techLower.includes('vue')) {
            comment = '¡Los frameworks de Front-End son esenciales para crear interfaces modernas!';
        } else if (techLower.includes('node') || techLower.includes('express') || techLower.includes('django')) {
            comment = '¡Excelente para desarrollo Back-End y APIs!';
        } else if (techLower.includes('python') || techLower.includes('java') || techLower.includes('c#')) {
            comment = '¡Lenguajes poderosos con muchas aplicaciones!';
        } else if (techLower.includes('sql') || techLower.includes('mongo') || techLower.includes('base de datos')) {
            comment = '¡El manejo de datos es crucial en cualquier aplicación!';
        } else {
            comment = '¡Suena interesante! Siempre es bueno aprender nuevas tecnologías.';
        }
        
        alert(comment);
        
        // Preguntar si quiere agregar otra tecnología
        const addAnother = confirm('¿Hay alguna otra tecnología que te gustaría aprender?');
        if (addAnother) {
            addTechnology();
        }
    } else if (technology !== null) {
        alert('Por favor, ingresa un nombre válido para la tecnología.');
        addTechnology();
    }
}

// Función para actualizar la lista de tecnologías en la interfaz
function updateTechList() {
    const techList = document.getElementById('tech-list');
    techList.innerHTML = '';
    
    technologies.forEach(tech => {
        const li = document.createElement('li');
        li.textContent = tech;
        techList.appendChild(li);
    });
}

// Función para finalizar el juego
function finishGame() {
    alert('¡Felicidades! Has completado tu plan de aprendizaje. ¡Ahora es tiempo de codificar!');
    
    // Mostrar resumen final
    let summary = `Resumen de tu camino:\n- Área: ${userPath === 'frontend' ? 'Front-End' : 'Back-End'}\n- Tecnología principal: ${userFramework}\n- Enfoque: ${userSpecialization === 'especializarse' ? 'Especialización' : 'Fullstack'}\n- Tecnologías adicionales: ${technologies.join(', ') || 'Ninguna'}`;
    
    alert(summary);
    
    // Preguntar si quiere reiniciar el juego
    const restart = confirm('¿Te gustaría reiniciar el juego y explorar un camino diferente?');
    if (restart) {
        location.reload();
    }
}