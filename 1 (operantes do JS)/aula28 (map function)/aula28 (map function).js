/* FUNÇÃO MAP --> percorre arrays/coleções, elemento por elemento de uma coleção 

const code = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
code.map(elemento, index)

map --> método map
elemento --> 1° parâmetro, elemento da coleção que está iterando
index --> 2° parâmetro, índice do elemento, posição do elemento da coleção
*/

const code = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
code.map((el, i) => {
    console.log("Coding: " + el + " - Posição do elemento: " + i)
})


const code2 = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
let c = code2.map((el, i) => {
    return "<div>" + el + "</div>"
})
console.log(c)


// let el = document.getElementsByTagName("div") // manipulação com DOM
// el = [...el]
// console.log(el)
// el.map((e, i) => {
//     console.log(e.innerHTML)
//     e.innerHTML = "CODE"
// })


// const el2 = document.getElementsByTagName("div")
// const val = Array.prototype.map.call(el, ({innerHTML}) => innerHTML)
// console.log(val)


const converterInt = (e) => parseInt(e)
const dobrar = (e) => e * 2
let num = ['1', '2', '3', '4', '5'].map(converterInt)
console.log(num)
console.log(num.map(dobrar))