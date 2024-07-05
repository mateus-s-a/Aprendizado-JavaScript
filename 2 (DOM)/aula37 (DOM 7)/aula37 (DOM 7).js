// stopPropagation --> para a propagação de um evento

const caixa1 = document.querySelector('#caixa1')
const btn_c1 = document.querySelector('#c1')

// const cursos = document.querySelectorAll('.curso') // Nodelist
// const cursos = [...document.querySelectorAll('.curso')] // Array com ...spread
const cursos = Array.from(document.querySelectorAll('.curso')) // Array com método estático

caixa1.addEventListener('click', (evt) => {
    console.log("Clicou")
    console.log(evt)
})

console.log(cursos)
// cursos.map((el) => { // não imprime no console para todos os botões
//     el.addEventListener('click', (evt) => {
//         evt.stopPropagation()
//     })
// })
// OU
cursos.forEach((el) => { // não imprime no console para todos os botões
    el.addEventListener('click', (evt) => {
        evt.stopPropagation()
    })
})

// btn_c1.addEventListener('click', (evt) => { // não imprime no console somente para o botão escrito HTML
//     evt.stopPropagation()
// })