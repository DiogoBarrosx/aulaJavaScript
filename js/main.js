/** Manipulando elementos */

function clicou(){
    //alert("Obrigado por clicar!");
    document.getElementById("clicou-text").innerHTML = "Obrigado por clicar";
}
function textMouse(){
    alert("Você passou o mouse sobre o texto!");
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"
}
function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!"
}

function trocar2(elemento){
    elemento.innerHTML = "Com o mouse!"
}
function voltar2(elemento){
    elemento.innerHTML = "Sem o mouse!"
}

function load(){
    alert("Página carregada!");
}

function funcChange(elemento){
    console.log(elemento.value);
}

function redirecionar1(){
    //window.open("https:\\google.com.br");
    window.location.href="https:\\google.com.br";
}


/** Funções */
/** 
var validar;
function validaIdade(idade){
    if (idade >= 18){
        validar = "Você é maior de idade!"
    }else{
        validar = "Você é menor de idade!"
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
validaIdade(idade)
alert(validar);
*/

/** 
function setReplace(nome, sobreNome, novoSobrenome){
    return nome.replace(sobreNome, novoSobrenome)
}

alert(setReplace("Diogo Barbosa", "Barbosa", "Barros"));
*/

/** function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5 ,10));
*/


/** Datas */
/** 
var d = new Date();
console.log(d);
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
*/

/** Laçõs de repetição */

/** For */
/** 
var count;
for (count = 1; count <= 5; count++){
    console.log(count);
}
*/

/** while */
/** 
var count = 1;
while (count <= 5){
    console.log(count);
    count++;
}
*/



/** Condicionais */
/*
var idade = prompt("Qual sua idade?");

if (idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!")
}
*/


/** Dicionário */

/** 
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas);
console.log(frutas[0].nome);
console.log(frutas[0].cor);
*/

/** 
var fruta = {nome:"maça" , cor:"vermelha"}
//console.log(fruta.nome);
//console.log(fruta.cor);
console.log(fruta);
*/



/** ARRAY */
/** 
var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
*/


/**
 * 
var num1 = 8;
var num2 = 2;

console.log("adição: " + (num1 + num2));
console.log("subtração: " + (num1 - num2));
console.log("multiplicação: " + (num1 * num2));
console.log("divisão: " + (num1 / num2));
*
*/