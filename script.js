/* --- HYPEK 2.0 ULTRA ENGINE --- */

const WHATSAPP_NUMBER = "573000000000"; // Configura tu número de WhatsApp con indicativo de país

// DATABASE PRODUCTOS CON IMÁGENES CDN DIRECTAS (Soporta sustitución por imágenes locales)
const products = [
    {
        id: 1,
        name: "HYPEK Snapback Structured Black",
        category: "snapback",
        price: 135000,
        tag: "DROP 001",
        description: "Gorra Snapback monocromática con estructura rígida de 6 paneles. Bordado frontal HYPEK en relieve 3D de alta densidad.",
        material: "100% Algodón Premium",
        images: [
            "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 2,
        name: "HYPEK Trucker Mesh Stealth",
        category: "trucker",
        price: 120000,
        tag: "POPULAR",
        description: "Panel frontal acolchado con malla posterior transpirable de alta resistencia. Estética urbana minimalista.",
        material: "Poliéster & Malla Técnica",
        images: [
            "https://images.unsplash.com/photo-1521369984125-a4ec30b29c0a?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 3,
        name: "HYPEK Dad Cap Washed Charcoal",
        category: "dadcap",
        price: 110000,
        tag: "BASICS",
        description: "Silueta desenfadada con lavado técnico vintage. Hebilla metálica trasera grabada con el isotipo HYPEK.",
        material: "Algodón Washed 100%",
        images: [
            "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 4,
        name: "HYPEK Limited Cyber-H Edition",
        category: "limited",
        price: 160000,
        tag: "LIMITED DROP",
        description: "Edición limitada numerada de 50 piezas. Parche frontal reflectivo táctico y acabados de lujo.",
        material: "Nylon Balístico Impermeable",
        images: [
            "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=800&q=80"
        ]
    }
];

let cart = [];
let selectedProduct = null;
let selectedQuantity = 1;

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
    setupEventListeners();
});

// RENDER PRODUCTS
function renderProducts(items) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">No se encontraron gorras que coincidan con tu búsqueda.</p>`;
        return;
    }

    items.forEach(prod => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.onclick = () => openProductModal(prod.id);

        card.innerHTML = `
            <div class="product-thumb">
                <span class="product-tag">${prod.tag}</span>
                <img src="${prod.images[0]}" alt="${prod.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${prod.name}</h3>
                <div class="product-price">$${formatPrice(prod.price)} COP</div>
                <div class="product-actions">
                    <button class="btn btn-secondary btn-block">VER DETALLES</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// FORMAT PRICE
function formatPrice(amount) {
    return amount.toLocaleString("es-CO");
}

// MODAL CONTROLS
function openProductModal(id) {
    selectedProduct = products.find(p => p.id === id);
    if (!selectedProduct) return;

    selectedQuantity = 1;
    document.getElementById("qtyValue").innerText = selectedQuantity;
    document.getElementById("modalTitle").innerText = selectedProduct.name;
    document.getElementById("modalPrice").innerText = `$${formatPrice(selectedProduct.price)} COP`;
    document.getElementById("modalDesc").innerText = selectedProduct.description;
    document.getElementById("modalTag").innerText = selectedProduct.tag;
    document.getElementById("modalMat").innerText = selectedProduct.material;

    const mainImg = document.getElementById("modalMainImg");
    mainImg.src = selectedProduct.images[0];

    const thumbsContainer = document.getElementById("modalThumbnails");
    thumbsContainer.innerHTML = "";

    selectedProduct.images.forEach((imgSrc, idx) => {
        const thumb = document.createElement("div");
        thumb.className = `thumb-item ${idx === 0 ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${imgSrc}" alt="Vista">`;
        thumb.onclick = (e) => {
            e.stopPropagation();
            mainImg.src = imgSrc;
            document.querySelectorAll(".thumb-item").forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");
        };
        thumbsContainer.appendChild(thumb);
    });

    document.getElementById("productModal").classList.add("active");
    document.getElementById("globalOverlay").classList.add("active");
}

function closeModals() {
    document.getElementById("productModal").classList.remove("active");
    document.getElementById("cartSidebar").classList.remove("open");
    document.getElementById("globalOverlay").classList.remove("active");
}

// CART SYSTEM
function addToCart(product, quantity) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    updateCartUI();
    closeModals();
    openCartSidebar();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateCartUI() {
    const cartContainer = document.getElementById("cartItemsContainer");
    const cartBadge = document.getElementById("cartBadge");
    const cartSubtotal = document.getElementById("cartSubtotal");

    cartContainer.innerHTML = "";
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;

        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <img src="${item.images[0]}" class="cart-item-img" alt="${item.name}">
            <div class="cart-item-details">
                <span class="cart-item-title">${item.name}</span>
                <span class="cart-item-price">${item.quantity} x $${formatPrice(item.price)} COP</span>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Eliminar</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });

    cartBadge.innerText = totalItems;
    cartSubtotal.innerText = `$${formatPrice(totalPrice)} COP`;
}

function openCartSidebar() {
    document.getElementById("cartSidebar").classList.add("open");
    document.getElementById("globalOverlay").classList.add("active");
}

// WHATSAPP CHECKOUT
function checkoutWhatsapp() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío. Agrega gorras antes de continuar.");
        return;
    }

    let message = "🔥 *NUEVO PEDIDO - HYPEK BRAND* 🔥\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        const sub = item.price * item.quantity;
        total += sub;
        message += `${index + 1}. *${item.name}*\n   Cant: ${item.quantity} | Valor: $${formatPrice(sub)} COP\n`;
    });

    message += `\n💰 *TOTAL A PAGAR:* $${formatPrice(total)} COP\n`;
    message += "📍 *Método:* Envío a domicilio\n\nQuedo atento a los datos para la transferencia y despacho.";

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

// EVENT LISTENERS
function setupEventListeners() {
    // Modal Close
    document.getElementById("closeProductModal").onclick = closeModals;
    document.getElementById("closeCartBtn").onclick = closeModals;
    document.getElementById("globalOverlay").onclick = closeModals;

    // Quantity selectors
    document.getElementById("qtyMinus").onclick = () => {
        if (selectedQuantity > 1) {
            selectedQuantity--;
            document.getElementById("qtyValue").innerText = selectedQuantity;
        }
    };
    document.getElementById("qtyPlus").onclick = () => {
        selectedQuantity++;
        document.getElementById("qtyValue").innerText = selectedQuantity;
    };

    // Add to cart button inside modal
    document.getElementById("modalAddToCartBtn").onclick = () => {
        if (selectedProduct) {
            addToCart(selectedProduct, selectedQuantity);
        }
    };

    // Cart Sidebar Toggle
    document.getElementById("cartToggleBtn").onclick = openCartSidebar;
    document.getElementById("checkoutWhatsappBtn").onclick = checkoutWhatsapp;

    // Filters
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.onclick = () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.getAttribute("data-filter");
            if (filter === "all") {
                renderProducts(products);
            } else {
                renderProducts(products.filter(p => p.category === filter));
            }
        };
    });

    // Search Toggle
    const searchContainer = document.getElementById("searchContainer");
    const searchInput = document.getElementById("searchInput");
    document.getElementById("searchToggleBtn").onclick = () => {
        searchContainer.classList.add("active");
        searchInput.focus();
    };
    document.getElementById("closeSearchBtn").onclick = () => {
        searchContainer.classList.remove("active");
        searchInput.value = "";
        renderProducts(products);
    };

    // Live Search
    searchInput.oninput = (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.description.toLowerCase().includes(query)
        );
        renderProducts(filtered);
    };
}
