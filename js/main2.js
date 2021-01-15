//comentário de linha

/* comentário em bloco */

/** variáveis strings e concatenação **/

var nome = "Diogo Barbosa";
var idade = 27;

alert(nome + " tem " + idade + " anos!");

console.log(nome + " tem " + idade + " anos!");

//console.log(nome.toLowerCase());

//console.log(nome.toUpperCase());

//console.log(nome.replace("Barbosa", "Barros"));



/** operações aritméticas **/

var num1 = 8;
var num2 = 2;

console.log("adição: " + (num1 + num2));
console.log("subtração: " + (num1 - num2));
console.log("multiplicação: " + (num1 * num2));
console.log("divisão: " + (num1 / num2));



/** Array */

var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));


/** Dicionário */

var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
//console.log(frutas[0].nome);
//console.log(frutas[0].cor);

var fruta = {nome:"maça" , cor:"vermelha"}
//console.log(fruta.nome);
//console.log(fruta.cor);
console.log(fruta);

