const tempProducts = [
    {
        id: 1,
        name: "Paneer Butter Masala",
        category: "Indian",
        description: "Creamy tomato based paneer curry",
        price: 220,
        rating: 4.5,
        reviews_count: 10,
        image: "panner-bm.jpg",
        popular: true
    },
    {
        id: 2,
        name: "Chicken Biryani",
        category: "Indian",
        description: "Spicy dum biryani with chicken",
        price: 250,
        rating: 4.7,
        reviews_count: 15,
        image: "Chicken-Biryani-Recipe.jpg",
        popular: true
    },
    {
        id: 3,
        name: "Masala Dosa",
        category: "Indian",
        description: "Crispy dosa with potato filling",
        price: 120,
        rating: 4.2,
        reviews_count: 8,
        image: "masala-dosa.jpg",
        popular: false
    },
    {
        id: 7,
        name: "Butter Chicken",
        category: "Indian",
        description: "Tandoori chicken in rich tomato gravy",
        price: 280,
        rating: 4.8,
        reviews_count: 25,
        image: "Butter-Chicken.jpg",
        popular: true
    },
    {
        id: 8,
        name: "Palak Paneer",
        category: "Indian",
        description: "Paneer cubes in spinach gravy",
        price: 200,
        rating: 4.3,
        reviews_count: 12,
        image: "palak-paneer.webp",
        popular: false
    },
    {
        id: 9,
        name: "Chicken Tikka Masala",
        category: "Indian",
        description: "Grilled chicken in spicy curry",
        price: 260,
        rating: 4.6,
        reviews_count: 18,
        image: "chicken-tikka-masala.jpg",
        popular: true
    },
    {
        id: 10,
        name: "Chole Bhature",
        category: "Indian",
        description: "Spicy chickpeas with fried bread",
        price: 150,
        rating: 4.4,
        reviews_count: 14,
        image: "Chole-Bhature.jpg",
        popular: true
    },
    {
        id: 11,
        name: "Malai Kofta",
        category: "Indian",
        description: "Vegetable balls in creamy sauce",
        price: 210,
        rating: 4.2,
        reviews_count: 9,
        image: "malaikofta.jpg",
        popular: false
    },
    {
        id: 12,
        name: "Dal Makhani",
        category: "Indian",
        description: "Black lentils slow-cooked with butter",
        price: 180,
        rating: 4.5,
        reviews_count: 11,
        image: "Dal-Makhani.jpg",
        popular: false
    },
    {
        id: 13,
        name: "Vegetable Biryani",
        category: "Indian",
        description: "Fragrant rice with mixed vegetables",
        price: 190,
        rating: 4.3,
        reviews_count: 13,
        image: "Vegetable-Biryani.jpg",
        popular: false
    },

    {
        id: 4,
        name: "Veg Fried Rice",
        category: "Chinese",
        description: "Chinese style fried rice with veggies",
        price: 180,
        rating: 4.3,
        reviews_count: 12,
        image: "VegFriedRice.jpg",
        popular: true
    },
    {
        id: 5,
        name: "Chicken Manchurian",
        category: "Chinese",
        description: "Crispy chicken in spicy sauce",
        price: 230,
        rating: 4.6,
        reviews_count: 20,
        image: "Chicken-Manchurian.jpg",
        popular: true
    },
    {
        id: 6,
        name: "Hakka Noodles",
        category: "Chinese",
        description: "Stir fried noodles with vegetables",
        price: 170,
        rating: 4.1,
        reviews_count: 9,
        image: "Hakka-Noodles.jpg",
        popular: false
    },
    {
        id: 14,
        name: "Spring Rolls",
        category: "Chinese",
        description: "Crispy vegetable spring rolls",
        price: 120,
        rating: 4.2,
        reviews_count: 8,
        image: "Spring-Rolls.jpg",
        popular: true
    },
    {
        id: 15,
        name: "Chicken Lollipop",
        category: "Chinese",
        description: "Crispy chicken winglets",
        price: 180,
        rating: 4.5,
        reviews_count: 15,
        image: "Chicken-Lollipop.jpg",
        popular: true
    },
    {
        id: 16,
        name: "Manchow Soup",
        category: "Chinese",
        description: "Spicy vegetable soup",
        price: 100,
        rating: 4.0,
        reviews_count: 7,
        image: "Manchow-Soup.jpg",
        popular: false
    },
    {
        id: 17,
        name: "Schezwan Fried Rice",
        category: "Chinese",
        description: "Spicy rice with schezwan sauce",
        price: 200,
        rating: 4.4,
        reviews_count: 10,
        image: "Schezwan-Fried-Rice.jpg",
        popular: false
    },
    {
        id: 18,
        name: "Gobi Manchurian",
        category: "Chinese",
        description: "Crispy cauliflower in spicy sauce",
        price: 160,
        rating: 4.3,
        reviews_count: 11,
        image: "Gobi-Manchurian.jpg",
        popular: true
    },
    {
        id: 19,
        name: "Chicken 65",
        category: "Chinese",
        description: "Spicy deep fried chicken",
        price: 220,
        rating: 4.6,
        reviews_count: 18,
        image: "Chicken-65.jpg",
        popular: true
    },
    {
        id: 20,
        name: "Paneer Chilli",
        category: "Chinese",
        description: "Paneer cubes in spicy sauce",
        price: 210,
        rating: 4.2,
        reviews_count: 9,
        image: "Paneer-Chilli.jpg",
        popular: false
    },

    {
        id: 22,
        name: "French Fries",
        category: "Starters",
        description: "Crispy golden potato fries",
        price: 100,
        rating: 4.1,
        reviews_count: 6,
        image: "French-Fries.jpg",
        popular: true
    },
    {
        id: 23,
        name: "Garlic Bread",
        category: "Starters",
        description: "Toasted bread with garlic butter",
        price: 120,
        rating: 4.3,
        reviews_count: 8,
        image: "Garlic-Bread.jpg",
        popular: false
    },
    {
        id: 24,
        name: "Chicken Wings",
        category: "Starters",
        description: "Spicy buffalo chicken wings",
        price: 220,
        rating: 4.7,
        reviews_count: 16,
        image: "Chicken-Wings.jpg",
        popular: true
    },
    {
        id: 25,
        name: "Paneer Tikka",
        category: "Starters",
        description: "Grilled paneer with spices",
        price: 200,
        rating: 4.4,
        reviews_count: 10,
        image: "Paneer-Tikka.jpg",
        popular: true
    },
    {
        id: 21,
        name: "Chilli Chicken",
        category: "Chinese",
        description: "Spicy chicken with capsicum",
        price: 230,
        rating: 4.6,
        reviews_count: 14,
        image: "Chilli-Chicken.jpg",
        popular: true
    },
    {
        id: 26,
        name: "Veg Manchurian Dry",
        category: "Starters",
        description: "Vegetable balls in dry sauce",
        price: 170,
        rating: 4.2,
        reviews_count: 7,
        image: "Veg-Manchurian-Dry.jpg",
        popular: false
    },

    {
        id: 27,
        name: "Chocolate Brownie",
        category: "Desserts",
        description: "Warm chocolate brownie with ice cream",
        price: 150,
        rating: 4.8,
        reviews_count: 22,
        image: "Chocolate-Brownie.jpg",
        popular: true
    },
    {
        id: 28,
        name: "Gulab Jamun",
        category: "Desserts",
        description: "Sweet milk balls in sugar syrup",
        price: 100,
        rating: 4.5,
        reviews_count: 12,
        image: "gulab-jamun.jpg",
        popular: true
    },
    {
        id: 29,
        name: "Ice Cream Sundae",
        category: "Desserts",
        description: "Vanilla ice cream with toppings",
        price: 130,
        rating: 4.3,
        reviews_count: 9,
        image: "Ice-Cream-Sundae.jpg",
        popular: false
    },
    {
        id: 30,
        name: "Cheesecake",
        category: "Desserts",
        description: "New York style cheesecake",
        price: 180,
        rating: 4.7,
        reviews_count: 18,
        image: "Cheesecake.jpg",
        popular: true
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const MAX_QUANTITY = 10;

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        element.textContent = count;
    });
}

