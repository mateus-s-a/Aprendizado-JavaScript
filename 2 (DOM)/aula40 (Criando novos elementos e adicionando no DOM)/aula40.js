const caixa1 = document.querySelector('#caixa1')
const btn_c = Array.from(document.querySelectorAll('.curso'))

const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]

cursos.map((el, index) => {
    const novoElemento = document.createElement('div')
    novoElemento.innerHTML = el
    novoElemento.setAttribute('id', 'c' + (index + 1))
    novoElemento.setAttribute('class', 'curso c1')
    caixa1.appendChild(novoElemento)
})

// const novoElemento = document.createElement('div') // criar um elemento 'div'
// novoElemento.innerHTML = "ReactNative" // adicionar um texto
// novoElemento.setAttribute('id', 'c7') // adicionar uma id, valor
// novoElemento.setAttribute('class', 'curso c1') // adicionar uma classe, valores


// caixa1.appendChild(novoElemento)