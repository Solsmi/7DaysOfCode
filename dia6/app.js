// Variables globales
let shoppingItems = {
    frutas: [],
    lacteos: [],
    congelados: [],
    dulces: [],
    carnes: [],
    panaderia: [],
    bebidas: [],
    otros: []
};

// Iconos por categoría
const categoryIcons = {
    frutas: 'fas fa-apple-alt',
    lacteos: 'fas fa-cheese',
    congelados: 'fas fa-ice-cream',
    dulces: 'fas fa-candy-cane',
    carnes: 'fas fa-drumstick-bite',
    panaderia: 'fas fa-bread-slice',
    bebidas: 'fas fa-wine-bottle',
    otros: 'fas fa-ellipsis-h'
};

// Referencias a elementos del DOM
const initialQuestion = document.getElementById('initial-question');
const foodInput = document.getElementById('food-input');
const foodName = document.getElementById('food-name');
const foodCategory = document.getElementById('food-category');
const btnAdd = document.getElementById('btn-add');
const shoppingList = document.getElementById('shopping-list');
const categoriesContainer = document.getElementById('categories-container');
const btnRemove = document.getElementById('btn-remove');

// Event Listeners
document.getElementById('btn-yes').addEventListener('click', showFoodInput);
document.getElementById('btn-no').addEventListener('click', showShoppingList);
btnAdd.addEventListener('click', addFoodItem);
btnRemove.addEventListener('click', showRemoveItem);

// Función para mostrar el input de alimento
function showFoodInput() {
    initialQuestion.classList.add('hidden');
    foodInput.classList.remove('hidden');
    // Retrasar el establecimiento del foco para evitar problemas con la transición
    setTimeout(() => {
        foodName.focus();
    }, 300); // Retraso de 300ms, suficiente para que termine la transición
}

// Función para agregar un alimento a la lista
function addFoodItem() {
    const name = foodName.value.trim();
    const category = foodCategory.value;
    
    if (name === '') {
        alert('Por favor, ingresa el nombre de un alimento');
        return;
    }
    
    // Agregar el alimento a la categoría correspondiente
    shoppingItems[category].push(name);
    
    // Limpiar el campo de entrada
    foodName.value = '';
    foodName.focus();
    
    // Volver a la pregunta inicial
        foodInput.classList.add('hidden');
        initialQuestion.classList.remove('hidden');
        
        // Mostrar el botón de eliminar si hay elementos en la lista
        if (hasItemsInList()) {
            btnRemove.classList.remove('hidden');
        }
    }
    
    // Función para verificar si hay elementos en la lista
    function hasItemsInList() {
        for (const category in shoppingItems) {
            if (shoppingItems[category].length > 0) {
                return true;
            }
        }
        return false;
    }
    
    // Función para mostrar la interfaz de eliminación de elementos
    function showRemoveItem() {
        // Ocultar la pregunta inicial
        initialQuestion.classList.add('hidden');
        
        // Crear el HTML para mostrar los elementos y el campo de entrada
        let html = '<div id="remove-item-container">';
        html += '<h3>Elementos en tu lista de compras:</h3>';
        
        // Generar la lista de elementos
        let allItems = [];
        for (const category in shoppingItems) {
            const items = shoppingItems[category];
            items.forEach(item => {
                allItems.push(item);
            });
        }
        
        if (allItems.length > 0) {
            html += '<ul>';
            allItems.forEach((item, index) => {
                html += `<li>${item}</li>`;
            });
            html += '</ul>';
            
            html += '<p>Ingresa el nombre del alimento que deseas eliminar:</p>';
            html += '<input type="text" id="remove-item-input" placeholder="Ej: manzana">';
            html += '<button id="confirm-remove-btn" class="btn-add">Eliminar</button>';
            html += '<button id="cancel-remove-btn" class="btn-no">Cancelar</button>';
        } else {
            html += '<p>No hay elementos en la lista.</p>';
            html += '<button id="cancel-remove-btn" class="btn-no">Volver</button>';
        }
        
        html += '</div>';
        
        // Mostrar el contenedor de eliminación
        const removeContainer = document.createElement('div');
        removeContainer.innerHTML = html;
        document.querySelector('.content').appendChild(removeContainer);
        
        // Agregar event listeners a los botones
        if (document.getElementById('confirm-remove-btn')) {
            document.getElementById('confirm-remove-btn').addEventListener('click', confirmRemoveItem);
        }
        document.getElementById('cancel-remove-btn').addEventListener('click', cancelRemoveItem);
    }
    
    // Función para cancelar la eliminación y volver a la pregunta inicial
    function cancelRemoveItem() {
        // Eliminar el contenedor de eliminación
        const removeContainer = document.getElementById('remove-item-container');
        if (removeContainer) {
            removeContainer.parentElement.removeChild(removeContainer);
        }
        
        // Mostrar la pregunta inicial
        initialQuestion.classList.remove('hidden');
    }
    
    // Función para mostrar la lista de compras
    function showShoppingList() {
    initialQuestion.classList.add('hidden');
    foodInput.classList.add('hidden');
    shoppingList.classList.remove('hidden');
    
    // Generar el HTML para la lista de compras
    let html = '';
    
    for (const category in shoppingItems) {
        const items = shoppingItems[category];
        const categoryName = getCategoryName(category);
        const iconClass = categoryIcons[category];
        
        html += `
            <div class="category">
                <h3 class="category-title"><i class="${iconClass}"></i> ${categoryName}</h3>
                <div class="items">
                    ${items.length > 0
                        ? items.map(item => `<span class="item" data-category="${category}" data-item="${item}"><i class="fas fa-check"></i> ${item}</span>`).join('')
                        : '<span class="empty">No hay items en esta categoría</span>'
                    }
                </div>
            </div>
        `;
    }
    
    categoriesContainer.innerHTML = html;
    
    // Agregar event listeners a los items
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('click', toggleItemActive);
    });
}

