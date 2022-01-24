
//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let idade = 18

if (idade >= 18) {
   console.log("Parabéns, você tem 18 anos!") 
} else {
    console.log("Você ainda é menor de idade!")  
}


//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a variável "humano" seja true

let age = 18
let humano = true

if (age >= 18 || humano === true) {
    console.log("Você é maior de idade e a variável humano é igual a true")
}


////3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let aniversario = "abril"

if (aniversario == "janeiro" || aniversario == "dezembro") {
    console.log("Parabéns, chegou o seu dia!")
}else{
    console.log("Desculpe, ainda não chegou o seu dia!")
}

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

const nome = "Leonardo"

if (nome.substring(0,1) == "R") {
    console.log("Seu nome começa com a letra R")
}else{
    console.log("Seu nome não começa com a letra R")
}


////5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E


const sobrenome = "Vantine"

if (sobrenome.length>=6 || sobrenome.substring(0,1) == "E") {
    console.log("Sim, seu nome tem 6 letras ou começa com a letra E")
}else{
    console.log("Seu sobrenome tem menos do que 6 letras e seu nome não começa com a letra E")
}