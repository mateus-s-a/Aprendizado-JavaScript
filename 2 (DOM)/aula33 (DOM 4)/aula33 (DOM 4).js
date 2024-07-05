// querySelector & querySelectorAll
const divTodas = [...document.getElementsByTagName("div")]
const cursosTodos = [...document.getElementsByClassName("curso")]

const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]

const cursoEspecial = document.getElementById("c1")

// const query_divTodas = document.querySelector("div") // retorna o primeiro div que o 'query' encontrar
// const query_divTodas = document.querySelectorAll("div") // retorna todos os div's (Node List)
const query_divTodas = [...document.querySelectorAll("div[class], p")] // (Array), retorna todas as div's exceto aquelas com uma classe, e as tags 'p'
console.log(query_divTodas)

const query_cursosTodos = [...document.querySelectorAll(".curso")] // retorna todos os elementos com a classe "curso"
console.log(query_cursosTodos)

const query_cursosC1 = [...document.querySelectorAll(".c1, p")] // retorna todos os elementos com a classe "c1" e as tags 'p'
console.log(query_cursosC1)

const query_cursosC2 = [...document.querySelectorAll(".c2")] // retorna todos os elementos com a classe "c2"
console.log(query_cursosC2)

// const query_cursoEspecial = document.querySelector("#c1")
const query_cursoEspecial = document.querySelectorAll("#c1")[0] // retorna todos os elementos com o id "c1"
console.log(query_cursoEspecial)

const query_divComTagP = [...document.querySelectorAll("div > p")] // retorna todos os elementos 'p' que estão dentro de div's
console.log(query_divComTagP)


// console.log(divTodas)
// console.log(cursosTodos)
// console.log(cursosC1)
// console.log(cursosC2)
// console.log(cursoEspecial)

// cursosC2.map((el) => {
//     el.classList.add("destaque")
// })