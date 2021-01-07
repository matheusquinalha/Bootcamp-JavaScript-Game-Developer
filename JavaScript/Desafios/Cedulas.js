let valor = parseInt(gets());
let cem = 0;
let cinquenta = 0;
let vinte = 0;
let dez = 0;
let cinco = 0;
let dois = 0;
let um = 0;

console.log(valor);
cem = parseInt(valor/100);
valor = (valor % 100);
cinquenta = parseInt(valor/50);
valor = (valor % 50);
vinte = parseInt(valor/20);
valor = (valor % 20);
dez = parseInt(valor/10);
valor = (valor % 10);
cinco = parseInt(valor/5);
valor = (valor % 5);
dois = parseInt(valor/2);
valor = (valor % 2);
um = parseInt(valor/1);
valor = (valor % 1);


console.log(cem + ' nota(s) de R$ 100,00');
console.log(cinquenta + ' nota(s) de R$ 50,00')
console.log(vinte + ' nota(s) de R$ 20,00');
console.log(dez + ' nota(s) de R$ 10,00');
console.log(cinco + ' nota(s) de R$ 5,00');
console.log(dois + ' nota(s) de R$ 2,00');
console.log(um + ' nota(s) de R$ 1,00');