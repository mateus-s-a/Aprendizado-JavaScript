const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]

// console.log(caixa1)
// console.log(btn_c)

btn_c.forEach((el) => {
    el.addEventListener('click', () => {
        console.log(el.nextElementSibling)
        console.log(el.getRootNode())
    })
})