const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')

cursos.map((el, index) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c' + (index + 1))
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = el

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
})

const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll('input[type = radio]')]
    const radioSelecionado = todosRadios.filter((ele, ind, arr) => {
        return ele.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener('click', (evt) => {
    const rs = radioSelecionado()
    
    // if(rs != undefined) {
    //     // const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent
    //     // OU
    //     const cursoSelecionado = rs.parentNode.previousSibling.textContent
        
    //     alert("Curso Selecionado: " + cursoSelecionado)
    //     // console.log(todosRadios)
    //     // console.log(rs)
    //     // console.log(cursoSelecionado)
    // } else {
    //     alert("Indefinido. Nenhum curso selecionado.")
    // }

    // OU
    try {
        // const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent
        // OU
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        
        alert("Curso Selecionado: " + cursoSelecionado)
        // console.log(todosRadios)
        // console.log(rs)
        // console.log(cursoSelecionado)
    } catch(excecao) {
        alert("cs// Indefinido. Nenhum curso selecionado.")
    }


})

const btnRemoverCursoSelecionado = document.getElementById('btnRemoverCurso')
btnRemoverCursoSelecionado.addEventListener('click', (evt) => {
    let rs = radioSelecionado()

    // if(rs != undefined) {
    //     rs = rs.parentNode.parentNode
    //     rs.remove()
    // } else {
    //     alert("Indefinido. Nenhum curso selecionado.")
    // }

    // OU
    try {
        rs = rs.parentNode.parentNode
        rs.remove()
    } catch(excecao) {
        alert("rs// Indefinido. Nenhum curso selecionado.")
    }
})



// parentNode
// childNodes[nodeNumber]
// firstChild
// lastChild
// nextSibling
// previousSibling