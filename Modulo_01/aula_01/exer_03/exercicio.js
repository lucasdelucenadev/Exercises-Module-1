//03
var prompt = require('prompt-sync')();

let anos = +prompt('Digite sua idade em anos');
let meses = +prompt('Digite sua idade em meses');
let dias = +prompt('Digite sua idade em dias');

let total = (anos*365+meses*30+dias);


console.log(`Você já viveu. ${anos} anos, ${meses} meses, e ${dias}`);