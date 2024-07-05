// MÉTODO REDUCE --> redução do array, vindo da regra/função que for especificada; reduz os elementos de um array a um único valor

const p_array = document.querySelector('#array')
const btnReduzir = document.querySelector('#btnReduzir')
const resultado = document.querySelector('#resultado')

const elementos_array = [1, 2, 3, 4, 5]
let ant = [] // array auxiliar com valores antes
let atu = [] // array auxiliar com valores atuais
let dobroArray = [] // array auxiliar com os valores dobrados
p_array.innerHTML = "[" + elementos_array + "]"

btnReduzir.addEventListener('click', (evt) => {
    dobroArray.push(elementos_array[0]*2) // começa o array no início e dobra todos os valores do array original
    resultado.innerHTML = elementos_array.reduce((anterior, atual, ind, arr) => { // método 'reduce'
        ant.push(anterior)
        atu.push(atual)
        dobroArray.push(atual*2)
        return atual + anterior
    }/* 0 */) //  valor inicial do acumulador é 0, é opcional a colocação do 0, mas não para outros números
    resultado.innerHTML += "<br/>Anterior: " + ant + "<br/>Atual: " + atu + "<br/>Dobro: " + dobroArray // += em '.innerHTML' concatena o que já estava escrito em string
})