function addToCart(productId, productName, price) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity >= MAX_QUANTITY) {
            showToast(`Maximum quantity (${MAX_QUANTITY}) reached for ${productName}`);
            return;
        }
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: price,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    updateProductButton(productId);
    
    showToast(`${productName} added to cart!`);
}

function updateProductButton(productId) {
    const product = tempProducts.find(p => p.id === productId);
    if (!product) return;
    
    const cartItem = cart.find(item => item.id === productId);
    
    if (!cartItem || cartItem.quantity < 1) {
        changeButtonToAddToCart(productId, product);
        return;
    }
    
    document.querySelectorAll(`[onclick*="addToCart(${productId}"]`).forEach(button => {
        if (cartItem && cartItem.quantity > 0) {
            const isPlusDisabled = cartItem.quantity >= MAX_QUANTITY;
            const plusDisabledAttr = isPlusDisabled ? 'style="opacity: 0.5; cursor: not-allowed;"' : '';
            
            button.outerHTML = `
                <div class="counter-button ${cartItem.quantity === 1 ? 'oval-shape' : ''}" onclick="return false;">
                    <span class="counter-minus" onclick="event.stopPropagation(); handleCounterClick(${productId}, 'minus')">-</span>
                    <span class="counter-number">${cartItem.quantity}</span>
                    <span class="counter-plus" ${plusDisabledAttr} onclick="event.stopPropagation(); ${isPlusDisabled ? 'return false;' : `handleCounterClick(${productId}, 'plus')`}">+</span>
                </div>
            `;
        }
    });
    
    document.querySelectorAll(`.counter-button span[onclick*="handleCounterClick(${productId}"]`).forEach(span => {
        if (cartItem) {
            const numberSpan = span.parentElement.querySelector('.counter-number');
            if (numberSpan) {
                numberSpan.textContent = cartItem.quantity;
            }
            if (cartItem.quantity === 1) {
                span.parentElement.classList.add('oval-shape');
            } else {
                span.parentElement.classList.remove('oval-shape');
            }
            
            const plusButton = span.parentElement.querySelector('.counter-plus');
            if (plusButton) {
                if (cartItem.quantity >= MAX_QUANTITY) {
                    plusButton.style.opacity = '0.5';
                    plusButton.style.cursor = 'not-allowed';
                    plusButton.onclick = () => false;
                } else {
                    plusButton.style.opacity = '1';
                    plusButton.style.cursor = 'pointer';
                }
            }
        }
    });
}

