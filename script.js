const products = [
  {
    id: 1,
    title: "Wireless Noise-Cancelling Headphones",
    category: "electronics",
    price: 1780,
    originalPrice: 2899,
    rating: 4.5,
    description: "High-quality wireless headphones with active noise cancellation and 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Premium Cotton T-Shirt",
    category: "clothing",
    price: 499,
    originalPrice: 799,
    rating: 4.2,
    description: "Comfortable 100% cotton t-shirt available in multiple colors and sizes.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Smart Fitness Watch",
    category: "electronics",
    price: 4999,
    originalPrice: 6999,
    rating: 4.7,
    description: "Feature-rich smartwatch with health monitoring, GPS, and water resistance.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Programmable Coffee Maker",
    category: "home",
    price: 3499,
    originalPrice: 4999,
    rating: 4.3,
    description: "Programmable coffee maker with thermal carafe and built-in grinder.",
    image: "https://www.seriouseats.com/thmb/LP3YUEWPY4zLHiJw819puWGMqsc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sea-primary-automatic-coffee-makers-wdickey-602-720640aaba884a1a8ad3d63d5c722902.jpeg"
  },
  {
    id: 5,
    title: "Bestselling Fiction Novel",
    category: "books",
    price: 299,
    originalPrice: 499,
    rating: 4.8,
    description: "Award-winning fiction novel by a renowned author with critical acclaim.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Professional Running Shoes",
    category: "sports",
    price: 2999,
    originalPrice: 4499,
    rating: 4.6,
    description: "Lightweight running shoes with advanced cushion technology and breathable mesh.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    title: "Portable Bluetooth Speaker",
    category: "electronics",
    price: 1499,
    originalPrice: 2499,
    rating: 4.4,
    description: "Portable Bluetooth speaker with 360° sound and 10-hour battery life.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    title: "Eco-Friendly Yoga Mat",
    category: "sports",
    price: 899,
    originalPrice: 1499,
    rating: 4.1,
    description: "Eco-friendly yoga mat with non-slip surface and carrying strap included.",
    image: "https://completeunityyoga.com/cdn/shop/collections/4-rolls-web2048_2_900x_627639b7-7be3-4387-b42a-9353cacd61af.webp?v=1705488301"
  },
  {
    id: 9,
    title: "Adjustable LED Desk Lamp",
    category: "home",
    price: 1299,
    originalPrice: 1999,
    rating: 4.0,
    description: "LED desk lamp with adjustable brightness and color temperature settings.",
    image: "https://cdn.thewirecutter.com/wp-content/media/2022/04/desk-lamp-2048px-4856-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"
  },
  {
    id: 10,
    title: "Gourmet Cookbook Collection",
    category: "books",
    price: 599,
    originalPrice: 999,
    rating: 4.9,
    description: "Bestselling cookbook with easy recipes from world-renowned chefs.",
    image: "https://simplygourmetcooking.com/cdn/shop/collections/simply-gourmet-cookbooks-400862.jpg?v=1738266025"
  },
  {
    id: 11,
    title: "Insulated Winter Jacket",
    category: "clothing",
    price: 3499,
    originalPrice: 5499,
    rating: 4.5,
    description: "Warm winter jacket with water-resistant coating and multiple pockets.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    title: "Advanced Fitness Tracker",
    category: "electronics",
    price: 1999,
    originalPrice: 2999,
    rating: 3.9,
    description: "Activity tracker with heart rate monitoring and smartphone integration.",
    image: "https://images-cdn.ubuy.qa/642b6562e32ecb731e6cb983-fitbit-charge-5-advanced-fitness.jpg"
  }
];

 

    // --- DOM ELEMENTS ---
    const productsGrid = document.getElementById('products-grid');
    const resultsCount = document.getElementById('results-count');
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.getElementById('close-cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeModal = document.getElementById('close-modal');
    const placeOrderBtn = document.getElementById('place-order-btn');
    const overlay = document.getElementById('overlay');
    const checkoutForm = document.getElementById('checkout-form');
    const orderConfirmation = document.getElementById('order-confirmation');
    

    // ✅ Order Summary fields
    const summarySubtotal = document.getElementById('summary-subtotal');
    const summaryShipping = document.getElementById('summary-shipping');
    const summaryTax = document.getElementById('summary-tax');
    const summaryTotal = document.getElementById('summary-total');

    // --- STATE ---
    let cart = [];
    let cartItemCount = 0;
    const SHIPPING_FEE = 0;
    const TAX_RATE = 0.10; // 10%

    // --- INIT ---
    document.addEventListener('DOMContentLoaded', () => {
        renderProducts(products);

        cartIcon.addEventListener('click', openCart);
        closeCart.addEventListener('click', closeCartSidebar);
        checkoutBtn.addEventListener('click', openCheckoutModal);
        closeModal.addEventListener('click', closeCheckoutModal);
        placeOrderBtn.addEventListener('click', placeOrder);
        overlay.addEventListener('click', () => {
            closeCartSidebar();
            closeCheckoutModal();
        });

        // Load saved cart
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartCount();
            renderCartItems();
            updateOrderSummary();
        }
    });

 // --- RENDER PRODUCTS ---
