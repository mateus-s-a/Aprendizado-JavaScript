const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')

console.log(c1_2.parentNode.parentNode.parentNode.children[4])

// console.log(caixa1.hasChildNodes())

// console.log(btn_c[0].childNodes)
// console.log(btn_c[0].hasChildNodes())

// console.log(btn_c[0].children.length > 0 ? "Possui elementos filhos" : "Não possui elementos filhos")

// console.log(caixa1.firstElementChild.innerHTML = "Teste") // iteração DIRETAMENTE com um elemento específico através de sua relação
// console.log(caixa1.children[1].innerHTML = "Teste")

// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)
// console.log(caixa1.children)