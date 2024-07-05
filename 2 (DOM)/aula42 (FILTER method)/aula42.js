// Método FILTER --> trata um array (pecorrer el) filtrando-o via programação, criando um novo array com especificações desejadas

// const filtroMaior18 = (valor) => {
//     if(valor >= 18) {
//         return valor
//     }
// }

const idades = [15, 21, 30, 17, 18, 44, 12, 50]
const maior18 = idades.filter((valor) => {
    if(valor >= 18) {
        return valor
    }
})

const menor18 = idades.filter((valor) => {
    if(valor < 18) {
        return valor
    }
})

// const maior18 = idades.filter(filtroMaior18)
// const filtroMaior18 = (valor, index, array) => {}

console.log(idades)
console.log(maior18)
console.log(menor18)