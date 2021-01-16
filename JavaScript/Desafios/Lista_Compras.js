const nCasos = parseInt(gets());
const nCasos = parseInt(inputs[0]); //para uso na DIO
let saida = [];

for (let i = 0; i < nCasos; i++) {
  let comprasUnicas = new Set(gets().split(' ').sort()); //para uso na DIO
  saida[i] = Array.from(comprasUnicas).join(' ');
}

saida.map((lista) => console.log(lista))

/*
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let totalItems = gets();

for (var i = 0; i < totalItems; i++) {
  let itens = gets();
  let itensOrdenados = itens.split(" ").sort();
  let itensUnicos = itensOrdenados; // Implemente aqui a lógica para ter os itens unicos
  let resposta = [...itensUnicos].join(" ");
  console.log(resposta);
}
*/