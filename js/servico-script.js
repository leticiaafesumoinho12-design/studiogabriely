const itens = [
    { nome: "inicio", icone: "fa-star", link: "../index.html" },
    { nome: "Serviços", icone: "fa-briefcase", link: "./servico.html" },
    { nome: "Contato", icone: "fa-envelope", link: "./contatos.html" },
    { nome: "Instagram", icone: "fa-instagram", link: "https://www.instagram.com/gabrielyrochabeauty/" },
    { nome: "WhatsApp", icone: "fa-whatsapp", link: "https://wa.me/5511997326767" },
    { nome: "Sobre ", icone: "fa-user", link: "./sobre.html" },
    { nome: "Cursos", icone: "fa-graduation-cap", link: "./curso.html" },
];

let resultsBox = document.getElementById("search-results");
let input = document.querySelector(".search-box input");
let button = document.querySelector(".search-box button");

function similaridade(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    let pontos = 0;
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] === b[i]) pontos++;
    }
    return pontos / b.length;
}

function buscar() {
    const texto = input.value.trim().toLowerCase();
    resultsBox.innerHTML = "";

    if (texto === "") {
        resultsBox.style.display = "none";
        return;
    }

    const resultados = itens.filter(item =>
        item.nome.toLowerCase().includes(texto) ||
        similaridade(texto, item.nome) > 0.3
    );

    if (resultados.length > 0) {
        resultados.forEach(item => {
            let div = document.createElement("div");
            div.classList.add("item");

            div.innerHTML = `
                <i class="fa ${item.icone}"></i>
                <span>${item.nome}</span>
            `;

            div.addEventListener("click", () => {
                window.location.href = item.link;
            });

            resultsBox.appendChild(div);
        });

        resultsBox.style.display = "block";

        if (window.innerWidth < 600) {
            resultsBox.scrollIntoView({ behavior: "smooth" });
        }

    } else {
        resultsBox.innerHTML = "<p style='opacity:0.6;'>Nenhum resultado encontrado...</p>";
        resultsBox.style.display = "block";
    }
}

button.addEventListener("click", buscar);
input.addEventListener("keydown", (e) => { if (e.key === "Enter") buscar(); });

let delay;
input.addEventListener("input", () => {
    clearTimeout(delay);
    delay = setTimeout(buscar, 250);
});

document.addEventListener("click", (e) => {
    if (!document.querySelector(".search-box").contains(e.target)) {
        resultsBox.style.display = "none";
    }
});

input.addEventListener("focus", () => {
    if (window.innerWidth < 600) {
        setTimeout(() => {
            input.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
    }
});
// ================================
// 🌸 BOTÃO HAMBÚRGUER + MENU MOBILE
// ================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // animação do X
    navMenu.classList.toggle('active');   // abre o menu
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


// ================================
// 🌸 SISTEMA DE BUSCA
// ================================
const searchInput = document.querySelector('.search-box input');
const searchResults = document.getElementById('search-results');

const items = [
    { nome: "Sobrancelhas", link: "./pages/servico.html", icon: "fa-eye" },
    { nome: "Design", link: "./pages/servico.html", icon: "fa-star" },
    { nome: "Curso de Sobrancelhas", link: "./pages/curso.html", icon: "fa-book" },
    { nome: "Agendar", link: "./pages/contatos.html", icon: "fa-calendar" },
    { nome: "Sobre mim", link: "./pages/sobre.html", icon: "fa-user" }
];

// Mostrar os resultados
searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase().trim();

    if (searchText === "") {
        searchResults.style.display = "none";
        return;
    }

    const resultadosFiltrados = items.filter(item =>
        item.nome.toLowerCase().includes(searchText)
    );

    if (resultadosFiltrados.length === 0) {
        searchResults.innerHTML = `<p style="padding:10px;">Nenhum resultado encontrado...</p>`;
    } else {
        searchResults.innerHTML = resultadosFiltrados.map(item => `
            <div class="item" onclick="window.location.href='${item.link}'">
                <i class="fa ${item.icon}"></i>
                <span>${item.nome}</span>
            </div>
        `).join('');
    }

    searchResults.style.display = "block";
});

// Ocultar resultados ao clicar fora
document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-box")) {
        searchResults.style.display = "none";
    }
});
