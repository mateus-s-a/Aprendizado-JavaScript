"use strict"

function teste() {
    let nome = "Mateus"

    if(true) {
        console.log("Dentro do IF do teste: " + nome)
    }
    console.log("Dentro de teste: " + nome)

    nome = "Sobrenome"
    console.log(nome)

    nome = 19
    console.log(nome)
}

teste()

//console.log("Fora de teste: " + nome) -- irá dar erro de definição de declaração da variável 'nome';

const code = "JavaScript"
console.log(code)

code = "Python"
console.log(code)