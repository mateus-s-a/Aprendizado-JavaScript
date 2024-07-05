/* FUNÇÕES ANINHADAS --> função dentro de outra função */

const soma = (...valores) => {
    const somar = val => { // somar recebe um parâmetro
        let res = 0
        for(v of val) {
            res+=v
        }
        return res // res recebe 10, soma 5 = 15, soma 15 = 30, retornando sempre
    }
    return somar(valores) // passando os valores para a função somar()
}

console.log(soma(10, 5, 15)) // os valores entram no parâmetro rest ...valores


// de outra maneira, mas não dentro de outra função
const somar2 = val => {
    let res = 0
    for(v of val) {
        res+=v
    }
    return res
}

const soma2 = (...valores) => {
    return somar2(valores)
}

let valor = [10, 5, 16] // array
console.log(soma2(...valor))