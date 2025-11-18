// =================== NOVO CARROSSEL (INDEPENDENTE) ===================

// Índice do slide atual do segundo carrossel
let slideIndex2 = 1;

// Timer para o carrossel automático
let autoSlideTimer2;

// Inicializa o segundo carrossel
showSlides2(slideIndex2);
startAutoSlide2();

// Avançar/voltar manualmente
function plusSlides2(n) {
    stopAutoSlide2();
    showSlides2(slideIndex2 += n);
    startAutoSlide2();
}

// Ir para um slide específico (dots)
function currentSlide2(n) {
    stopAutoSlide2();
    showSlides2(slideIndex2 = n);
    startAutoSlide2();
}

// Função principal que mostra os slides
function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2");
    let dots2 = document.getElementsByClassName("dot2");

    if (slides2.length === 0) return; // EVITA ERRO SE NÃO TIVER SLIDES

    if (n > slides2.length) slideIndex2 = 1;
    if (n < 1) slideIndex2 = slides2.length;

    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }

    // Só mexe nos dots SE eles existirem
    if (dots2.length > 0) {
        for (i = 0; i < dots2.length; i++) {
            dots2[i].className = dots2[i].className.replace(" active", "");
        }
        dots2[slideIndex2 - 1].className += " active";
    }

    slides2[slideIndex2 - 1].style.display = "block";
}

// Inicia o carrossel automático
function startAutoSlide2() {
    autoSlideTimer2 = setInterval(() => {
        slideIndex2++;
        showSlides2(slideIndex2);
    }, 4000);
}

// Para o carrossel automático
function stopAutoSlide2() {
    clearInterval(autoSlideTimer2);
}

// Pausa quando o mouse passa por cima
document.querySelector('.slideshow-container2').addEventListener('mouseenter', () => {
    stopAutoSlide2();
});

// Retoma quando o mouse sai
document.querySelector('.slideshow-container2').addEventListener('mouseleave', () => {
    startAutoSlide2();
});





// =================== BUSCA ===================

// Itens da busca
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
// =================== CARDS ===================
function toggleCard() {
  const card = document.getElementById("meuCard");
  card.classList.toggle("expandido");
}
// ===== FAQ MODAL =====
function toggleFAQ() {
    const modal = document.getElementById("modal");
    
    if (modal) {
        modal.classList.toggle("fac-show");
    }
}

// Fechar ao clicar fora do modal
document.addEventListener('click', function(event) {
    const modal = document.getElementById("modal");
    const button = document.querySelector(".faq-float");
    
    // Verifica se o clique foi fora do modal e do botão
    if (modal && button) {
        const isClickInsideModal = modal.contains(event.target);
        const isClickOnButton = button.contains(event.target);
        
        if (!isClickInsideModal && !isClickOnButton && modal.classList.contains("fac-show")) {
            modal.classList.remove("fac-show");
        }
    }
});

// Fechar com a tecla ESC
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById("modal");
    
    if (event.key === "Escape" && modal && modal.classList.contains("fac-show")) {
        modal.classList.remove("fac-show");
    }
});