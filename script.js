// Product Data
const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        category: "electronics",
        price: 199.99,
        originalPrice: 299.99,
        rating: 4.8,
        reviews: 245,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        badge: "Best Seller",
        description: "Experience crystal-clear sound with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions."
    },
    {
        id: 2,
        name: "Smart Watch Pro",
        category: "electronics",
        price: 349.99,
        originalPrice: 449.99,
        rating: 4.9,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        badge: "New",
        description: "Stay connected and track your fitness with our latest smart watch. Water-resistant, GPS tracking, heart rate monitor, and 7-day battery life."
    },
    {
        id: 3,
        name: "Designer Leather Handbag",
        category: "fashion",
        price: 159.99,
        originalPrice: 229.99,
        rating: 4.7,
        reviews: 312,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
        badge: "Sale",
        description: "Crafted from premium Italian leather, this designer handbag combines elegance with functionality. Multiple compartments and adjustable strap."
    },
    {
        id: 4,
        name: "Minimalist Desk Lamp",
        category: "home",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.6,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
        badge: null,
        description: "Modern LED desk lamp with touch dimmer and USB charging port. Adjustable brightness and color temperature for perfect lighting."
    },
    {
        id: 5,
        name: "Organic Face Serum",
        category: "beauty",
        price: 49.99,
        originalPrice: 69.99,
        rating: 4.9,
        reviews: 428,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400",
        badge: "Organic",
        description: "Revitalize your skin with our organic face serum. Enriched with vitamin C, hyaluronic acid, and natural botanicals for a radiant glow."
    },
    {
        id: 6,
        name: "Running Shoes Ultra",
        category: "sports",
        price: 129.99,
        originalPrice: 179.99,
        rating: 4.8,
        reviews: 267,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        badge: "Sale",
        description: "Lightweight running shoes with responsive cushioning and breathable mesh upper. Perfect for marathon runners and casual joggers."
    },
    {
        id: 7,
        name: "Vintage Sunglasses",
        category: "fashion",
        price: 89.99,
        originalPrice: 129.99,
        rating: 4.5,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
        badge: "Vintage",
        description: "Classic aviator-style sunglasses with UV400 protection. Gold-tone metal frame with polarized lenses for ultimate eye protection."
    },
    {
        id: 8,
        name: "Portable Bluetooth Speaker",
        category: "electronics",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.7,
        reviews: 389,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
        badge: null,
        description: "Compact waterproof Bluetooth speaker with 360° sound. 12-hour battery life and built-in microphone for hands-free calls."
    },
    {
        id: 9,
        name: "Cozy Throw Blanket",
        category: "home",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.8,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
        badge: "Cozy",
        description: "Ultra-soft fleece throw blanket perfect for cold nights. Machine washable and available in multiple colors."
    },
    {
        id: 10,
        name: "Premium Yoga Mat",
        category: "sports",
        price: 45.99,
        originalPrice: 65.99,
        rating: 4.6,
        reviews: 178,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400",
        badge: "Eco",
        description: "Eco-friendly yoga mat with superior grip and cushioning. Non-toxic material with alignment lines for proper positioning."
    },
    {
        id: 11,
        name: "Luxury Perfume",
        category: "beauty",
        price: 129.99,
        originalPrice: 179.99,
        rating: 4.9,
        reviews: 512,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
        badge: "Luxury",
        description: "Exquisite fragrance with notes of jasmine, sandalwood, and vanilla. Long-lasting scent perfect for special occasions."
    },
    {
        id: 12,
        name: "Wireless Earbuds Pro",
        category: "electronics",
        price: 149.99,
        originalPrice: 199.99,
        rating: 4.7,
        reviews: 321,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
        badge: "Popular",
        description: "True wireless earbuds with active noise cancellation and transparency mode. 8-hour battery life with charging case."
    }
];

// Cart array
let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    setupEventListeners();
});

// Render Products
function renderProducts(filter) {
    const productGrid = document.getElementById('productGrid');
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);

    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-actions">
                    <div class="product-action" onclick="quickView(${product.id})">
                        <i class="fas fa-eye"></i>
                    </div>
                    <div class="product-action" onclick="addToWishlist(${product.id})">
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    ${renderStars(product.rating)}
                    <span>(${product.reviews} reviews)</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Render Stars
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Setup Event Listeners
function setupEventListeners() {
    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.filter);
        });
    });

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Close modal on outside click
    const modal = document.getElementById('productModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Cart sidebar overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', () => {
        toggleCart();
    });
}

// Toggle Cart
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.querySelector('.overlay');
    cartSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartUI();
    showToast('Product added to cart!');
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Update Cart Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

// Update Cart UI
function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.getElementById('cartTotal');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Quick View
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="quick-view-content">
            <div class="quick-view-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="quick-view-info">
                <span class="quick-view-category">${product.category}</span>
                <h2>${product.name}</h2>
                <div class="quick-view-rating">
                    ${renderStars(product.rating)}
                    <span>(${product.reviews} reviews)</span>
                </div>
                <div class="quick-view-price">
                    $${product.price.toFixed(2)}
                    ${product.originalPrice ? `<span style="font-size: 18px; color: var(--gray-color); text-decoration: line-through; margin-left: 10px;">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <p class="quick-view-description">${product.description}</p>
                <div class="quick-view-actions">
                    <div class="quantity-selector">
                        <label>Qty:</label>
                        <div class="quantity-controls">
                            <button onclick="updateModalQuantity(-1)">-</button>
                            <span id="modalQuantity">1</span>
                            <button onclick="updateModalQuantity(1)">+</button>
                        </div>
                    </div>
                    <button class="btn btn-primary" onclick="addToCartFromModal(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Add to Cart from Modal
function addToCartFromModal(productId) {
    const quantity = parseInt(document.getElementById('modalQuantity').textContent);
    const product = products.find(p => p.id === productId);
    
    for (let i = 0; i < quantity; i++) {
        addToCart(productId);
    }
    
    closeModal();
}

// Update Modal Quantity
function updateModalQuantity(change) {
    const quantityEl = document.getElementById('modalQuantity');
    let quantity = parseInt(quantityEl.textContent);
    quantity = Math.max(1, quantity + change);
    quantityEl.textContent = quantity;
}

// Add to Wishlist
function addToWishlist(productId) {
    showToast('Added to wishlist!');
}

// Filter Products
function filterProducts(category) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        }
    });
    
    renderProducts(category);
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    showToast('Proceeding to checkout...');
    // In a real app, this would redirect to checkout page
}

// Subscribe Newsletter
function subscribeNewsletter(e) {
    e.preventDefault();
    showToast('Thank you for subscribing!');
    e.target.reset();
}

// Show Toast
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
