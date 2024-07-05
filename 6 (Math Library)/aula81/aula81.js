/* Aula 81 - BIBLIOTECA MATH, é uma biblioteca que contém funções matemáticas */

const olhos = Array.from(document.getElementsByClassName('olho'))

let x = 0
let y = 0

window.addEventListener('mousemove', (evt) => { // 'window' é um objeto que representa a janela do navegador
    x = evt.clientX // Pega o valor da posição do mouse no eixo X
    y = evt.clientY // Pega o valor da posição do mouse no eixo Y

    const rot = Math.atan2(y, x) * 180 / Math.PI // Math.atan2() é uma função que calcula o ângulo entre dois pontos, mas retorna o ângulo convertido de radianos para graus

    olhos.forEach((olho) => {
        olho.style.transform = "rotate(" + rot + "deg)"
    })
})