function updateAddToCartButton(productId, productName) {
    const buttons = document.querySelectorAll(`button[onclick*="addToCart(${productId}"]`);
    
    buttons.forEach(button => {
        const item = cart.find(item => item.id === productId);
        if (item && item.quantity > 0) {
            const isPlusDisabled = item.quantity >= MAX_QUANTITY;
            const plusDisabledAttr = isPlusDisabled ? 'style="opacity: 0.5; cursor: not-allowed;"' : '';
            
            button.innerHTML = `
                <span class="counter-minus" onclick="event.stopPropagation(); updateCartQuantityFromButton(${productId}, ${item.quantity - 1})">-</span>
                <span class="counter-number">${item.quantity}</span>
                <span class="counter-plus" ${plusDisabledAttr} onclick="event.stopPropagation(); ${isPlusDisabled ? 'return false;' : `updateCartQuantityFromButton(${productId}, ${item.quantity + 1})`}">+</span>
            `;
            
            button.setAttribute('onclick', 'return false;');
            button.classList.add('counter-button');
        }
    });
}

function updateCartQuantityFromButton(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity < 1) {
            removeFromCart(productId);
            resetAddToCartButton(productId);
        } else {
            item.quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            updateAddToCartButton(productId, item.name);
            updateCartTotal();
        }
    }
}

function changeButtonToAddToCart(productId, product) {
    const counterButtons = document.querySelectorAll('.counter-button');
    
    counterButtons.forEach(button => {
        if (button.innerHTML.includes(`handleCounterClick(${productId}`)) {
            button.outerHTML = `
                <button class="btn btn-primary" onclick="addToCart(${productId}, '${product.name}', ${product.price})">
                    Add to Cart
                </button>
            `;
        }
    });
    
    document.querySelectorAll(`button[onclick*="addToCart(${productId}"]`).forEach(button => {
        if (!button) return;
    });
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    resetAddToCartButton(productId);
    
    if (window.location.pathname.includes('cart')) {
        location.reload();
    }
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    const product = tempProducts.find(p => p.id === productId);
    
    if (item) {
        const newQuantity = parseInt(quantity);
        
        if (newQuantity > MAX_QUANTITY) {
            showToast(`Maximum quantity (${MAX_QUANTITY}) reached for ${product.name}`);
            return;
        }
        
        if (newQuantity < 1) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            updateCartTotal();
        }
    }
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalElement = document.querySelector('.summary-total');
    if (totalElement) {
        totalElement.textContent = `₹${total.toFixed(2)}`;
    }
}

