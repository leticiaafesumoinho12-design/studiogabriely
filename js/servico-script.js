// ================================
//  LISTA DE ITENS PARA BUSCA
// ================================
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

let resultsBox = document.getElementById("search-results");
let input = document.querySelector(".search-box input");
let button = document.querySelector(".search-box button");


// ================================
//  FUNÇÃO DE SIMILARIDADE
// ================================
function similaridade(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    let pontos = 0;
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] === b[i]) pontos++;
    }
    return pontos / b.length;
}


// ================================
//  FUNÇÃO DE BUSCA
// ================================
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


// ================================
// EVENTOS DA BUSCA
// ================================
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
// BOTÃO HAMBÚRGUER + MENU MOBILE
// ================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fecha ao clicar em um link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});
