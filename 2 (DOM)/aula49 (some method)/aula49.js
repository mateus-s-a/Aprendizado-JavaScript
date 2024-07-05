// MÉTODO SOME --> irá retornar 'true' se pelo menos UM elemento equivaler com uma regra/função dada para um array

const p_array = document.querySelector('#array')
const btnVerificar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

const elementos_array = [16, 12, 20, 10, 17, 15, 13, 19]
p_array.innerHTML = "[" + elementos_array + "]"

btnVerificar.addEventListener('click', (evt) => {
    // console.log(elementos_array.some((ele, ind, arr) => {
    //     ele >= 18
    // }))

    // OU

    const return_result = elementos_array.some((ele, ind, arr) => { // método 'some'
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