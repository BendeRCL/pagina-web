const propiedades_alquiler = [
    {
        nombre: "Apartamento en el Centro",
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60",
        descripcion: "Hermoso apartamento ubicado en el corazón de Nueva Nueva York, cerca de todo lo que necesitas.",
        ubicacion: "Centro Comercial - Año 3000",
        habitaciones: 2,
        banos: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: "Departamento con Vista al Mar",
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        descripcion: "Espectacular departamento con vistas al océano. Perfecto para disfrutar de la vida.",
        ubicacion: "Zona Costera - Nueva Nueva York",
        habitaciones: 3,
        banos: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: "Condominio Moderno",
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=60",
        descripcion: "Elegante condominio moderno en una tranquila zona residencial. Seguridad 24/7.",
        ubicacion: "Zona Residencial - Año 3000",
        habitaciones: 2,
        banos: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: "Loft Industrial",
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        descripcion: "Loft espacioso con diseño industrial moderno. Ideal para profesionales creativos.",
        ubicacion: "Barrio de Artistas - Nueva Nueva York",
        habitaciones: 1,
        banos: 1,
        costo: 1800,
        smoke: true,
        pets: true
    },
    {
        nombre: "Penthouse Ejecutivo",
        src: "https://images.unsplash.com/photo-1512917774080-9b274b5ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        descripcion: "Lujoso penthouse con todas las comodidades. Ubicación premium en la ciudad.",
        ubicacion: "Distrito Financiero - Año 3000",
        habitaciones: 4,
        banos: 3,
        costo: 4500,
        smoke: true,
        pets: true
    },
    {
        nombre: "Casa Familiar",
        src: "https://images.unsplash.com/photo-1570129477492-45c003666880?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        descripcion: "Acogedora casa familiar con jardín. Perfecta para familias con niños.",
        ubicacion: "Suburbios - Nueva Nueva York",
        habitaciones: 3,
        banos: 2,
        costo: 1900,
        smoke: false,
        pets: true
    }
];

const propiedades_venta = [
    {
        nombre: "Casa Colonial",
        src: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        descripcion: "Hermosa casa colonial con arquitectura clásica. Una inversión para el futuro.",
        ubicacion: "Barrio Histórico - Nueva Nueva York",
        habitaciones: 4,
        banos: 3,
        costo: 450000,
        smoke: true,
        pets: true
    },
    {
        nombre: "Propiedad de Inversión",
        src: "https://images.unsplash.com/photo-1518684029993-3ac2ace4e403?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        descripcion: "Edificio comercial con alto potencial de rentabilidad. Perfecta inversión.",
        ubicacion: "Zona Comercial - Año 3000",
        habitaciones: 5,
        banos: 4,
        costo: 800000,
        smoke: false,
        pets: false
    },
    {
        nombre: "Villa de Lujo",
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        descripcion: "Espectacular villa de lujo con piscina y jardín privado. Propiedad exclusiva.",
        ubicacion: "Zona Exclusiva - Nueva Nueva York",
        habitaciones: 6,
        banos: 5,
        costo: 1200000,
        smoke: true,
        pets: true
    },
    {
        nombre: "Apartamento Premium",
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        descripcion: "Apartamento de lujo con acabados premium. La mejor opción para ejecutivos.",
        ubicacion: "Centro de Negocios - Año 3000",
        habitaciones: 3,
        banos: 3,
        costo: 650000,
        smoke: true,
        pets: true
    },
    {
        nombre: "Inversión Comercial",
        src: "https://images.unsplash.com/photo-1570129477492-45c003666880?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        descripcion: "Propiedad comercial con locales disponibles. Excelente para negocios.",
        ubicacion: "Zona Comercial Premium - Nueva Nueva York",
        habitaciones: 2,
        banos: 2,
        costo: 950000,
        smoke: false,
        pets: false
    },
    {
        nombre: "Mansión Futurista",
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        descripcion: "Mansión de lujo con diseño futurista. Tecnología de punta en cada rincón.",
        ubicacion: "Zona Ejecutiva - Año 3000",
        habitaciones: 7,
        banos: 6,
        costo: 2500000,
        smoke: true,
        pets: true
    }
];

