/* FUNÇÕES 4 --> parâmetros REST, forma de passagem de parâmetros, não especificar qtd de parâmetros para enviar à função*/

function test(...valores) { // padrão de parâmetro REST, possibilidade de passar finitos parâmetros para a função
    return valores.length // largura do parâmetro valores
}

console.log(test(10, 5)) // output: 2 qtd de parâmetros passando na função



function soma(...valores) {
    //let tam = valores.length
    let res = 0
    /*for(let i = 0; i<tam; i++) {
        res+=valores[i]
    }*/
    for(let v of valores) { // variável 'v' recebe os valores que estão array 'valores', for of
        res+=v
    }
    return res
}

console.log(soma(10, 5))
console.log(soma(10, 5, 2))
console.log(soma(10, 5, 2, 8))
console.log(soma(10, 5, 2, 8, 15))