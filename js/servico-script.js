const itens = [
    { nome: "Experiência Premium", icone: "fa-star", link: "index.html" },
    { nome: "Serviços", icone: "fa-briefcase", link: "/pages/servico.html" },
    { nome: "Contato", icone: "fa-envelope", link: "/pages/contatos.html" },
    { nome: "Instagram", icone: "fa-instagram", link: "https://www.instagram.com/gabrielyrochabeauty/" },
    { nome: "WhatsApp", icone: "fa-whatsapp", link: "https://wa.me/5511997326767" },
    { nome: "Sobre Mim", icone: "fa-user", link: "/pages/sobre.html" },
    { nome: "Cursos", icone: "fa-graduation-cap", link: "/pages/cursosv1.html" },
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
