let entrada = gets();
let totalItems = [];
let pares = [];
let impares = [];

for (let i = 0; i < entrada; i++) {
  totalItems[i] = gets();
  if(totalItems[i] % 2 === 0){
  pares.push(totalItems[i])
}else{
  impares.push(totalItems[i])
}}

let novoPar = pares.sort((a, b) => a - b);
let novoimpar = impares.sort((a, b) => b - a);

let juntos = novoPar.concat(novoimpar)
for (const value of juntos) {
  console.log(value)};