function loadAllProducts() {
    return tempProducts;
}

function filterProducts(category) {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === category) {
            btn.classList.add('active');
        }
    });
    
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    const products = tempProducts || [];
    let filteredProducts = products;
    
    if (category !== 'All Items') {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    displayProducts(filteredProducts);
}

function displayProducts(products) {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    if (products.length === 0) {
        productGrid.innerHTML = '<p class="text-center">No products found.</p>';
        return;
    }
    
    productGrid.innerHTML = products.map(product => {
        const cartItem = cart.find(item => item.id === product.id);
        const isPlusDisabled = cartItem && cartItem.quantity >= MAX_QUANTITY;
        const plusDisabledAttr = isPlusDisabled ? 'style="opacity: 0.5; cursor: not-allowed;"' : '';
        
        const buttonHtml = cartItem && cartItem.quantity > 0 ? 
            `<div class="counter-button ${cartItem.quantity === 1 ? 'oval-shape' : ''}" onclick="return false;">
                <span class="counter-minus" onclick="event.stopPropagation(); handleCounterClick(${product.id}, 'minus')">-</span>
                <span class="counter-number">${cartItem.quantity}</span>
                <span class="counter-plus" ${plusDisabledAttr} onclick="event.stopPropagation(); ${isPlusDisabled ? 'return false;' : `handleCounterClick(${product.id}, 'plus')`}">+</span>
            </div>` :
            `<button class="btn btn-primary" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">
                Add to Cart
            </button>`;
        
        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" style="width:100%; height:180px; object-fit:cover; border-radius:10px;">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-rating">
                        ${getStarRating(product.rating)}
                        <span style="color:#666;font-size:12px;">(${product.reviews_count})</span>
                    </div>
                    <p class="product-description">${product.description}</p>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span class="product-price">₹${product.price}</span>
                        ${buttonHtml}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function handleCounterClick(productId, action) {
    const item = cart.find(item => item.id === productId);
    const product = tempProducts.find(p => p.id === productId);
    
    if (!item && action !== 'plus') return;
    
    let newQuantity = item ? item.quantity : 0;
    
    if (action === 'plus') {
        if (newQuantity >= MAX_QUANTITY) {
            showToast(`Maximum quantity (${MAX_QUANTITY}) reached for ${product.name}`);
            return;
        }
        newQuantity += 1;
    } else if (action === 'minus') {
        newQuantity -= 1;
    }
    
    if (newQuantity < 1) {
        cart = cart.filter(item => item.id !== productId);
        showToast(`${product.name} removed from cart`);
        
        updateButtonToAddToCart(productId, product);
    } else {
        if (item) {
            item.quantity = newQuantity;
        } else {
            cart.push({
                id: productId,
                name: product.name,
                price: product.price,
                quantity: newQuantity
            });
        }
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    updateSingleProductButton(productId, newQuantity);
    
    if (window.location.pathname.includes('cart')) {
        updateCartTotal();
    }
}


function updateSingleProductButton(productId, newQuantity) {
    const product = tempProducts.find(p => p.id === productId);
    if (!product) return;
    
    const allButtons = document.querySelectorAll('.counter-button, .btn-primary');
    
    allButtons.forEach(button => {
        const buttonHtml = button.outerHTML;
        
        const isThisProductButton = buttonHtml.includes(`handleCounterClick(${productId}`) || 
                                      buttonHtml.includes(`addToCart(${productId},`);
        
        if (isThisProductButton) {
            if (newQuantity > 0) {
                const isPlusDisabled = newQuantity >= MAX_QUANTITY;
                const plusDisabledAttr = isPlusDisabled ? 'style="opacity: 0.5; cursor: not-allowed;"' : '';
                
                button.innerHTML = `
                    <span class="counter-minus" onclick="event.stopPropagation(); handleCounterClick(${productId}, 'minus')">-</span>
                    <span class="counter-number">${newQuantity}</span>
                    <span class="counter-plus" ${plusDisabledAttr} onclick="event.stopPropagation(); ${isPlusDisabled ? 'return false;' : `handleCounterClick(${productId}, 'plus')`}">+</span>
                `;
                button.className = 'counter-button' + (newQuantity === 1 ? ' oval-shape' : '');
            } else {
                button.outerHTML = `
                    <button class="btn btn-primary" onclick="addToCart(${productId}, '${product.name}', ${product.price})">
                        Add to Cart
                    </button>
                `;
            }
        }
    });
}


function updateButtonToAddToCart(productId, product) {
    const allButtons = document.querySelectorAll('.counter-button, .btn-primary');
    
    allButtons.forEach(button => {
        const buttonHtml = button.outerHTML;
        const isThisProductButton = buttonHtml.includes(`handleCounterClick(${productId}`) || 
                                      buttonHtml.includes(`addToCart(${productId},`);
        
        if (isThisProductButton && button.classList.contains('counter-button')) {
            button.outerHTML = `
                <button class="btn btn-primary" onclick="addToCart(${productId}, '${product.name}', ${product.price})">
                    Add to Cart
                </button>
            `;
        }
    });
}

function updateAllProductButtons() {
    const products = tempProducts;
    
    document.querySelectorAll('.product-card').forEach(card => {
        const productId = parseInt(card.querySelector('[data-product-id]')?.getAttribute('data-product-id') || 
                               card.querySelector('button')?.getAttribute('onclick')?.match(/\d+/)?.[0]);
        if (productId) {
            const product = products.find(p => p.id === productId);
            if (product) {
                const buttonContainer = card.querySelector('.product-info div:last-child');
                if (buttonContainer) {
                    const cartItem = cart.find(item => item.id === productId);
                    const isPlusDisabled = cartItem && cartItem.quantity >= MAX_QUANTITY;
                    const plusDisabledAttr = isPlusDisabled ? 'style="opacity: 0.5; cursor: not-allowed;"' : '';
                    
                    const buttonHtml = cartItem && cartItem.quantity > 0 ? 
                        `<div class="counter-button ${cartItem.quantity === 1 ? 'oval-shape' : ''}" onclick="return false;">
                            <span class="counter-minus" onclick="event.stopPropagation(); handleCounterClick(${product.id}, 'minus')">-</span>
                            <span class="counter-number">${cartItem.quantity}</span>
                            <span class="counter-plus" ${plusDisabledAttr} onclick="event.stopPropagation(); ${isPlusDisabled ? 'return false;' : `handleCounterClick(${product.id}, 'plus')`}">+</span>
                        </div>` :
                        `<button class="btn btn-primary" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">
                            Add to Cart
                        </button>`;
                    
                    const currentButton = buttonContainer.querySelector('button, .counter-button');
                    if (currentButton) {
                        currentButton.outerHTML = buttonHtml;
                    } else {
                        buttonContainer.innerHTML = buttonHtml;
                    }
                }
            }
        }
    });
}

function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(emptyStars);
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #FF6B00;
        color: white;
        padding: 12px 20px;
        border-radius: 5px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

function loadCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-center">Your cart is empty</p>';
            return;
        }
        
        let total = 0;
        cartItemsContainer.innerHTML = cart.map(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            return `
                <div class="cart-item">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <div>
                            <h4>${item.name}</h4>
                            <p class="text-muted">Delicious ${item.name.toLowerCase()} prepared fresh</p>
                        </div>
                        <div style="text-align: right;">
                            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                                <button class="btn btn-secondary btn-sm" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                                <span>${item.quantity}</span>
                                <button class="btn btn-secondary btn-sm" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                            </div>
                            <h4 style="color: #FF6B00;">₹${itemTotal.toFixed(2)}</h4> 
                            <button class="btn btn-secondary btn-sm" onclick="removeFromCart(${item.id}) class="login-btn"" style="margin-top: 5px;">Remove</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        const summaryRows = document.querySelectorAll('.summary-row');
        if (summaryRows.length >= 1) {
            summaryRows[0].innerHTML = `<span>Item Price</span><span>₹${total.toFixed(2)}</span>`;
        }
        
        const deliveryFee = 13.00;
        const finalTotal = total + deliveryFee;
        
        const totalElement = document.querySelector('.summary-total');
        if (totalElement) {
            totalElement.textContent = `₹${finalTotal.toFixed(2)}`;
        }
    }
}

function saveRecentOrder(orderId) {
    localStorage.setItem('recentOrderId', orderId);
    localStorage.setItem('recentOrderTime', Date.now());
}

document.addEventListener('DOMContentLoaded', () => {
    const userId = localStorage.getItem('userId');
    let cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

    updateCartCount();

    if (window.location.pathname.includes('user-details')) {
        if (!userId) {
            if (cartItems.length === 0) {
                alert('Your cart is empty! Please add items before checkout.');
                window.location.href = 'index.html';
            }
        } else {
            if (cartItems.length === 0) {
                window.location.href = `order-history.html ?userId=${userId}`;
            } else {
                const lastOrder = JSON.parse(sessionStorage.getItem('lastOrderData') || '{}');
                if (lastOrder) {
                    document.getElementById('firstName').value = lastOrder.firstName || '';
                    document.getElementById('lastName').value = lastOrder.lastName || '';
                    document.getElementById('email').value = lastOrder.email || '';
                    document.getElementById('phone').value = lastOrder.phone || '';
                    document.getElementById('city').value = lastOrder.city || '';
                    document.getElementById('zipCode').value = lastOrder.zipCode || '';
                    document.getElementById('address').value = lastOrder.address || '';
                    document.getElementById('address2').value = lastOrder.address2 || '';
                    document.getElementById('alternatePhone').value = lastOrder.alternatePhone || '';
                }
            }
        }
    }

    if (window.location.pathname === '/' || window.location.pathname === 'index.html') {
        filterProducts('All Items');
        document.querySelectorAll('.category-btn').forEach(button => {
            button.addEventListener('click', function() {
                filterProducts(this.textContent);
            });
        });
    }

    if (window.location.pathname === 'menu.html') {
        const menuGrid = document.getElementById('menuGrid');
        if (menuGrid) {
            filterMenu('All Items'); 
        }
    }

    if (window.location.pathname.includes('cart')) {
        loadCartItems();
    }
});

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
        let button = e.target;
        
        if (e.target.matches('.counter-minus, .counter-plus, .counter-number')) {
            button = e.target.closest('.counter-button') || e.target;
        }
        else if (e.target.matches('span') && e.target.closest('button')) {
            button = e.target.closest('button');
        }
        
        const isRegularButton = button.matches('.btn, .btn-primary, .login-btn, .btn-add-to-cart, button[type="submit"], button[type="button"]');
        const isCounterButton = button.matches('.counter-button');
        const isCounterControl = button.matches('.counter-minus, .counter-plus');
        
        if (isRegularButton || isCounterButton || isCounterControl) {
            let elementToAnimate = button;
            
            if (isCounterControl) {
                elementToAnimate = button;
                
                elementToAnimate.style.transform = 'scale(0.8)';
                elementToAnimate.style.transition = 'transform 0.2s ease';
                
                setTimeout(() => {
                    elementToAnimate.style.transform = 'scale(1)';
                }, 200);
                
                const counterButton = button.closest('.counter-button');
                if (counterButton) {
                    counterButton.classList.add('btn-clicked');
                    
                    setTimeout(() => {
                        counterButton.classList.remove('btn-clicked');
                        counterButton.classList.add('btn-return-orange');
                        
                        setTimeout(() => {
                            counterButton.classList.remove('btn-return-orange');
                        }, 1000);
                    }, 1000);
                }
                return; 
            }
            
            elementToAnimate.classList.add('btn-clicked');
            
            setTimeout(() => {
                elementToAnimate.classList.remove('btn-clicked');
                elementToAnimate.classList.add('btn-return-orange');
                
                setTimeout(() => {
                    elementToAnimate.classList.remove('btn-return-orange');
                }, 1000);
            }, 1000);
        }
    });
});