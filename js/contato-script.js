
document.addEventListener('DOMContentLoaded', function () {
    const selectTipoContato = document.getElementById('tipo-contato');
    const grupoHorario = document.getElementById('grupo-horario');
    const grupoData = document.getElementById('grupo-data');
    const inputHorario = document.getElementById('horario');
    const inputData = document.getElementById('data');


    function atualizarCamposAgendamento() {
        if (selectTipoContato.value === 'curso') {
            // Esconde os campos e remove a obrigatoriedade
            grupoHorario.style.display = 'none';
            grupoData.style.display = 'none';

            inputHorario.removeAttribute('required');
            inputData.removeAttribute('required');

            inputHorario.value = '';
            inputData.value = '';
        } else if (selectTipoContato.value === 'agendamento') {
            // Mostra os campos e volta a exigir o preenchimento
            grupoHorario.style.display = '';
            grupoData.style.display = '';

            inputHorario.setAttribute('required', 'required');
            inputData.setAttribute('required', 'required');
        } else {
            // Estado inicial (opção "Selecione uma opção")
            grupoHorario.style.display = '';
            grupoData.style.display = '';

            inputHorario.setAttribute('required', 'required');
            inputData.setAttribute('required', 'required');
        }
    }

    // Atualiza ao mudar a seleção
    selectTipoContato.addEventListener('change', atualizarCamposAgendamento);

    // Garante o estado correto ao carregar a página
    atualizarCamposAgendamento();
});





/// =====================================
// ITENS DA BUSCA (coloque seus links reais aqui)
// =====================================
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
// ===== FAQ MODAL =====
function toggleFAQ() {
    const modal = document.getElementById("modal");

    if (modal) {
        modal.classList.toggle("fac-show");
    }
}
// Botão
document.querySelector(".search-box button").addEventListener("click", buscar);

// Enter
document.querySelector(".search-box input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") buscar();
});
// Fechar ao clicar fora do modal
document.addEventListener('click', function (event) {
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
document.addEventListener('keydown', function (event) {
    const modal = document.getElementById("modal");

    if (event.key === "Escape" && modal && modal.classList.contains("fac-show")) {
        modal.classList.remove("fac-show");
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

const itens = [
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



document.addEventListener('DOMContentLoaded', function () {
    const selectTipoContato = document.getElementById('tipo-contato');
    const grupoPrimeiraSessao = document.getElementById('grupo-primeira-sessao');

    function atualizarSessao() {
        if (selectTipoContato.value === 'curso') {
            grupoPrimeiraSessao.style.display = 'none';

            // remove necessidade de escolher sim/não
            document.getElementById('sessao-sim').removeAttribute('required');
            document.getElementById('sessao-nao').removeAttribute('required');
        } else {
            grupoPrimeiraSessao.style.display = '';

            // volta a exigir
            document.getElementById('sessao-sim').setAttribute('required', 'required');
            document.getElementById('sessao-nao').setAttribute('required', 'required');
        }
    }

    selectTipoContato.addEventListener('change', atualizarSessao);
    atualizarSessao(); // estado inicial
});


document.addEventListener('DOMContentLoaded', function () {
    const telefoneInput = document.getElementById('telefone');

    telefoneInput.addEventListener('input', function () {
        let valor = telefoneInput.value.replace(/\D/g, ""); // remove tudo que não é número

        // limita a 11 números (DDD + 9 dígitos)
        if (valor.length > 11) valor = valor.slice(0, 11);

        // aplica a máscara
        if (valor.length > 6) {
            telefoneInput.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
        }
        else if (valor.length > 2) {
            telefoneInput.value = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
        }
        else if (valor.length > 0) {
            telefoneInput.value = `(${valor}`;
        }
        else {
            telefoneInput.value = "";
        }
    });
});
