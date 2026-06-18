//Aprendi a comentar

idade = 46;

console.log(`A idade mostrada será: ${idade}`);

idade = 8;

console.log(`Apos a primeira mostra a idade mostrada será: ${idade}`);

//Variavel global
variavelGlobal = 123;

//var = declara variavel e depois pode atribuir novos valores sem a necessidade de declarar o var
var variavelVar;
variavelVar = 10;

//let = declarar variavel da forma atual
let variavelLet;
variavelLet = 20;

//const = constantes no código
const constante = 30;

//variavel global não pode ser referenciada antes da declaração
//var pode
//let e const não podem ser referenciadas antes da inicialização

//tipos de variaveis
/* 
para dizer tipo especifico de tipo de variavel pode usar o "typeof" 
tem os tipos:
string
boolean - somente true ou false
number
simbol

undefined é diferente de NULL

NULL é um objeto
undefined é algo que ainda não foi definido

o tipo simbolo é para passar algum simbolo (ainda não sei usar)

EXTREMAMENTE IMPORTANTE

As variaveis devem ter nomes que digam oque são
Maiusculo e minusculo faz diferença
*/

let numero = 1.3;
let linhaDeTexto = "ó meu deus";
let booleano = false;
let naoSei;
let simbolo = Symbol();

console.log(typeof numero);
console.log(typeof linhaDeTexto);
console.log(typeof booleano);
console.log(typeof naoSei);
console.log(typeof simbolo);