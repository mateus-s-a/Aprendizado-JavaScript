/* ITERADORES --> objeto que fornece um meio de acessar os elementos de uma coleção (como um array) sequencialmente, um de cada vez

Arrays
String
Map
Set
*/

const valores = [10, 8, 9, 2]
const iterador_valores = valores[Symbol.iterator]() // iterador criado manualmente

// console.log(valores)
// console.log(iterador_valores) // output: Array Iterator
// console.log(iterador_valores.next()) // output: {value: 10, done: false}
// console.log(iterador_valores.next()) // output: {value: 8, done: false}
// console.log(iterador_valores.next()) // output: {value: 9, done: false}
// console.log(iterador_valores.next()) // output: {value: 2, done: false}
// console.log(iterador_valores.next()) // output: {value: undefined, done: true}

for(let i = 0; i<=valores.length; i++) {
    console.log(iterador_valores.next())
}

let aux = iterador_valores.next()
while(!aux.done) {
    console.log(aux.value)
    aux = iterador_valores.next()
}



const texto = "YouTube"
const iterador_texto = texto[Symbol.iterator]()

for(let i = 0; i<=texto.length; i++) {
    console.log(iterador_texto.next())
}

let aux2 = iterador_texto.next()
while(!aux2.done) {
    console.log(aux2.value)
    aux2 = iterador_texto.next()
}