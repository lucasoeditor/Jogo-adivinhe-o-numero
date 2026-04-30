/* 1 pegar o valor digitado pelo usuario
   2 validar se é um numero válido (1-100)
   3 verificar se é maior, menor ou se o usuario acertou o número
   4 diminuir 1 na tentativa
   5 exibir mensagem dizendo a dica
   6 se a tentativa chegar a zero, resetar
   */

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

let random = randomNumber();

const elemento = (id) => document.getElementById(id);

const valorElemento = (valor) => elemento(valor).value;

const limpar = () => (elemento("valor").value = "");

let tentativas = 10;

function verificacao() {
    const valor = parseInt(valorElemento("valor"));
    const numeroAleatorio = random;

    if (valor == numeroAleatorio) {
        elemento("resultado").textContent = "Você acertou!";
        elemento("dica").textContent = "";
        elemento("chutar").disabled = true;
        setTimeout(resetarJogo, 3000);
    } else if (valor < numeroAleatorio) {
        elemento("dica").textContent = `O número secreto é maior`;
    } else {
        elemento("dica").textContent = `O número secreto é menor`;
    }
}

function resetarJogo() {
    tentativas = 10;
    random = randomNumber();
    elemento("tentativas").textContent = `${tentativas} tentativas restantes`;
    elemento("dica").textContent = "";
    elemento("resultado").textContent = "";
    limpar();
    elemento("chutar").disabled = false;
}

function diminuirTentativas() {
    while (tentativas > 0) {
        tentativas--;
        break;
    }

    elemento("tentativas").textContent = `${tentativas} tentativas restantes`;

    if (tentativas === 0) {
        elemento("resultado").textContent = "Você perdeu o jogo";
        elemento("dica").textContent = "";
        setTimeout(resetarJogo, 2000);
    }
}

function jogo() {
    valor = valorElemento("valor");
    if (valor < 1 || valor > 100) {
        elemento("dica").textContent = "Insira um número válido (1-100)";
        return;
    }

    verificacao();
    diminuirTentativas();
    limpar();
}