// Función para confirmar la eliminación de un elemento
function confirmRemoveItem() {
    const itemToRemove = document.getElementById('remove-item-input').value.trim();
    
    if (itemToRemove === '') {
        alert('Por favor, ingresa el nombre de un alimento para eliminar');
        return;
    }
    
    // Buscar y eliminar el elemento de la lista
    let itemFound = false;
    for (const category in shoppingItems) {
        const index = shoppingItems[category].indexOf(itemToRemove);
        if (index !== -1) {
            shoppingItems[category].splice(index, 1);
            itemFound = true;
            break;
        }
    }
    
    if (itemFound) {
        // Mostrar mensaje de confirmación
        alert('el elemento fue eliminado con éxito');
        
        // Eliminar el contenedor de eliminación
        const removeContainer = document.getElementById('remove-item-container');
        if (removeContainer) {
            removeContainer.parentElement.removeChild(removeContainer);
        }
        
        // Mostrar la pregunta inicial
        initialQuestion.classList.remove('hidden');
        
        // Ocultar el botón de eliminar si no hay más elementos
        if (!hasItemsInList()) {
            btnRemove.classList.add('hidden');
        }
    } else {
        alert('No se encontró el elemento en la lista');
    }
}

// Función para alternar el estado activo de un item
function toggleItemActive(event) {
    const item = event.target.closest('.item');
    item.classList.toggle('active');
}

// Función para obtener el nombre legible de la categoría
function getCategoryName(categoryKey) {
    const categoryNames = {
        frutas: 'Frutas y Verduras',
        lacteos: 'Lácteos',
        congelados: 'Congelados',
        dulces: 'Dulces y Golosinas',
        carnes: 'Carnes y Pescados',
        panaderia: 'Panadería',
        bebidas: 'Bebidas',
        otros: 'Otros'
    };
    
    return categoryNames[categoryKey] || 'Otros';
}