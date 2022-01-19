console.log(
"Bem-Vindo ao jogo de adivinhação, escolha um numero de 0 a 10 para tentar adivinhar o numero que o computador escolheu"
);

let escolha = prompt("escolha de 0 a 10");

var numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

var randomItem = numeros[Math.floor(Math.random() * numeros.length)];

if (esco == randomItem) {
console.log(`Você Acertou!!! o numero do computador é ${randomItem}`);
} else {
console.log(`Você Errou!!! o numero do computador é ${randomItem}`);
}
