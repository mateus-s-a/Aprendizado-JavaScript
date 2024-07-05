// MÉTODO FIND --> busca o elemento desejado em um array e o retorna 'true', senão 'undefined'

const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')


// NÚMEROS
const elementos_array = [10, 5, 8, 2, 9, 15, 20]
p_array.innerHTML = "["+ elementos_array + "]"

btnPesquisar.addEventListener('click', (evt) => {
    resultado.innerHTML = "Valor não encontrado."
    const ret = elementos_array.find((ele, ind, arr) => {
        if(ele == txt_pesquisar.value) {
            resultado.innerHTML = "Valor encontrado " + ele + " na posição " + (ind+1) + "."
            return ele
        }
    })
    console.log(ret)
})


// LETRAS
// const elementos_array = ["HTML", "CSS", "JavaScript"]
// p_array.innerHTML = "["+ elementos_array + "]"

// btnPesquisar.addEventListener('click', (evt) => {
//     resultado.innerHTML = "Valor não encontrado."
//     const ret = elementos_array.find((ele, ind, arr) => {
//         if(ele.toUpperCase() == txt_pesquisar.value.toUpperCase()) { // converte o texto no input para maiúsculo
//             resultado.innerHTML = "Valor encontrado " + ele + " na posição " + (ind+1) + "."
//             return ele
//         }
//     })
//     console.log(ret)
// })