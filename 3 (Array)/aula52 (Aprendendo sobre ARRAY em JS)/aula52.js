/* ARRAYS --> coleção de dados/valores, podendo armazenar qualquer tipo de objetos/variáveis */

const caixa = document.querySelector('#caixa')
let cursos = ["HTML", "CSS", "JavaScript"]
console.log(cursos)



caixa.appendChild(document.createElement('h1')).innerHTML = "1"
cursos.map((el) => { // percorrendo e iterando os elementos deste array
    let p = document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})



caixa.appendChild(document.createElement('h1')).innerHTML = "2"
cursos[0] = "C++" // substituindo o primeiro elemento
cursos[2] = 2024 // substituindo o terceiro elemento
cursos.forEach((el) => { // percorrendo e iterando os elementos deste array, com a nova substituição do primeiro e terceiro elemento
    let p = document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})



caixa.appendChild(document.createElement('h1')).innerHTML = "3.1"
cursos.push("Python") // adiciona um elemento NO FINAL do array
cursos.push("React")
cursos.forEach((el) => {
    let p = document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})

caixa.appendChild(document.createElement('h1')).innerHTML = "3.2"
cursos.pop() // retira o últime elemento do array, 'React' no caso
cursos.forEach((el) => {
    let p = document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})



caixa.appendChild(document.createElement('h1')).innerHTML = "4.1"
cursos.unshift("React") // adiciona um elemento NO INÍCIO do array
cursos.forEach((el) => {
    let p = document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})

caixa.appendChild(document.createElement('h1')).innerHTML = "4.2"
cursos.shift() // retira um elemento NO INÍCIO do array
cursos.forEach((el) => {
    let p = document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})



caixa.appendChild(document.createElement('h1')).innerHTML = "5"
let cores = ["azul", "verde", "vermelho"]
cursos = ["HTML", "CSS", "JavaScript", cores]
cursos.forEach((el) => {
    let p = document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})
console.log(cursos[3][1]) // imprime somente a cor 'verde', conceito de matriz