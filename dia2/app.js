//Forma simple de declarar variables
//const nombre = prompt('¿Cuál es tu nombre?');
//const edad = prompt('¿Cuántos años tienes?');
//const lenguaje = prompt('¿Qué lenguaje de programación estás estudiando?');
//alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);
document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.getElementById('chatContainer');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const typingIndicator = document.getElementById('typingIndicator');
    
    const questions = [
        "¿Cuál es tu nombre?",
        "¿Cuántos años tienes?",
        "¿Qué lenguaje de programación estás estudiando?"
    ];
    
    let currentQuestion = 0;
    let userData = [];
    
    // Mostrar la primera pregunta después de un breve retraso
    setTimeout(() => {
        askQuestion();
    }, 1000);
    
    function askQuestion() {
        // Mostrar indicador de escribiendo
        typingIndicator.style.display = 'block';
        
        // Ocultar indicador después de un retraso y mostrar la pregunta
        setTimeout(() => {
            typingIndicator.style.display = 'none';
            addMessage(questions[currentQuestion], 'bot');
        }, 1500);
    }
    
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');
        
        // Añadir timestamp
        const now = new Date();
        const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                          now.getMinutes().toString().padStart(2, '0');
        
        messageDiv.innerHTML = text + '<div class="timestamp">' + timeString + '</div>';
        chatContainer.appendChild(messageDiv);
        
        // Hacer scroll al último mensaje
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    
    function processAnswer() {
        const answer = userInput.value.trim();
        
        if (answer === '') return;
        
        // Añadir respuesta del usuario al chat
        addMessage(answer, 'user');
        
        // Guardar la respuesta
        userData.push(answer);
        
        // Limpiar el input
        userInput.value = '';
        
        // Avanzar a la siguiente pregunta o mostrar el resumen
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            setTimeout(() => {
                askQuestion();
            }, 800);
        } else {
            // Mostrar el resumen después de un breve retraso
            setTimeout(() => {
                typingIndicator.style.display = 'block';
                
                setTimeout(() => {
                    typingIndicator.style.display = 'none';
                    const summary = `¡Hola ${userData[0]}, tienes ${userData[1]} años y ya estás aprendiendo ${userData[2]}!`;
                    addMessage(summary, 'bot');
                    
                    // Añadir mensaje final después de un breve retraso
                    setTimeout(() => {
                        addMessage("¡Gracias por participar! 😊", 'bot');
                    }, 1000);
                }, 1500);
            }, 800);
        }
    }
    
    // Event listeners
    sendButton.addEventListener('click', processAnswer);
    
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            processAnswer();
        }
    });
});