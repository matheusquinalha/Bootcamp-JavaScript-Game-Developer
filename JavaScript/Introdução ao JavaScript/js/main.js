var nome = "Matheus Quinalha";
var idade = 23;
var idade2 = 10;
var frase = "Japão é o Melhor Time do Mundo";

//Alerta ao Carregar a Pagina
alert(nome + " tem " + idade + " anos!");

//Aparecer no CONSOLE, ao inspecionar elemento da página
console.log(nome); 
console.log(idade + idade2);

//O Replace troca a informação, no caso, de Japão para Brasil
console.log(frase.replace("Japão", "Brasil")); 
alert(frase.replace("Japão","Brasil")) 

//UPPERCASE ou LOWERCASE
console.log(frase.toUpperCase());

//ARRAY
var lista = ["Maçã","Pera","Laranja"];
lista.pop(); //Retira o último item da lista
lista.push("Uva"); //Adiciona um último item na lista
console.log(lista);
console.log(lista[2]);
alert(lista[1]);
console.log(lista.length); //Tamanho da Lista
console.log(lista.reverse()); //Troca a Ordem da Lista
console.log(lista.toString()[0]); //Transforma a lista toda em String, e vai trazer a 1ª letra
console.log(lista.join(" - ")); //Troca a forma de separar os itens da lista. No caso, vai ser um simples traço

//Dicionário
var fruta = {nome:"Maçã", cor: "vermelha"} //Se comporta de forma similar ao Objeto JSON
console.log(fruta.nome); //Traz somente a característica "Nome" da variavel "Fruta"

var frutas = [{nome:"Maçã", cor: "vermelha"}, {nome:"Banana", cor: "Amarela"}] //Para se adicionar varios itens a esse Dicionário, é necessário agrupar todos por Chaves "[]", e separar por Virgula os itens 
console.log(frutas[1].nome);

//Condicionais
var idade = prompt("Qual sua Idade?"); //Exibe um campo para preenchimento, para identificar a idade do usuário
if (idade >= 18){
    alert("Maior de Idade");
}
else{
    alert("Menor de Idade");
};

//Repetição
var count = 0;
while (count <= 5){
    console.log(count);
    count ++;
};

console.log("----------------")

var contador;
for (contador = 0; contador<=5;contador++){
    console.log(contador);
}

//Data
var d = new Date(); //Traz todo a informação da Data e Hora
alert(d.getDay());
alert(d.getHours() + "h:" + d.getMinutes() + "min");

//Funções
function soma(n1,n2){
    return n1 + n2;
};
alert(soma(5,10));

function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome);
};
alert(setReplace("Vai Japão","Japão","Brasil"));


var idade2 = prompt("Qual sua Nova Idade?");
validarIdade(idade2);

var validar
function validarIdade(idade2){
    if (idade2 > 18){
        validar = true;
    }
    else{
        validar = false;
    }
}
console.log(validar);

/*
function botao(){
    alert("Obrigado por Clicar!");
}
*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar!!</b>";
}

//Redirecionar para uma Nova Pagina
function redirecionar(){
    window.open("https://www.google.com.br"); //Abre em uma nova Guia, ao clicar em OBRIGADO POR CLICAR
    window.location.href = "https://www.google.com.br"; //Abre na mesma Guia, ao clicar em OBRIGADO POR CLICAR
}

//Mouse

function trocar(elemento){
    //Comentado, pois a linha e baixo é como deverá ser feito caso exista mais de 01 elemento utilizando a mesma function
    //document.getElementById("passaromouse").innerHTML = "Obrigado por passar o Mouse!"; 
    elemento.innerHTML = "Obrigado por passar o Mouse!";
}


function voltar(elemento){
    //Comentado, pois a linha e baixo é como deverá ser feito caso exista mais de 01 elemento utilizando a mesma function
    //document.getElementById("passaromouse").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o Mouse Aqui!";
}

//Load

function load(){
    alert("Pagina Carregada!");
}

//Change

function mudar(elemento){
    console.log(elemento.value);
}