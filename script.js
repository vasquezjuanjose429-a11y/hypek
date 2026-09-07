// --- 1. BASE DE DATOS LOCAL Y CATÁLOGO ---
let productos = JSON.parse(localStorage.getItem('hypek_productos'));

// Generar las 30 gorras automáticamente la primera vez
if (!productos || productos.length === 0) {
    productos = [];
    for (let i = 1; i <= 30; i++) {
        productos.push({
            id: Date.now() + i,
            nombre: `Gorra Hypek V2 - Modelo ${i}`,
            precioOriginal: 120000,
            precioRebajado: 85000,
            imagen: `https://via.placeholder.com/300x300/000000/ffffff?text=HYPEK+${i}`
        });
    }
    guardarProductos();
}

function guardarProductos() {
    localStorage.setItem('hypek_productos', JSON.stringify(productos));
}

function renderizarCatalogo(lista = productos) {
    const grid = document.getElementById('grid-productos');
    grid.innerHTML = '';
    
    lista.forEach(producto => {
        grid.innerHTML += `
            <div class="producto-card">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p class="precio-original">$${producto.precioOriginal.toLocaleString('es-CO')}</p>
                <p class="precio-rebajado">$${producto.precioRebajado.toLocaleString('es-CO')}</p>
                <button class="btn-negro" onclick="agregarAlCarrito(${producto.id})">Añadir a la bolsa</button>
            </div>
        `;
    });
}

// Buscador
function filtrarGorras() {
    const texto = document.getElementById('buscador').value.toLowerCase();
    const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(texto));
    renderizarCatalogo(filtrados);
}

// --- 2. LÓGICA DEL CARRITO ---
let carrito = JSON.parse(localStorage.getItem('hypek_carrito')) || [];

function toggleCarrito() {
    document.getElementById('panel-carrito').classList.toggle('activo');
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    guardarCarrito();
    actualizarCarrito();
    document.getElementById('panel-carrito').classList.add('activo'); // Abre el carrito al añadir
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    guardarCarrito();
    actualizarCarrito();
}

function guardarCarrito() {
    localStorage.setItem('hypek_carrito', JSON.stringify(carrito));
}

function actualizarCarrito() {
    const contenedor = document.getElementById('items-carrito');
    const contador = document.getElementById('contador-carrito');
    const totalElement = document.getElementById('total-carrito');
    
    contenedor.innerHTML = '';
    let total = 0;

    carrito.forEach((prod, index) => {
        total += prod.precioRebajado;
        contenedor.innerHTML += `
            <div class="item-carrito">
                <div>
                    <h4>${prod.nombre}</h4>
                    <p>$${prod.precioRebajado.toLocaleString('es-CO')}</p>
                </div>
                <button class="btn-eliminar" onclick="eliminarDelCarrito(${index})">✕</button>
            </div>
        `;
    });

    contador.innerText = `(${carrito.length})`;
    totalElement.innerText = total.toLocaleString('es-CO');
}

// --- 3. PEDIDO POR WHATSAPP ---
function enviarPedidoWhatsApp() {
    if (carrito.length === 0) {
        alert("Tu bolsa está vacía.");
        return;
    }

    let telefono = "573000000000"; // PON AQUÍ TU NÚMERO DE CELULAR SIN EL '+'
    let mensaje = "Hola Hypek, quiero hacer el siguiente pedido:%0A%0A";
    let total = 0;

    carrito.forEach(prod => {
        mensaje += `- ${prod.nombre} ($${prod.precioRebajado.toLocaleString('es-CO')})%0A`;
        total += prod.precioRebajado;
    });

    mensaje += `%0A*TOTAL: $${total.toLocaleString('es-CO')}*`;
    
    let url = `https://wa.me/${telefono}?text=${mensaje}`;
    window.open(url, '_blank');
}

// --- 4. TÉRMINOS Y CONDICIONES ---
function abrirTerminos(event) {
    event.preventDefault();
    document.getElementById('modal-terminos').style.display = 'block';
}

function cerrarTerminos() {
    document.getElementById('modal-terminos').style.display = 'none';
}

// --- 5. PANEL DE ADMINISTRADOR ---
function abrirAdmin() {
    let password = prompt("Contraseña de administrador:");
    if (password === "Hypek2026") { 
        document.getElementById('panel-admin').style.display = 'block';
        actualizarListaAdmin();
    } else if (password !== null) {
        alert("Acceso denegado.");
    }
}

function cerrarAdmin() {
    document.getElementById('panel-admin').style.display = 'none';
}

function agregarGorra() {
    const nombre = document.getElementById('admin-nombre').value;
    const precioRebajado = parseInt(document.getElementById('admin-precio').value);
    let imagen = document.getElementById('admin-imagen').value;

    if (!imagen) imagen = "https://via.placeholder.com/300x300/000000/ffffff?text=Nueva+Gorra";

    if (nombre && precioRebajado) {
        productos.push({
            id: Date.now(),
            nombre: nombre,
            precioOriginal: precioRebajado + 30000,
            precioRebajado: precioRebajado,
            imagen: imagen
        });
        guardarProductos();
        renderizarCatalogo();
        actualizarListaAdmin();
        
        document.getElementById('admin-nombre').value = '';
        document.getElementById('admin-precio').value = '';
        document.getElementById('admin-imagen').value = '';
    } else {
        alert("Ingresa nombre y precio.");
    }
}

function eliminarGorra(id) {
    if(confirm("¿Seguro que quieres eliminar esta gorra del catálogo?")) {
        productos = productos.filter(p => p.id !== id);
        guardarProductos();
        renderizarCatalogo();
        actualizarListaAdmin();
    }
}

function actualizarListaAdmin() {
    const lista = document.getElementById('lista-admin');
    lista.innerHTML = '';
    productos.forEach(p => {
        lista.innerHTML += `<li onclick="eliminarGorra(${p.id})">🗑️ Eliminar: ${p.nombre}</li>`;
    });
}

// Inicializar la página
renderizarCatalogo();
actualizarCarrito();
