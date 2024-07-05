/* FUNÇÕES 5 --> funções anônimas;
não possuem um nome associado ao seu conteúdo;
chamadas em tempo de execução;
não está na memória, somente criada no momento da execução;
funciona como uma função padrão;*/

const f = function(v1, v2) { // associa-se a uma variável (let, const), não possui nome
    return v1 + v2
}

console.log(f(10, 5))



const g = function(...valores) { // parâmetros REST
    let res = 0
    for(v of valores) {
        res += v
    }
    return res
}

console.log(f(11, 6))



const h = new Function("v1", "v2", "v3", "return v1 + v2 + v3") // Função Construtora Anônima

console.log(h(10, 5, 15)) // precisa-se passar os argumentos, e, corpo da função (último parâmetro)