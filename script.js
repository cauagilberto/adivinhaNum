/*
    - gerar um numero aleatório entre 1 e 100 e armazenar em uma variável
    - definir um numero maximo de tentativas (ex: 10)
    - inicializar uma variável para contar as tentativas feitas
    - capturar o valor inserido pelo jogador
    - validar se o paplite é um número válido entre 1 e 100
    - comparar o palpite com o numero gerado
        - se o palpite for menor, exibir "O número secreto é maior"
        - se o palpite for maior, exibir "O número secreto é menor"
        - se o palpite for igual, exibir "Você acertou!"
    - decrementar o número de tentativas restantes
    - exibir o número de tentativas restantes
    - se o jogador esgotar as tentativas sem acertar, exibir "Game Over! O número secreto era X"
*/

// Gerar um número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Definir o número máximo de tentativas
const maxTentativas = 10;

// Inicializar a variável para contar as tentativas feitas
let tentativasFeitas = 0;

function verificarPalpite() {
    // Capturar o valor inserido pelo jogador"
    const palpite = parseInt(document.getElementById('palpite').value);

    // Validar se o palpite é um número válido entre 1 e 100
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        document.getElementById('feedback').textContent = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    // Incrementar o número de tentativas feitas
    tentativasFeitas++;

    // Comparar o palpite com o número gerado
    if (palpite< numeroSecreto) {
        document.getElementById('feedback'). textContent = ("O número secreto é maior.");
    } else if (palpite> numeroSecreto) {
        document.getElementById('feedback'). textContent = ("O número secreto é menor.");
    } else {
        document.getElementById('feedback'). textContent = ("Você acertou!");
        return;
    }

    // Exibir o número de tentativas restantes
    const tentativasRestantes = maxTentativas - tentativasFeitas;
    document.getElementById('tentativas').textContent = `Tentativas restantes: ${tentativasRestantes}`;

    // Verificar se o jogador esgotou as tentativas
    if (tentativasFeitas >= maxTentativas) {
        document.getElementById('feedback').textContent = `Game Over! O número secreto era ${numeroSecreto}.`;
    }
}