function renderProducts(productsArray) {
    productsGrid.innerHTML = '';

    productsArray.forEach(product => {
        const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        const savings = product.originalPrice - product.price;

        // ⭐ Convert rating number to stars
        const fullStars = Math.floor(product.rating);
        const halfStar = product.rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;
        const starsHtml = 
            '★'.repeat(fullStars) + 
            (halfStar ? '☆' : '') + 
            '☆'.repeat(emptyStars);

        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <span class="discount-badge">${discountPercent}% OFF</span>
                <img src="${product.image}" alt="${product.title}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>

                <div class="product-pricing">
                    <span class="mrp"><s>₹${product.originalPrice.toLocaleString()}</s></span>
                    <span class="price">₹${product.price.toLocaleString()}</span>
                </div>
                <div class="savings">You save: ₹${savings.toLocaleString()}</div>
                <div class="rating">
                    <span class="rating-value">${product.rating.toFixed(1)}</span>
                    <span class="stars">${starsHtml}</span>
                </div>

                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">🛒 Add to Cart</button>
                    <button class="buy-now" data-id="${product.id}">⚡ Buy Now</button>
                </div>
            </div>`;
        productsGrid.appendChild(productCard);
    });

    resultsCount.textContent = productsArray.length;

    document.querySelectorAll('.add-to-cart').forEach(btn =>
        btn.addEventListener('click', e => addToCart(parseInt(e.currentTarget.dataset.id)))
    );

    document.querySelectorAll('.buy-now').forEach(btn =>
        btn.addEventListener('click', e => buyNow(parseInt(e.currentTarget.dataset.id)))
    );
}


    // --- CART FUNCTIONS ---
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCartCount();
        updateCart();
        renderCartItems();
        updateOrderSummary();
    }

    function buyNow(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        cart = [{ ...product, quantity: 1 }]; // reset cart with only this product
        updateCartCount();
        updateCart();
        renderCartItems();
        updateOrderSummary();

        checkoutModal.classList.add('active');
        overlay.classList.add('active');
        checkoutForm.style.display = 'block';
        orderConfirmation.style.display = 'none';
    }

    function updateCartCount() {
        cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = cartItemCount;
    }

function renderCartItems() {
    cartItems.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <a href="#products" class="btn btn-primary">Continue Shopping</a>
            </div>`;
        cartTotal.textContent = `$0.00`;
        return;
    }

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartItems.innerHTML += `
            <div class="cart-item">
                <div class="cart-item-image"><img src="${item.image}" alt="${item.title}"></div>
                <div class="cart-item-details">
                    <h4>${item.title}</h4>
                    <div class="item-price">$${item.price.toFixed(2)}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease-qty" data-index="${index}">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn increase-qty" data-index="${index}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="item-total">Total: $${itemTotal.toFixed(2)}</div>
                </div>
                <button class="remove-from-cart" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>`;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-from-cart').forEach(btn => {
        btn.addEventListener('click', e => {
            const index = parseInt(e.currentTarget.dataset.index);
            removeFromCart(index);
        });
    });
    
    // Add event listeners to quantity buttons
    document.querySelectorAll('.increase-qty').forEach(btn => {
        btn.addEventListener('click', e => {
            const index = parseInt(e.currentTarget.dataset.index);
            increaseQuantity(index);
        });
    });
    
    document.querySelectorAll('.decrease-qty').forEach(btn => {
        btn.addEventListener('click', e => {
            const index = parseInt(e.currentTarget.dataset.index);
            decreaseQuantity(index);
        });
    });
}

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        updateCartCount();
        updateCart();
        renderCartItems();
        updateOrderSummary();
    }
}

