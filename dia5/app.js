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

// Event Listeners
document.getElementById('btn-yes').addEventListener('click', showFoodInput);
document.getElementById('btn-no').addEventListener('click', showShoppingList);
btnAdd.addEventListener('click', addFoodItem);

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

// Funcionalidad de navegación para el botón de menú
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            window.location.href = '../index.html';
        });
    }
});
}