function crearTarjetaPropiedad(propiedad, tipo) {
    const precioFormato = propiedad.costo.toLocaleString('es-CL');

    return `
        <div class="propiedad-card">
            <img src="${propiedad.src}" alt="${propiedad.nombre}" class="propiedad-img"
                 onerror="this.src='https://via.placeholder.com/300x250?text=No+Image'">
            <div class="propiedad-body">
                <div class="propiedad-header">
                    <h3 class="propiedad-titulo">${propiedad.nombre}</h3>
                    <div class="propiedad-precio">$${precioFormato}${tipo === 'arriendo' ? '/mes' : ''}</div>
                </div>

                <p class="propiedad-descripcion">${propiedad.descripcion}</p>

                <div class="propiedad-info">
                    <div class="info-item">
                        <span class="info-item-label">📍 Ubicación</span>
                        <div class="info-item-value">${propiedad.ubicacion}</div>
                    </div>
                    <div class="info-item">
                        <span class="info-item-label">🛏️ Habitaciones</span>
                        <div class="info-item-value">${propiedad.habitaciones}</div>
                    </div>
                    <div class="info-item">
                        <span class="info-item-label">🚿 Baños</span>
                        <div class="info-item-value">${propiedad.banos}</div>
                    </div>
                    <div class="info-item">
                        <span class="info-item-label">📐 Tipo</span>
                        <div class="info-item-value">${tipo === 'arriendo' ? 'Arriendo' : 'Venta'}</div>
                    </div>
                </div>

                <div class="propiedad-features">
                    <div class="feature ${propiedad.smoke ? 'permitido' : 'prohibido'}">
                        ${propiedad.smoke ? '✅ Se permite fumar' : '❌ No se permite fumar'}
                    </div>
                    <div class="feature ${propiedad.pets ? 'permitido' : 'prohibido'}">
                        ${propiedad.pets ? '✅ Mascotas permitidas' : '❌ No se permiten mascotas'}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function filtrarPropiedades(propiedades, busqueda) {
    return propiedades.filter(p => 
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
}

function ordenarPropiedades(propiedades, criterio) {
    const copia = [...propiedades];

    switch (criterio) {
        case 'precio-asc':
            return copia.sort((a, b) => a.costo - b.costo);
        case 'precio-desc':
            return copia.sort((a, b) => b.costo - a.costo);
        case 'habitaciones':
            return copia.sort((a, b) => b.habitaciones - a.habitaciones);
        case 'nombre':
        default:
            return copia.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
}

function renderizarArriendo() {
    const filtro = document.getElementById('filtroArriendo').value;
    const orden = document.getElementById('ordenArriendo').value;
    const container = document.getElementById('arrendoContainer');

    let propiedadesFiltradas = filtrarPropiedades(propiedades_alquiler, filtro);
    propiedadesFiltradas = ordenarPropiedades(propiedadesFiltradas, orden);

    if (propiedadesFiltradas.length === 0) {
        container.innerHTML = '<div class="empty-state">No se encontraron propiedades en arriendo con ese criterio.</div>';
        return;
    }

    container.innerHTML = propiedadesFiltradas
        .map(prop => crearTarjetaPropiedad(prop, 'arriendo'))
        .join('');
}

function renderizarVenta() {
    const filtro = document.getElementById('filtroVenta').value;
    const orden = document.getElementById('ordenVenta').value;
    const container = document.getElementById('ventaContainer');

    let propiedadesFiltradas = filtrarPropiedades(propiedades_venta, filtro);
    propiedadesFiltradas = ordenarPropiedades(propiedadesFiltradas, orden);

    if (propiedadesFiltradas.length === 0) {
        container.innerHTML = '<div class="empty-state">No se encontraron propiedades en venta con ese criterio.</div>';
        return;
    }

    container.innerHTML = propiedadesFiltradas
        .map(prop => crearTarjetaPropiedad(prop, 'venta'))
        .join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const filtroArriendo = document.getElementById('filtroArriendo');
    const ordenArriendo = document.getElementById('ordenArriendo');

    filtroArriendo?.addEventListener('input', renderizarArriendo);
    ordenArriendo?.addEventListener('change', renderizarArriendo);

    const filtroVenta = document.getElementById('filtroVenta');
    const ordenVenta = document.getElementById('ordenVenta');

    filtroVenta?.addEventListener('input', renderizarVenta);
    ordenVenta?.addEventListener('change', renderizarVenta);

    renderizarArriendo();
    renderizarVenta();
});
