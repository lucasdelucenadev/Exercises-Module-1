console.log ("Bem-Vindo a empresa @.com, favor digitar o seu salario para calculo de aumento")

let valor = prompt("Digite o valor do seu salario")
if (valor<281){
var F = valor * (1+0.20).toFixed(2);
console.log(F.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
)}
if (valor<701 & valor>280){
var D = valor * (1+0.15).toFixed(2);
console.log(D.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
)}

if (valor<1501 & valor>700){
var E = valor * (1+0.10).toFixed(2);
console.log(E.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
)}

if (valor>1500){
var G = valor * (1+0.5).toFixed(2);
console.log(G.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
)}