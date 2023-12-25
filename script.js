let products = [
    { id: 1, name: 'samsung', quantity: 10 },
    { id: 2, name: 'Vivo', quantity: 15 },
    { id: 3, name: 'Redmi', quantity: 20 }
];

function displayProducts() {
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = '';

    products.forEach(product => {
        const listItem = document.createElement('div');
        listItem.classList.add('product-item');
        listItem.innerHTML = `
            <p><strong>ID:</strong> ${product.id}</p>
            <p><strong>Name:</strong> ${product.name}</p>
            <p><strong>Quantity:</strong> ${product.quantity}</p>
            <div class="btn-group">
                <button onclick="editProduct(${product.id})">Edit</button>
                <button onclick="deleteProduct(${product.id})">Delete</button>
            </div>
        `;
        inventoryList.appendChild(listItem);
    });
}


function addProduct(event) {
    event.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const itemQuantity = parseInt(document.getElementById('itemQuantity').value);

    const newProduct = {
        id: products.length + 1,
        name: itemName,
        quantity: itemQuantity
    };

    products.push(newProduct);
    displayProducts();
    document.getElementById('addItemForm').reset();
}

function editProduct(id) {
    const foundProduct = products.find(product => product.id === id);
    if (foundProduct) {
        const newName = prompt('Enter the new name:', foundProduct.name);
        const newQuantity = parseInt(prompt('Enter the new quantity:', foundProduct.quantity));

        if (newName !== null && !isNaN(newQuantity)) {
            foundProduct.name = newName;
            foundProduct.quantity = newQuantity;
            displayProducts();
        }
    }
}

function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    displayProducts();
}

document.getElementById('addItemForm').addEventListener('submit', addProduct);
window.onload = displayProducts;
