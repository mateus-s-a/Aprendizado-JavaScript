/* (Aula 76, parte 2): PROMISE */

const numero = document.querySelector('#numero')
const btn_promessa = document.querySelector('#btn_promessa')

btn_promessa.addEventListener('click', () => {
    numero.innerHTML = "Processando..."
    promessa()

    // Esta parte é responsável por tratar dos resultados da promise
    .then((ok) => {
        numero.innerHTML = ok
        numero.classList.remove('error')
        numero.classList.add('ok')
    })
    .catch((err) => {
        numero.innerHTML = err
        numero.classList.add('error')
        numero.classList.remove('ok')
    })
})

numero.innerHTML = "Esperando..."

const promessa = () => {
    // 'Promise' é uma função que recebe uma função de callback com dois parâmetros, 'res_ok' e 'res_err'
    let promise = new Promise((res_ok, res_err) => {
        let resultado = Math.random() >= 0.5 // 'Math.random()' gera um nmero aleatório entre 0 e 1, se for maior ou igual a 0.5, a promise é resolvida com sucesso, senão é rejeitada
        let tempo = 3000
    
        setTimeout(() => {
            resultado ? res_ok("Operação concluída com sucesso.") : res_err("Erro de operação.")
        }, tempo)
    })

    // Quando 'promise' estiver resolvida, seu estado é 'fulfilled', senão, é 'rejected'
    return promise
}