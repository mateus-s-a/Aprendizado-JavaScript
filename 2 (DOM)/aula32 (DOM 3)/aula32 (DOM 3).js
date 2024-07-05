// getElementByClassName("")

const cursosTodos = [...document.getElementsByClassName("curso")]
console.log(cursosTodos)

const cursosC1 = [...document.getElementsByClassName("curso c1")]
const cursosC2 = [...document.getElementsByClassName("curso c2")]
console.log(cursosC1)
console.log(cursosC2)

cursosC2.map((el) => {
    el.classList.add("destaque") // adicionar classe aos elementos
})

const cursoEspecial = document.getElementsByClassName("curso")[0] // pega a classe, seleciona somente o primeiro elemento
console.log(cursoEspecial)
console.log(cursosTodos[3]) // de forma mais direta