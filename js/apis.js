const BASE_URL = "https://api.sampleapis.com/futurama";

const charactersContainer = document.querySelector("#charactersContainer");
const planetsContainer = document.querySelector("#planetsContainer");
const episodesContainer = document.querySelector("#episodesContainer");
const quotesContainer = document.querySelector("#quotesContainer");
const refreshBtn = document.querySelector("#refreshBtn");

async function fetchData(endpoint) {
    try {
        const res = await fetch(`${BASE_URL}${endpoint}`);
        if (!res.ok) throw new Error("Error en la API");
        return res.json();
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        return [];
    }
}

async function renderCharacters() {
    charactersContainer.innerHTML = '<div class="empty">Cargando personajes...</div>';
    const data = await fetchData("/characters");

    if (!data || data.length === 0) {
        charactersContainer.innerHTML = '<div class="empty">No se encontraron personajes.</div>';
        return;
    }

    charactersContainer.innerHTML = data.slice(0, 8).map(character => `
        <div class="card">
            <img src="${character.image || 'https://via.placeholder.com/300x220'}" 
                 alt="${character.name || 'Personaje'}"
                 onerror="this.src='https://via.placeholder.com/300x220?text=No+Image'">
            <div class="card-body">
                <h3>${character.name || "Sin nombre"}</h3>
                <p><strong>Especie:</strong> ${character.species || "Desconocida"}</p>
                <p><strong>Ocupación:</strong> ${character.occupation || "No disponible"}</p>
                <p><strong>Edad:</strong> ${character.age || "N/A"}</p>
            </div>
        </div>
    `).join("");
}

async function renderPlanets() {
    planetsContainer.innerHTML = '<div class="empty">Cargando planetas...</div>';
    const data = await fetchData("/planets");

    if (!data || data.length === 0) {
        planetsContainer.innerHTML = '<div class="empty">No se encontraron planetas.</div>';
        return;
    }

    planetsContainer.innerHTML = data.slice(0, 6).map(planet => `
        <div class="card">
            <img src="${planet.image || 'https://via.placeholder.com/300x220'}" 
                 alt="${planet.name || 'Planeta'}"
                 onerror="this.src='https://via.placeholder.com/300x220?text=No+Image'">
            <div class="card-body">
                <h3>${planet.name || "Sin nombre"}</h3>
                <p>${planet.description || "Sin descripción"}</p>
            </div>
        </div>
    `).join("");
}

async function renderEpisodes() {
    episodesContainer.innerHTML = '<div class="empty">Cargando episodios...</div>';
    const data = await fetchData("/episodes");

    if (!data || data.length === 0) {
        episodesContainer.innerHTML = '<div class="empty">No se encontraron episodios.</div>';
        return;
    }

    episodesContainer.innerHTML = data.slice(0, 6).map(episode => `
        <div class="card">
            <div class="card-body">
                <h3>${episode.title || "Sin título"}</h3>
                <p><strong>Temporada:</strong> ${episode.season || "N/A"}</p>
                <p><strong>Episodio:</strong> ${episode.number || "N/A"}</p>
                <p><strong>Año:</strong> ${episode.year || "N/A"}</p>
                <p>${episode.description || "Sin descripción"}</p>
            </div>
        </div>
    `).join("");
}

async function renderQuotes() {
    quotesContainer.innerHTML = '<div class="empty">Cargando frases...</div>';
    const data = await fetchData("/quotes");

    if (!data || data.length === 0) {
        quotesContainer.innerHTML = '<div class="empty">No se encontraron frases.</div>';
        return;
    }

    quotesContainer.innerHTML = data.slice(0, 8).map(quote => `
        <div class="quote-card">
            <p class="quote-text">"${quote.quote || "Sin frase"}"</p>
            <p class="quote-author">— ${quote.character || "Desconocido"}</p>
        </div>
    `).join("");
}

async function loadAll() {
    await Promise.all([
        renderCharacters(),
        renderPlanets(),
        renderEpisodes(),
        renderQuotes()
    ]);
}

refreshBtn.addEventListener("click", () => {
    refreshBtn.style.transform = "rotate(360deg)";
    loadAll();
    setTimeout(() => {
        refreshBtn.style.transform = "rotate(0deg)";
    }, 1000);
});

document.addEventListener("DOMContentLoaded", loadAll);
