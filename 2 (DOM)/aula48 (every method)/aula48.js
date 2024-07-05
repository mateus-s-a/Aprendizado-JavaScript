// MÉTODO EVERY --> procura se todos os elementos do array equivalem com base em uma regra/função dada

const p_array = document.querySelector('#array')
const btnVerificar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

const elementos_array = [21, 18, 19, 20, 25, 18, 17]
p_array.innerHTML = "[" + elementos_array + "]"

btnVerificar.addEventListener('click', (evt) => {
    // console.log(elementos_array.every((ele, ind, arr) => {
    //     ele >= 18
    // }))

    // OU

    const return_result = elementos_array.every((ele, ind, arr) => { // método 'every'
        if(ele < 18) {
            resultado.innerHTML = "Array não conforme na posição " + ind + "."
        }
        return ele >= 18
    })
    if(return_result) { // se return_result for 'true'
        resultado.innerHTML = "Okay."
    }
    console.log(return_result)
})