// addEventListener (2)

// MEU CÓDIGO:
// const curso = [...document.querySelectorAll(".curso")]
// let curso2 = document.querySelectorAll("#caixa2")
// let copia = []
// const btn = document.getElementById("btn_copiar")

// for(let el of curso) {
//     // console.log(el)
//     el.addEventListener("click", () => {
//         // alert("Teste")
//         copia.push(el) // usamos o método 'push' para adicionar 'el' ao array 'copia'
//         el.classList.add("selecionado")
//     })
// }

// btn.addEventListener("click", () => {
//     // alert("Teste2")
//     for(let el of curso2) {
//         for(let itemCopia of copia) {
//             const novoDIV = document.createElement("div") // cria-se um div
//             novoDIV.textContent = itemCopia.textContent // este div criado recebe o texto do 'div' de 'copia'
//             el.appendChild(novoDIV) // o coloca como filho do elemento atual de 'curso2'
//         }

//     }
// })

// console.log(copia)



// CÓDIGO DO PROFESSOR:
const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_copiar")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el) => {
    el.addEventListener("click", (evt) => {
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click", () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")] // seleciona os elementos que contém a classe '.selecionado'
    const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")] // seleciona os elementos que NÃO contém a classe '.selecionado'

    cursosSelecionados.map((el) => {
        caixa2.appendChild(el) // move os elementos selecionados para a 'caixa2'
    })

    cursosNaoSelecionados.map((el) => {
        if(caixa2.contains(el)) { // verifica se o elemento NÃO selecionado está na 'caixa2'
            caixa2.removeChild(el) // se estiver remova-o da 'caixa2'
            caixa1.appendChild(el) // E mova-o para a 'caixa1'
        }
    })
})