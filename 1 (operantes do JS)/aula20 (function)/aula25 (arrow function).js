/* ARROW FUNCTIONS --> função lambda, dentro do conceito função anônima

const soma = function(v1, v2) {
    return v1 + v2
}*/

const soma = (v1, v2) => {return v1 + v2} // sintaxe do arrow function
console.log(soma(10, 5))

const nome = n => {return n} // 1 parâmetro de entrada na função, sem necessidade de parênteses
console.log(nome("Matthew"))

const add = n2 => n2+10 // sem uso do return, sem necessidada das chaves, mesmo caso para funções soma() e nome()
console.log(add(10))

const soma2 = (v1, v2) => { // mais de uma linha, necessita as chaves e o return
    let res = v1 + v2
    return res
}
console.log(soma2(11, 8))