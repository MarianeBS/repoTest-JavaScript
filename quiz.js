document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
        {
            question: "O que são admoestações?",
            options: ["São as promessas finais do Senhor", "É a autenticidade de cada profecia", "São conselhos, advertências e correções do Senhor", "É a revelação de Jesus Cristo, cuja verdade é a sua essência"],
            correct: "São conselhos, advertências e correções do Senhor"
        },
        {
            question: "O que está escrito em Apocalipse 20:7?",
            options: ["Venho com demora", "Venho sem demora", "Virei em breve", "Venho amanhã"],
            correct: "Venho sem demora"
        },
        {
            question: "Complete: 'O Apocalipse começa com a promessa de __________ para quem lê e termina com a promessa de __________ para quem guarda a profecia deste Livro.'",
            options: ["felicidade/riqueza", "prosperidade/alegria", "justiça/execução", "felicidade/felicidade"],
            correct: "felicidade/felicidade"
        },
        {
            question: "Qual foi a ordem dada pelo anjo de Deus a João?",
            options: ["'Não seles as palavras da profecia deste livro.'", "'Sele as palavras da profecia deste livro.'", "'Guarde as palavras deste livro para que ninguém possa destruí-las.'", "'Leve este livro aos incrédulos para que eles conheçam o Deus vivo.'"],
            correct: "'Não seles as palavras da profecia deste livro.'"
        },
        {
            question: "Qual é o destino do trigo e do joio?",
            options: ["Trigo — Proveito; Joio — Riqueza", "Trigo — Bolos e pães; Joio — Guisados", "Trigo — Proveito; Joio — O fogo eterno", "Trigo — O fogo eterno; Joio — Proveito"],
            correct: "Trigo — Proveito; Joio — O fogo eterno"
        },
        {
            question: "O que Jesus quis dizer ao se revelar como Alfa e Ômega?",
            options: ["Que Ele veio ao mundo primeiro e irá embora por último", "Que Jesus foi o criador do alfabeto grego", "Que Jesus sabe de nosso futuro mesmo que não conheça nosso passado", "Que Jesus é o Senhor do passado, do presente e do futuro"],
            correct: "Que Jesus é o Senhor do passado, do presente e do futuro"
        },
        {
            question: "O que é o 'galardão' mencionado na Bíblia?",
            options: ["O reconhecimento do Senhor em relação as nossas obras", "A justiça de Deus", "Um presente que Deus nos dá na vida terrena", "O perdão que concedemos aos nossos acusadores"],
            correct: "O reconhecimento do Senhor em relação as nossas obras"
        },
        {
            question: "Onde se encontra o  seguinte versículo bíblico: 'Eu sou a raiz e a geração de Davi, a resplandecente estrela da manhã'?",
            options: ["Apocalipse 20:19", "Mateus 21:22", "Hebreus 10:04", "Apocalipse 22:16"],
            correct: "Apocalipse 22:16"
        },
        {
            question: "O fim do Livro traz qual clamor?",
            options: ["Pela morte dos inimigos de Deus", "Pela vingança dos crentes", "Pelo Arrabatamento da Igreja", "Pelo arrependimento de Deus em relação aos seres humanos"],
            correct: "Pelo Arrabatamento da Igreja"
        },
        {
            question: "Complete: 'O desejo do Senhor é que experimentemos, desde agora e para sempre, o seu favor imerecido e a plena ________ com ele.'",
            options: ["Desesperança", "Vingança", "Tranquilidade", "Comunhão"],
            correct: "Comunhão"
        }
           ];

    const quizContainer = document.getElementById('quiz-container');
    const submitBtn = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result');

    // Função para gerar o quiz dinamicamente
    function loadQuiz() {
        quizData.forEach((data, index) => {
            const questionElem = document.createElement('div');
            questionElem.classList.add('mb-6');
            questionElem.innerHTML = `
                <h3 class="text-lg font-semibold mb-2">${index + 1}. ${data.question}</h3>
                ${data.options.map(option => `
                    <div>
                        <input type="radio" name="question${index}" value="${option}" class="mr-2">
                        <label>${option}</label>
                    </div>
                `).join('')}
            `;
            quizContainer.appendChild(questionElem);
        });
    }

    // Função para calcular os resultados
    function calculateResults() {
        let score = 0;
        quizData.forEach((data, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && selectedOption.value === data.correct) {
                score++;
            }
        });
        resultContainer.textContent = `You got ${score} out of ${quizData.length} correct!`;
    }

    // Carregar o quiz assim que a página for carregada
    loadQuiz();

    // Adicionar evento de clique ao botão para calcular os resultados
    submitBtn.addEventListener('click', calculateResults);
});


