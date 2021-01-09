//Function Normal
var sumOld = function(a,b){
    return a + b;
};


//Arrow Function
// =>
//São funções anônimas, ou seja, só funciona se atribuir à uma variavel ou parametro

//modo 1
var sum = (a,b) => a + b;
console.log(sum (5, 5));

//modo 2
var sum = (a,b) => {
  var x = 10;
  if (a > b){
    a ++;
  } 
};
console.log(a);

//Objetos Literais
var obj = {
    //declara propriedade e métodos aqui
    prop1 : 'Digital Innovation One'
}

//DETALHE -> CASO SEJA ATRIBUIDO UMA VARIAVEL COM O MESMO NOME DA PROPRIEDADE, PODEMOS DECLARAR APENAS 1 VEZ (SHORT RANGE)
//EXEMPLO
var obj2 = {
    prop1
};



//Objeto liberal sendo declarado em Arrow Function
var createObj = () => ({teste: 123});


//Função Construtora
    //OLD
    function Car(){
        this.foo = 'bar';
    };


//Default Function
function multiply (a,b = 1){ //esse b = 1 é uma segurança, caso o programador deixe de atribuir um valor a variavel B
    return a * b;
}

//lazy evaluation -> É uma forma de fazer a função sempre gerar um valor aleatório, sempre que o valor da variavel B deixar de ser atribuida
function randomNumber(){
    return Math.random() * 10;
}

function multiply (a,b = randomNumber()){
    return a * b;
}
console.log(multiply(5));

//REST OPERATOR (...) => Pega todos os valores de uma função, e transforma em um Array

function sum (...args){
    return args.reduce((acc,value) => acc + value, 0);
}
console.log(sum(5,5,5,2,3,));

    //Usando Arrow Function
    const sum = (a,b, ...rest) => { //Ele pega todos os itens do argumento
        console.log(a,b,rest);
    }
    console.log(sum(5,5,5,2,3,));

//SPREAD OPERETOR (...) => Pega todos os itens do Array, e transforma em parâmetros
//strings, arrays, objetos literais e objetos iteraveis

const str = 'Digital Innovation One';

function LogArgs(...arg){
    console.log(args);
}
LogArgs(...str) //Vai separar cada Carater da String passada acima


//Destructuring Assignment

//ARRAY
    var arr = ['Apple', 'Banana', 'Orange',['Tomato']];

    //OLD
        var apple = arr[0];
        var banana = arr[1];
        var orange = arr[2];
        var orange = arr[3][0];

    //NEW
    var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange',['Tomato']]; //Ele esta "distruindo" o Array, criando uma variavel para cada elemento
    console.log(apple, apple2);
    console.log (tomato, tomato2);

 //OBJETO
    var obj = {
        name: 'Matheus'
    }

    var {name} = obj; //pegar o objeto, "destruir" ele, criando a propriedade name e pegando o que estiver dentro de OBJ
    console.log(obj);

//Symbols e Iterators

//ITERATORS => São interadores visuais
//SYMBOLS => Servem como forma de itentificar algo, principalmente usado em debugs. Ele é unico, e mesmo que contenha o mesmo valor, um nunca será igual ao outro
const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

console.log(uniqueId === uniqueId2); //Esse chamado irá retornar FALSE

//Well Know Symbols =>Adiciona Propriedades

Symbol.iterator
Symbol.split
Symbol.toStringTag

const obj = { 
    [Symbol.iterator](){ //Torna ele Iterator

    }
}

//Generators -> Funções com pausas. Vai andando a cada .next() apenas

function* hello (){
    console.log('Hello');
    console.log('From');
    console.log('Functions!');
}
const it = hello();
console.log(it.next());//Traz o Hello
console.log(it.next());//Traz o From
console.log(it.next());//Traz o Functions!
console.log(it.next());//Indica que finalizou

//callback

    //promises
    const doSomethingPromise = new Promise((resolved,reject) => {
        setTimeout(function(){
            //did something
            resolve ('Fisrt Data');
        },1000);
    })

    
    const doOtherSomethingPromise = new Promise((resolved,reject) => {
        setTimeout(function(){
            //did something
            resolve ('Second Data');
        },1000);
    })

//Pending -> Pendente
//Fulfield -> Executada com sucesso
//Reject -> Rejeitada

//FETCH

fecth('/data.json')
.then(responseStream => responseStream.json())
.then(data => {
    console.log(data);
})
.catch (err => {
    console.log('Erro: ',err);
})

//ES7 - Async / Await

const simpleFunc = async() =>{
    return 12345;
}
console.log(simpleFunc());

//EventEmitter

const EventEmitter = require('events');
const emitter = new EventEmitter ();
emitter.on('Usser Logged ', data =>{
    console.log(data);
});

emitter.emit('User Logged ', {user: 'Matheus Quinalha'});

//************************************************************************/
