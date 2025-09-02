// Variables globales
let shoppingItems = {
    frutas: [],
    lacteos: [],
    congelados: [],
    dulces: [],
    carnes: [],
    panaderia: [],
    bebidas: [],
    limpieza: [],
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
    limpieza: 'fas fa-pump-soap',
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
    foodName.focus();
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
                        ? items.map(item => `<span class="item"><i class="fas fa-check"></i> ${item}</span>`).join('') 
                        : '<span class="empty">No hay items en esta categoría</span>'
                    }
                </div>
            </div>
        `;
    }
    
    categoriesContainer.innerHTML = html;
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
        limpieza: 'Limpieza del Hogar',
        otros: 'Otros'
    };
    
    return categoryNames[categoryKey] || 'Otros';
}