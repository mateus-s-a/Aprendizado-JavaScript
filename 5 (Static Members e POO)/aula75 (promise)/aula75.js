/* (Aula 75): PROMISE, 'Promise' serve para tratar de operaçes assíncronas, quando executado uma promise ela diz ao JS que uma operação está sendo feita, mas não necessariamente concluída */

const numero = document.querySelector('#numero')

// 'Promise' é uma função que recebe uma função de callback com dois parâmetros, 'res_ok' e 'res_err'
let promise = new Promise((res_ok, res_err) => {
    let resultado = Math.random() >= 0.5 // 'Math.random()' gera um número aleatório entre 0 e 1, se for maior ou igual a 0.5, a promise é resolvida com sucesso, senão é rejeitada
    let tempo = 3000

    setTimeout(() => {
        if(resultado) {
            res_ok("Operação concluída com sucesso.")
        } else {
            res_err("Erro de operação.")
        }
    }, tempo)
})

// Esta parte é responsável por tratar dos resultados da promise
promise.then(() => {
    numero.innerHTML = "Operação concluída com sucesso."
    numero.classList.remove('error')
    numero.classList.add('ok')
})
promise.catch(() => {
    numero.innerHTML = "Erro de operação."
    numero.classList.remove('ok')
    numero.classList.add('error')
})

numero.innerHTML = "Processando..."