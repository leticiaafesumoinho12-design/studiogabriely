// Índice do slide atual
let slideIndex = 1;

// Variável para controlar o timer automático
let autoSlideTimer;

// Inicializa o carrossel
showSlides(slideIndex);
startAutoSlide();

// Função para avançar/voltar slides manualmente
function plusSlides(n) {
    // Para o timer automático quando o usuário interage
    stopAutoSlide();
    showSlides(slideIndex += n);
    // Reinicia o timer automático após 5 segundos de inatividade
    startAutoSlide();
}

// Função para ir para um slide específico (dots)
function currentSlide(n) {
    // Para o timer automático quando o usuário interage
    stopAutoSlide();
    showSlides(slideIndex = n);
    // Reinicia o timer automático após 5 segundos de inatividade
    startAutoSlide();
}

// Função principal que exibe os slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Se passar do último slide, volta para o primeiro
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Se voltar antes do primeiro, vai para o último
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Esconde todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove a classe "active" de todos os dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Mostra o slide atual
    slides[slideIndex - 1].style.display = "block";

    // Adiciona a classe "active" ao dot correspondente
    dots[slideIndex - 1].className += " active";
}

// Função para iniciar o carrossel automático
function startAutoSlide() {
    autoSlideTimer = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 4000); // Muda a cada 2 segundos
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




