/// =====================================
// ITENS DA BUSCA (coloque seus links reais aqui)
// =====================================
const itens = [
    { nome: "inicio", icone: "fa-star", link: "../index.html" },
    { nome: "Serviços", icone: "fa-briefcase", link: "./servico.html" },
    { nome: "Contato", icone: "fa-envelope", link: "./contatos.html" },
    { nome: "Instagram", icone: "fa-instagram", link: "https://www.instagram.com/gabrielyrochabeauty/" },
    { nome: "WhatsApp", icone: "fa-whatsapp", link: "https://wa.me/5511997326767" },
    { nome: "Sobre ", icone: "fa-user", link: "./sobre.html" },
    { nome: "cursos", icone: "fa-user", link: "./curso.html" },

];

// Criar caixa de resultados
let resultsBox = document.getElementById("search-results");

function similaridade(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    let pontos = 0;
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] === b[i]) pontos++;
    }
    return pontos / b.length;
}

// Função da busca
function buscar() {
    const texto = document.querySelector(".search-box input").value.trim().toLowerCase();
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
    } else {
        resultsBox.innerHTML = "<p style='opacity:0.6;'>Nenhum resultado encontrado...</p>";
        resultsBox.style.display = "block";
    }
}

// Botão
document.querySelector(".search-box button").addEventListener("click", buscar);

// Enter
document.querySelector(".search-box input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") buscar();
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
    { nome: "Sobrancelhas", link: "./servico.html", icon: "fa-solid fa-eye" },
    { nome: "Design", link: "./servico.html", icon: "fa-solid fa-wand-magic-sparkles" },
    { nome: "Curso de Sobrancelhas", link: "./curso.html", icon: "fa-solid fa-graduation-cap" },
    { nome: "Curso de extensão de cilios", link: "./curso.html", icon: "fa-solid fa-spa" },
    { nome: "Agendar", link: "./contatos.html", icon: "fa-solid fa-calendar-check" },
    { nome: "Sobre mim", link: "./sobre.html", icon: "fa-solid fa-user" },
    { nome: "Inicio", link: "../index.html", icon: "fa-solid fa-house" },
    { nome: "Instagram", link: "https://www.instagram.com/gabrielyrochabeauty/", icon: "fa-brands fa-instagram" },
    { nome: "WhatsApp", link: "https://wa.me/5511997326767", icon: "fa-brands fa-whatsapp" }
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
