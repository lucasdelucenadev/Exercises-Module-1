var prompt = require('prompt-sync')();
//02
let nome1 = prompt('Digite o nome da peça');
let numero1 = +prompt('Digite o número de peças');
let valor1 = +prompt('Digite o valor unitário das peças');

let nome2 = prompt('Digite o nome da peça');
let numero2 = +prompt('Digite o número de peças');
let valor2 = prompt('Digite o valor unitário das peças');

console.log(`Você está levando ${nome1} e ${nome2} Você adicionou em seu carrinho ${numero1 + numero2} de peças. O valor total da sua compra deu R$${(numero1*valor1) + (numero2*valor2)}`)