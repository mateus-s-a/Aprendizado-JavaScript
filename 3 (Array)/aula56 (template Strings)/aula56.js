// TEMPLATE STRINGS: `${nome_da_variável}`
const caixa = document.querySelector('#caixa')

const
    curso = "JavaScript",
    nome = "Matthew",
    frase = `O ${nome} <br/>está estudando no momento várias linguagens de programação, <br/>entre elas, ${curso}.`,
    carros = ["Fusca", "Mustang", "Camaro", "Onix"];

let ul = `<ul>`
carros.map((el) => {
    ul += `<li>${el}</li>`
})
ul + `</ul>`

caixa.innerHTML = frase
caixa.innerHTML = ul