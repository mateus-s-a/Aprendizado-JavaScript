"use strict"

//COMPARAÇÕES

let n1 = 1
let n2 = "1"

console.log(n1 == n2) // comparação simples, valor
console.log(n1 === n2) // comparação precisa, tipo

let v1 = {nome: "Mateus"}
let v2 = {nome: "Mateus"}
let v3 = v1

console.log(v1.nome, v2.nome)

console.log(v1 === v2) // falso, posição de memória não correspondente
console.log(v1 === v3) // verdadeiro, v3 recebe v1


//PROMPT
/*
let nome = prompt("Digite seu nome: ") // janela input somente no browser
console.log(nome) // impressão no console(browser)
*/

