/* (Aula 74): GAVETA ABA */
const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('.display')
const tCopy = document.querySelector('#tCopy')
const tCopyMobile = document.querySelector('#tCopyMobile')
const tLimpar = document.querySelector('#tLimpar')
const tSeparador = document.querySelector('#tSeparador')
const calc = document.querySelector('#calc')
const calc_aba = document.querySelector('#calc_aba')

let sinalBoolean = false
let tSeparadorBoolean = false

/* EVENTOS */
teclasNum.map((el) => {
    el.addEventListener('click', (evt) => {
        if(evt.target.id === "tSeparador" && tSeparadorBoolean == false) {
            display.innerHTML += evt.target.innerHTML
            tSeparador.style.pointerEvents = "none"
            tSeparadorBoolean = true
        } else {
            if(display.innerHTML == "0") display.innerHTML = ""
            display.innerHTML += evt.target.innerHTML
            sinalBoolean = false
        }
    })
})

teclasOp.map((el) => {
    el.addEventListener('click', (evt) => {
        if(!sinalBoolean) {
            display.innerHTML += evt.target.innerHTML
            sinalBoolean = true
            tSeparadorBoolean = false
            tSeparador.style.pointerEvents = "auto"
        }
    })
})

tLimpar.addEventListener('click', () => {
    display.innerHTML = "0"
    tSeparador.style.pointerEvents = "auto"
    tSeparadorBoolean = false
})

teclaRes.addEventListener('click', () => {
    calculoRes()
    mostrarOperadoresUtilizados()
})

tCopy.addEventListener('click', () => {
    // Copia o resultado para a área de transferência
    // navigator.clipboard.writeText(display.innerHTML)

    // Copia o resultado para o input para mobile
    tCopyMobile.select()
    tCopyMobile.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(tCopyMobile.value)
})

calc_aba.addEventListener('click', () => {
    // Mostra a calculadora
    calc.classList.toggle('calc_exibir')
    // Altera a seta do botão
    calc_aba.innerHTML = calc.classList.contains('calc_exibir') ? "←" : "→"
})




/* FUNÇÕES */
function calculoRes() {
    if(display.innerHTML.includes("×")) display.innerHTML = display.innerHTML.replace("×", "*")
    if(display.innerHTML.includes("÷")) display.innerHTML = display.innerHTML.replace("÷", "/")
    if(display.innerHTML.includes(",")) display.innerHTML = display.innerHTML.replace(",", ".")
    const resultado = eval(display.innerHTML)
    display.innerHTML = resultado
}