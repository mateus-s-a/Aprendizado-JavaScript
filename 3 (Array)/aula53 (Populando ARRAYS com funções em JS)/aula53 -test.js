// funções dentro de um Array, Array de funções

let valores = [8, 4, 2]
const operacoes = [
    // SOMA [0]
    (val) => {
        let res = 0
        for(v of val) {
            res += v
        }
        return res
    }, // vírgula define o fim desse elemento, como um array normal

    // SUBTRAÇÃO [1]
    (val) => {
        let res = 0
        for(v of val) {
            res -= v
        }
        return res
    },

    // MULTIPLICAÇÃO [2]
    (val) => {
        let res = 1
        for(v of val) {
            res *= v
        }
        return res
    },

    // DIVISÃO [3]
    (val) => {
        let res = val[0]
        for(let i = 1; i<val.length; i++) {
            res /= val[i]
        }
        return res
    },
    
    // IMPRESSÃO DO ARRAY [4]
    (val) => {
        for(v of val) {
            console.log(v)
        }
    }
]

console.log("SOMA: " + operacoes[0](valores)) // output: 14, da função de SOMA criada
console.log("SUBTRAÇÃO: " + operacoes[1](valores)) // output: -14, da função de SUBTRAÇÃO criada
console.log("MULTIPLICAÇÃO: " + operacoes[2](valores)) // output: 64, da função de MULTIPLICAÇÃO criada
console.log("DIVISÃO: " + operacoes[3](valores)) // output: 1 da função de DIVISÃO criada

console.log("IMPRESSÃO: ")
operacoes[4](valores) // output: 1 \n 2, da função de IMPRESSÃO do array 'valores'