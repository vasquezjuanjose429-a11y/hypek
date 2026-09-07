/* --- HYPEK 2.0 SCRIPT --- */

const EMAIL_CONTACT = "hypekcolombia@gmail.com";
// El número de WhatsApp se deja listo para configurar cuando lo definas.
const PHONE_WHATSAPP = ""; 

// 30 PRODUCTOS CON PRECIOS NORMALES Y TACHADOS (DESCUENTO)
const products = [
    { id: 1, name: "Hoodie Monochrome Oversize Black", category: "hoodies", price: 149900, originalPrice: 199900, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80", tag: "OFERTA", desc: "Buzo hoodie negro pesado con corte oversize streetwear, confeccionado en algodón perchado de alta densidad." },
    { id: 2, name: "Camiseta HYPEK Signature White", category: "tshirts", price: 79900, originalPrice: 110000, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80", tag: "BEST SELLER", desc: "Camiseta blanca de silueta amplia con estampa sutil en el pecho, 100% algodón suave de alta durabilidad." },
    { id: 3, name: "Jogger Cargo Dark Tactical", category: "pants", price: 139900, originalPrice: 175000, image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&auto=format&fit=crop&q=80", tag: "TÁCTICO", desc: "Pantalón jogger con múltiples bolsillos funcionales, ajuste elástico en tobillos y cinta con broche." },
    { id: 4, name: "Gorra Snapback Monochrome H", category: "accessories", price: 59900, originalPrice: 85000, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&fit=crop&q=80", tag: "HOT", desc: "Gorra snapback de visera plana con bordado frontal 3D del logo HYPEK." },
    { id: 5, name: "Buzo Crewneck Minimalist Grey", category: "hoodies", price: 129900, originalPrice: 160000, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=80", tag: "NUEVO", desc: "Buzo cuello redondo sin capota en tono gris oscuro, perfecto para layering urbano." },
    { id: 6, name: "Camiseta Boxy Fit Heavy Metal", category: "tshirts", price: 85900, originalPrice: 119900, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=80", tag: "PREMIUM", desc: "Camiseta boxy fit en algodón pesado lavada al ácido, máxima caída y textura vintage." },
    { id: 7, name: "Pantalón Denim Wide Leg Black", category: "pants", price: 159900, originalPrice: 210000, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80", tag: "TENDENCIA", desc: "Jeans de bota ancha en dril negro rígido, estilo retro con acabado pulido." },
    { id: 8, name: "Beanie Tejido Ultra Black", category: "accessories", price: 39900, originalPrice: 60000, image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&auto=format&fit=crop&q=80", tag: "ESENCIAL", desc: "Gorro beanie acanalado en hilo térmico, ajuste confortable y parche tejido sutil." },
    { id: 9, name: "Hoodie Zip-Up Heavy Dark", category: "hoodies", price: 169900, originalPrice: 220000, image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&auto=format&fit=crop&q=80", tag: "EDICIÓN LIMITADA", desc: "Chaqueta buzo con cremallera frontal metálica bidireccional y capota reforzada." },
    { id: 10, name: "Camiseta Acid Wash Graphic", category: "tshirts", price: 89900, originalPrice: 125000, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop&q=80", tag: "OFERTA", desc: "Camiseta estampada con gráficos monocromáticos conceptuales en espalda." },
    { id: 11, name: "Jogger Relaxed Cotton White", category: "pants", price: 125900, originalPrice: 165000, image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=600&auto=format&fit=crop&q=80", tag: "FRESH", desc: "Sudadera holgada en algodón blanco con cordones ajustables y cintura elástica." },
    { id: 12, name: "Shoulder Bag Tactical Black", category: "accessories", price: 79900, originalPrice: 110000, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80", tag: "MUST HAVE", desc: "Bolso de hombro/cruzado impermeable con cierres sellados y arnés ajustable." },
    { id: 13, name: "Buzo Oversize Off-White Minimal", category: "hoodies", price: 145900, originalPrice: 189900, image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&auto=format&fit=crop&q=80", tag: "POPULAR", desc: "Hoodie en tono crema / off-white con bolsillo canguro y bordado tonal." },
    { id: 14, name: "Camiseta Manga Larga Techwear", category: "tshirts", price: 95900, originalPrice: 130000, image: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=600&auto=format&fit=crop&q=80", tag: "NUEVO", desc: "Camiseta de manga larga con detalles reflectivos en mangas y cuello alto." },
    { id: 15, name: "Short Cargo Black Street", category: "pants", price: 99900, originalPrice: 135000, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&auto=format&fit=crop&q=80", tag: "VERANO", desc: "Bermuda estilo cargo en dril resistente, ideal para outfits urbanos frescos." },
    { id: 16, name: "Cinturón Táctico Nylon HYPEK", category: "accessories", price: 45900, originalPrice: 65000, image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&auto=format&fit=crop&q=80", tag: "ACCESORIO", desc: "Cinturón de hebilla metálica de liberación rápida, fibra de nylon ultra resistente." },
    { id: 17, name: "Hoodie Crop Oversize (Unisex)", category: "hoodies", price: 135900, originalPrice: 170000, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80", tag: "STYLE", desc: "Corte moderno corto pero holgado, mangas caídas y acabado deshilachado." },
    { id: 18, name: "Camiseta Oversize Mono Pattern", category: "tshirts", price: 82900, originalPrice: 115000, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop&q=80", tag: "OFERTA", desc: "Estampa de alta definición en serigrafía al agua sobre textil 100% algodón." },
    { id: 19, name: "Pantalón Parachute Cargo Grey", category: "pants", price: 149900, originalPrice: 195000, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&auto=format&fit=crop&q=80", tag: "TOP", desc: "Pantalón paracaídas liviano con ajustadores en cintura y tobillos." },
    { id: 20, name: "Medias Altas Monochrome Pack x3", category: "accessories", price: 49900, originalPrice: 70000, image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&auto=format&fit=crop&q=80", tag: "PACK", desc: "Set de 3 pares de medias de algodón acolchado con el logotipo HYPEK." },
    { id: 21, name: "Sweatshirt Vintage Washed Black", category: "hoodies", price: 139900, originalPrice: 180000, image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80", tag: "VINTAGE", desc: "Buzo cerrado con tratamiento de deslavado artesanal único en cada pieza." },
    { id: 22, name: "Camiseta Sleeveless Workout Dark", category: "tshirts", price: 69900, originalPrice: 95000, image: "https://images.unsplash.com/photo-1503342392335-3774d54181da?w=600&auto=format&fit=crop&q=80", tag: "DEPORTE", desc: "Esqueleto amplio de sisa caída ideal para entrenamiento o uso diario." },
    { id: 23, name: "Pantalón Sweatpants Heavy Fleece", category: "pants", price: 132900, originalPrice: 170000, image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=80", tag: "COMFY", desc: "Pantalón térmico acolchado ultra suave por dentro, máximo confort." },
    { id: 24, name: "Bucket Hat Streetwear Black", category: "accessories", price: 55900, originalPrice: 80000, image: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&auto=format&fit=crop&q=80", tag: "TREND", desc: "Sombrero piluso / bucket hat reversible con doble textura impermeable." },
    { id: 25, name: "Hoodie Monogram Embossed", category: "hoodies", price: 159900, originalPrice: 205000, image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&auto=format&fit=crop&q=80", tag: "EXCLUSIVO", desc: "Capota con relieve en alta frecuencia sobre la tela principal." },
    { id: 26, name: "Camiseta Boxy Fit Pure Black", category: "tshirts", price: 79900, originalPrice: 105000, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80", tag: "BÁSICO", desc: "Básico indispensable de corte holgado sin gráficos, negro profundo." },
    { id: 27, name: "Jogger Bicolor High Contrast", category: "pants", price: 139900, originalPrice: 180000, image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&auto=format&fit=crop&q=80", tag: "DESIGN", desc: "Diseño dividido con paneles en contraste blanco y negro." },
    { id: 28, name: "Bolsa Tote Bag Canvas HYPEK", category: "accessories", price: 49900, originalPrice: 75000, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80", tag: "ECOLOGIC", desc: "Bolso de lona pesada reforzada con capacidad para ordenador portátil." },
    { id: 29, name: "Buzo Oversize Fleece Charcoal", category: "hoodies", price: 138900, originalPrice: 175000, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80", tag: "OFERTA", desc: "Gris carbón oscuro con acabado aterciopelado y puños acanalados." },
    { id: 30, name: "Llavero Táctico Carabiner HYPEK", category: "accessories", price: 29900, originalPrice: 45000, image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&auto=format&fit=crop&q=80", tag: "MINI", desc: "Mosquetón de aluminio negro mate con cinta grabada a láser." }
];

let cart = [];
let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'featured';

// FORMATO MONEDA COP
function formatCOP(amount) {
    return '$' + amount.toLocaleString('es-CO') + ' COP';
}

// RENDERIZAR PRODUCTOS
function renderProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';

    let filtered = products.filter(p => {
        const matchesCategory = currentCategory === 'all' || p.category === currentCategory;
        const matchesSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase()) || 
                              p.desc.toLowerCase().includes(currentSearch.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Ordenamiento
    if (currentSort === 'low-high') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'high-low') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'discount') {
        filtered.sort((a, b) => (b.originalPrice - b.price) - (a.originalPrice - a.price));
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">No se encontraron productos en esta categoría o búsqueda.</p>`;
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-thumb" onclick="openProductModal(${p.id})">
                <img src="${p.image}" alt="${p.name}">
                <span class="product-tag">${p.tag}</span>
            </div>
            <div class="product-info">
                <h3 class="product-title">${p.name}</h3>
                <div class="product-prices">
                    <span class="price-original">${formatCOP(p.originalPrice)}</span>
                    <span class="price-discount">${formatCOP(p.price)}</span>
                </div>
                <div class="product-actions">
                    <button class="btn btn-secondary btn-block" onclick="addToCart(${p.id})">AÑADIR</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// DETALLES EN MODAL
let selectedModalProduct = null;
let selectedModalQty = 1;

function openProductModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    selectedModalProduct = product;
    selectedModalQty = 1;

    document.getElementById('modalImg').src = product.image;
    document.getElementById('modalCategory').innerText = product.category.toUpperCase();
    document.getElementById('modalTitle').innerText = product.name;
    document.getElementById('modalOriginalPrice').innerText = formatCOP(product.originalPrice);
    document.getElementById('modalDiscountPrice').innerText = formatCOP(product.price);
    document.getElementById('modalDesc').innerText = product.desc;
    document.getElementById('qtyVal').innerText = selectedModalQty;

    document.getElementById('productModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

// CARRITO LOGIC
function addToCart(id, qty = 1) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ ...product, qty });
    }

    updateCartUI();
    openCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateCartUI() {
    const cartBody = document.getElementById('cartBody');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    cartBody.innerHTML = '';
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartBody.innerHTML = `<p style="text-align: center; color: var(--text-muted); margin-top: 2rem;">Tu carrito está vacío.</p>`;
    } else {
        cart.forEach(item => {
            total += item.price * item.qty;
            count += item.qty;

            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <span class="cart-item-title">${item.name}</span>
                    <span class="cart-item-price">${item.qty} x ${formatCOP(item.price)}</span>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
            `;
            cartBody.appendChild(div);
        });
    }

    cartCount.innerText = count;
    cartTotal.innerText = formatCOP(total);
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('open');
    document.getElementById('overlay').classList.add('active');
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('active');
}

// WHATSAPP CHECKOUT
function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let message = "Hola HYPEK Colombia! Quiero realizar el siguiente pedido:\n\n";
    let total = 0;

    cart.forEach(item => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        message += `• ${item.name} (x${item.qty}) - ${formatCOP(subtotal)}\n`;
    });

    message += `\nTOTAL A PAGAR: ${formatCOP(total)}\n\n`;
    message += "Quedo atento para coordinar los datos de envío y el pago. Gracias!";

    const waNum = PHONE_WHATSAPP || "";
    const url = `https://wa.me/${waNum}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// MODALES LEGALES
const legalTexts = {
    terms: {
        title: "Términos y Condiciones",
        content: `
            <h3>1. Información General</h3>
            <p>Bienvenido a HYPEK Colombia. Al navegar y realizar compras en este sitio, aceptas los presentes términos de uso.</p>
            <h3>2. Pedidos y Precios</h3>
            <p>Todos nuestros productos cuentan con precios expresados en Pesos Colombianos (COP). Los precios con descuento reflejan ofertas por tiempo limitado.</p>
            <h3>3. Confirmación de Compras</h3>
            <p>Las compras iniciadas desde el sitio se coordinan y finalizan directamente a través de nuestro canal de atención en WhatsApp o correo electrónico (${EMAIL_CONTACT}).</p>
        `
    },
    privacy: {
        title: "Política de Privacidad",
        content: `
            <h3>1. Protección de Datos</h3>
            <p>En HYPEK respetamos tu privacidad. Los datos proporcionados para envíos y facturación no serán compartidos con terceros.</p>
            <h3>2. Uso de Información</h3>
            <p>Utilizamos tu información de contacto exclusivamente para procesar tus pedidos, dar seguimiento al envío y responder tus dudas.</p>
        `
    },
    shipping: {
        title: "Envíos y Devoluciones",
        content: `
            <h3>1. Cobertura de Envíos</h3>
            <p>Realizamos envíos a todo el territorio colombiano a través de empresas transportadoras aliadas.</p>
            <h3>2. Tiempos de Entrega</h3>
            <p>El tiempo estimado de entrega varía entre 2 a 5 días hábiles según la ciudad de destino.</p>
            <h3>3. Cambios y Garantías</h3>
            <p>Dispones de hasta 30 días calendario por defectos de fábrica o cambio de talla, siempre que la prenda conserve sus etiquetas originales sin uso.</p>
        `
    }
};

function openLegalModal(type) {
    const data = legalTexts[type];
    if (!data) return;

    document.getElementById('legalTitle').innerText = data.title;
    document.getElementById('legalBody').innerHTML = data.content;
    document.getElementById('legalModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

// EVENT LISTENERS & INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.getAttribute('data-filter');
            renderProducts();
        });
    });

    // Ordenamiento
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts();
    });

    // Buscador
    const searchContainer = document.getElementById('searchContainer');
    document.getElementById('openSearchBtn').addEventListener('click', () => {
        searchContainer.classList.add('active');
        document.getElementById('searchInput').focus();
    });
    document.getElementById('closeSearchBtn').addEventListener('click', () => {
        searchContainer.classList.remove('active');
        currentSearch = '';
        document.getElementById('searchInput').value = '';
        renderProducts();
    });
    document.getElementById('searchInput').addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderProducts();
    });

    // Carrito Sidebar Events
    document.getElementById('openCartBtn').addEventListener('click', openCart);
    document.getElementById('closeCartBtn').addEventListener('click', closeCart);
    document.getElementById('checkoutWaBtn').addEventListener('click', checkoutWhatsApp);

    // Modal Producto Qty
    document.getElementById('btnIncQty').addEventListener('click', () => {
        selectedModalQty++;
        document.getElementById('qtyVal').innerText = selectedModalQty;
    });
    document.getElementById('btnDecQty').addEventListener('click', () => {
        if (selectedModalQty > 1) {
            selectedModalQty--;
            document.getElementById('qtyVal').innerText = selectedModalQty;
        }
    });
    document.getElementById('modalAddToCartBtn').addEventListener('click', () => {
        if (selectedModalProduct) {
            addToCart(selectedModalProduct.id, selectedModalQty);
            document.getElementById('productModal').classList.remove('active');
            document.getElementById('overlay').classList.remove('active');
        }
    });
    document.getElementById('closeProductModal').addEventListener('click', () => {
        document.getElementById('productModal').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
    });

    // Menú Móvil
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
        document.getElementById('navLinks').classList.toggle('active');
    });

    // Modales Legales Links
    document.getElementById('linkTerms').addEventListener('click', (e) => { e.preventDefault(); openLegalModal('terms'); });
    document.getElementById('linkPrivacy').addEventListener('click', (e) => { e.preventDefault(); openLegalModal('privacy'); });
    document.getElementById('linkShipping').addEventListener('click', (e) => { e.preventDefault(); openLegalModal('shipping'); });
    document.getElementById('closeLegalModal').addEventListener('click', () => {
        document.getElementById('legalModal').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
    });

    // Cerrar Overlays
    document.getElementById('overlay').addEventListener('click', () => {
        closeCart();
        document.getElementById('productModal').classList.remove('active');
        document.getElementById('legalModal').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
    });
});
