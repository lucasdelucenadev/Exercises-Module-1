let bemvindo = "Bem-Vindo ao caixa eletronico da Uni-System";
console.log(bemvindo);
let saque = parseInt(
  prompt("Digite o valor do saque(Valor minimo R$10 e valor maximo R$600")
);
let totalsaque = saque.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
});
console.clear();
if (saque >= 10 && saque <= 600) {
  let notascem = Math.floor(saque / 100);
  saque = saque % 100;
  let notascinquenta = Math.floor(saque / 50);
  saque = saque % 50;
  let notasdez = Math.floor(saque / 10);
  saque = saque % 10;
  let notascinco = Math.floor(saque / 5);
  saque = saque % 5;
  let notasum = Math.floor(saque / 1);
  saque = saque % 1;
  if (notascem != 0) {
    console.log(`Você ira receber ${notascem} notas de cem reais.`);
  }
  if (notascinquenta != 0) {
    console.log(`Você ira receber ${notascinquenta} notas de cinquenta reais.`);
  }
  if (notasdez != 0) {
    console.log(`Você ira receber ${notasdez} notas de dez reais.`);
  }
  if (notascinco != 0) {
    console.log(`Você ira receber ${notascinco} notas de cinco reais.`);
  }
  if (notasum != 0) {
    console.log(`Você ira receber ${notasum} notas de um real.`);
  }
  console.log(`Totalizando ${totalsaque}`);
} else {
  console.log("Valor não disponivel para saque.");
}
