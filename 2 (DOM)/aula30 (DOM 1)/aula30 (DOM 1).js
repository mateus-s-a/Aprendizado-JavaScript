// getElementById("")
const divc1 = document.getElementById("c1")
console.log(divc1)
console.log(divc1.id) // imprime o 'id' do elemento no console
console.log(divc1.innerHTML) // imprime o texto do elemento no console

divc1.innerHTML = "html5" // altera a propriedade texto do elemento

const divc2 = document.getElementById("c2")
const divc3 = document.getElementById("c3")
const divc4 = document.getElementById("c4")
const divc5 = document.getElementById("c5")
const divc6 = document.getElementById("c6")

const arrayElementos = [divc1, divc2, divc3, divc4, divc5, divc6]
console.log(arrayElementos)

// for(d of arrayElementos) { // troca todos os textos
//     d.innerHTML = "Programação"
// }

arrayElementos.map((e) => { // troca todos os textos
    console.log(e)
    e.innerHTML = "Programação"
})