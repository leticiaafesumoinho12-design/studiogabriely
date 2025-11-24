// =================== SEU CÓDIGO ORIGINAL ===================

// Índice do slide atual
let slideIndex = 1;

// Variável para controlar o timer automático
let autoSlideTimer;

// Inicializa o carrossel
showSlides(slideIndex);
startAutoSlide();

// Função para avançar/voltar slides manualmente
function plusSlides(n) {
    stopAutoSlide();
    showSlides(slideIndex += n);
    startAutoSlide();
}

// Função para ir para um slide específico (dots)
function currentSlide(n) {
    stopAutoSlide();
    showSlides(slideIndex = n);
    startAutoSlide();
}

// Função principal que exibe os slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Função para iniciar o carrossel automático
function startAutoSlide() {
    autoSlideTimer = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 4000);
}

// Função para parar o carrossel automático
function stopAutoSlide() {
    clearInterval(autoSlideTimer);
}

// Pausa o carrossel quando o mouse está sobre ele
document.querySelector('.slideshow-container').addEventListener('mouseenter', () => {
    stopAutoSlide();
});

// Retoma o carrossel quando o mouse sai
document.querySelector('.slideshow-container').addEventListener('mouseleave', () => {
    startAutoSlide();
});


/// =====================================
// ITENS DA BUSCA (coloque seus links reais aqui)
// =====================================
const itens = [
    { nome: "inicio", icone: "fa-star", link: "index.html" },
    { nome: "Serviços", icone: "fa-briefcase", link: "./pages/servico.html" },
    { nome: "Contato", icone: "fa-envelope", link: "./pages/contatos.html" },
    { nome: "Instagram", icone: "fa-instagram", link: "https://www.instagram.com/gabrielyrochabeauty/" },
    { nome: "WhatsApp", icone: "fa-whatsapp", link: "https://wa.me/5511997326767" },
    { nome: "Sobre ", icone: "fa-user", link: "./pages/sobre.html" },
    { nome: "cursos", icone: "fa-user", link: "./pages/curso.html" },

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