function increaseQuantity(index) {
    if (index >= 0 && index < cart.length) {
        cart[index].quantity++;
        updateCartCount();
        updateCart();
        renderCartItems();
        updateOrderSummary();
    }
}

function decreaseQuantity(index) {
    if (index >= 0 && index < cart.length) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            // If quantity is 1, remove the item completely
            removeFromCart(index);
            return;
        }
        updateCartCount();
        updateCart();
        renderCartItems();
        updateOrderSummary();
    }
}
    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // --- ORDER SUMMARY ---
    function updateOrderSummary() {
        let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        let tax = subtotal * TAX_RATE;
        let shipping = cart.length > 0 ? SHIPPING_FEE : 0;
        let total = subtotal + tax + shipping;

        summarySubtotal.textContent = `$${subtotal.toFixed(2)}`;
        summaryShipping.textContent = `$${shipping.toFixed(2)}`;
        summaryTax.textContent = `$${tax.toFixed(2)}`;
        summaryTotal.textContent = `$${total.toFixed(2)}`;
    }

    // --- CHECKOUT MODAL ---
    function openCart() {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
        renderCartItems();
    }

    function closeCartSidebar() {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    function openCheckoutModal() {
        if (cart.length === 0) return;
        checkoutModal.classList.add('active');
        overlay.classList.add('active');
        updateOrderSummary();
    }

    function closeCheckoutModal() {
        checkoutModal.classList.remove('active');
        overlay.classList.remove('active');
    }

    function placeOrder() {
        placeOrderBtn.innerHTML = 'Processing...';
        setTimeout(() => {
            checkoutForm.style.display = 'none';
            orderConfirmation.style.display = 'block';
            cart = [];
            updateCart();
            updateCartCount();
            renderCartItems();
            updateOrderSummary();
            localStorage.removeItem('cart');
            placeOrderBtn.innerHTML = 'Place Order';
        }, 1500);
    }

document.addEventListener('DOMContentLoaded', () => {
  // Get references to all the necessary elements
  const signinBtn = document.getElementById('signin-btn');
  const signupBtn = document.getElementById('signup-btn');
  const signinModal = document.getElementById('signin-modal');
  const signupModal = document.getElementById('signup-modal');
  const closeModalBtns = document.querySelectorAll('.close-btn');
  const switchToSignupLink = document.getElementById('switch-to-signup');
  const switchToSigninLink = document.getElementById('switch-to-signin');

  // Function to open a specific modal
  function openModal(modal) {
    if (modal) {
      modal.style.display = 'block';
    }
  }

  // Function to close a specific modal
  function closeModal(modal) {
    if (modal) {
      modal.style.display = 'none';
    }
  }

  // Event listener for the "Sign In" button
  signinBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(signinModal);
  });

  // Event listener for the "Sign Up" button
  signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(signupModal);
  });

  // Event listeners for all "close" buttons
  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.modal;
      const modalToClose = document.getElementById(modalId);
      closeModal(modalToClose);
    });
  });

  // Event listener to switch from Sign In to Sign Up modal
  switchToSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(signinModal);
    openModal(signupModal);
  });

  // Event listener to switch from Sign Up to Sign In modal
  switchToSigninLink.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(signupModal);
    openModal(signinModal);
  });

  // Close modal when clicking outside of it
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });


});
document.addEventListener('DOMContentLoaded', function() {
  const btnOrder = document.getElementById('btn-order');
  const orderList = document.getElementById('order-list');
  const closeOrders = document.getElementById('close-orders');
  const navLinks = document.getElementById('nav-links');
  const navActions = document.getElementById('nav-actions');
  const cartIcon = document.getElementById('cart-icon');
  const themeToggle = document.getElementById('theme-toggle');
  const ordersUl = document.getElementById('orders-ul');
  const emptyState = document.getElementById('empty-state');

  // --- Completed Orders State ---
  let completedOrders = [];

  // ✅ Handle placing an order
  const placeOrderBtn = document.getElementById("place-order-btn");
  if (placeOrderBtn) {
    placeOrderBtn.addEventListener("click", function(e) {
      e.preventDefault();
      if (cart.length === 0) return;

      const order = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        status: "Completed",
        items: [...cart],
        total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
      };

      completedOrders.push(order);

      // Reset cart
      cart = [];
      updateCart();
      updateCartCount();
      renderCartItems();
      updateOrderSummary();

      document.getElementById("order-confirmation").style.display = "block";
      document.getElementById("checkout-form").style.display = "none";
    });
  }

  // ✅ Show order history and hide navbar items
  btnOrder.addEventListener('click', function(e) {
    e.preventDefault();

    ordersUl.innerHTML = "";

    if (completedOrders.length === 0) {
      emptyState.style.display = "block";
    } else {
      emptyState.style.display = "none";

      completedOrders.forEach(order => {
        const li = document.createElement("li");
        li.className = "order-item";

        // Build product HTML with image
        let productsHtml = order.items.map(item => `
          <div class="order-product">
            <div class="product-info">
              <img src="${item.image}" alt="${item.title}" class="product-thumb">
              <span>${item.title} × ${item.quantity}</span>
            </div>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        `).join("");

        li.innerHTML = `
          <div class="order-id">Order #${order.id}</div>
          <div class="order-date">${order.date}</div>
          <div class="order-status status-completed">${order.status}</div>
          <div class="order-details">${productsHtml}</div>
          <div class="order-footer">
            <div class="order-total">Total: $${order.total.toFixed(2)}</div>
          </div>
        `;

        ordersUl.appendChild(li);
      });
    }

    // Show order history + hide navbar
    orderList.style.display = 'block';
    navLinks.style.display = 'none';
    navActions.style.display = 'none';
    cartIcon.style.display = 'none';
    themeToggle.style.display = 'none';
  });

  // ✅ Close order history and restore navbar
  closeOrders.addEventListener('click', function() {
    orderList.style.display = 'none';
    navLinks.style.display = 'flex';
    navActions.style.display = 'flex';
    cartIcon.style.display = 'flex';
    themeToggle.style.display = 'inline-block';
  });
});
const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check for saved theme in localStorage
if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // Toggle icon
    if(document.body.classList.contains('dark')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// --- FILTERING FUNCTIONALITY ---
document.addEventListener('DOMContentLoaded', () => {
    // Get filter elements
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const ratingFilter = document.getElementById('rating-filter');
    const resetFiltersBtn = document.getElementById('reset-filters');
    
    // Add event listeners to filters
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    ratingFilter.addEventListener('change', filterProducts);
    resetFiltersBtn.addEventListener('click', resetFilters);
});

function filterProducts() {
    const categoryValue = document.getElementById('category-filter').value;
    const priceValue = document.getElementById('price-filter').value;
    const ratingValue = document.getElementById('rating-filter').value;
    
    let filteredProducts = [...products];
    
    // Apply category filter
    if (categoryValue !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === categoryValue
        );
    }
    
    // Apply price filter
    if (priceValue !== 'all') {
        switch(priceValue) {
            case '0-25':
                filteredProducts = filteredProducts.filter(product => product.price < 25);
                break;
            case '25-50':
                filteredProducts = filteredProducts.filter(product => 
                    product.price >= 25 && product.price < 50
                );
                break;
            case '50-100':
                filteredProducts = filteredProducts.filter(product => 
                    product.price >= 50 && product.price < 100
                );
                break;
            case '100+':
                filteredProducts = filteredProducts.filter(product => product.price >= 100);
                break;
        }
    }
    
    // Apply rating filter
    if (ratingValue !== 'all') {
        const minRating = parseInt(ratingValue);
        filteredProducts = filteredProducts.filter(product => 
            product.rating >= minRating
        );
    }
    
    // Render filtered products
    renderProducts(filteredProducts);
}

function resetFilters() {
    document.getElementById('category-filter').value = 'all';
    document.getElementById('price-filter').value = 'all';
    document.getElementById('rating-filter').value = 'all';
    
    // Render all products
    renderProducts(products);
}
