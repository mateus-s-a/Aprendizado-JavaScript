const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoverCursoSelecionado = document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCursoAntes = document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = document.getElementById('btnAdicionarNovoCursoDepois')
const nomeCurso = document.getElementById('nomeCurso')


let indice = 0

const tirarSelecao = () => {
    const cursosSelecionados = Array.from(document.querySelectorAll('.selecionado'))
    cursosSelecionados.map((el) => {
        el.classList.remove('selecionado')
    })
}


const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c' + (indice + 1))
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.setAttribute('style', 'cursor: pointer') // define um atributo 'style' para o cursor 'pontar'
    novoElemento.innerHTML = curso
    
    // const comandos = document.createElement('div')
    // comandos.setAttribute('class', 'comandos')
    
    // const rb = document.createElement('input')
    // rb.setAttribute('type', 'radio')
    // rb.setAttribute('name', 'rb_curso')
    
    // comandos.appendChild(rb)
    
    // novoElemento.appendChild(comandos)

    novoElemento.addEventListener('click', (evt) => {
        tirarSelecao()
        evt.target.classList.toggle('selecionado')
    })

    return novoElemento
}

cursos.map((el) => {
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})



const cursoSelecionado = () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    return cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener('click', (evt) => {
    // if(rs != undefined) {
    //     // const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent
    //     // OU
    //     const cursoSelecionado = rs.parentNode.previousSibling.textContent
        
    //     alert("Curso Selecionado: " + cursoSelecionado)
    //     // console.log(todosRadios)
    //     // console.log(rs)
    //     // console.log(cursoSelecionado)
    // } else {
    //     alert("cs// Indefinido. Nenhum curso selecionado.")
    // }
    try {
        alert("Curso Selecionado: " + cursoSelecionado().innerHTML)
        // console.log(todosRadios)
        // console.log(rs)
        // console.log(cursoSelecionado)
    } catch(excecao) {
        alert("cs// Indefinido. Nenhum curso selecionado.")
    }


})

btnRemoverCursoSelecionado.addEventListener('click', (evt) => {
    // if(rs != undefined) {
    //     rs = rs.parentNode.parentNode
    //     rs.remove()
    // } else {
    //     alert("rs// Indefinido. Nenhum curso selecionado.")
    // }
    const cs = cursoSelecionado()
    try {
        cs.remove()
    } catch(excecao) {
        alert("rs// Indefinido. Nenhum curso selecionado.")
    }
})



btnAdicionarNovoCursoAntes.addEventListener('click', (evt) => {
    try {
        if(nomeCurso.value != "") {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado())
        } else {
            alert("ancAntes// Digite o nome do curso.")
        }
    } catch(excecao) {
        alert("ancAntes// Indefinido. Nenhum curso selecionado.")
    }
})

btnAdicionarNovoCursoDepois.addEventListener('click', (evt) => {
    try {
        if(nomeCurso.value != "") {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)
        } else {
            alert("ancDepois// Digite o nome do curso.")
        }
    } catch(excecao) {
        alert("ancAntes// Indefinido. Nenhum curso selecionado.")
    }
})

// parentNode
// childNodes[nodeNumber]
// firstChild
// lastChild
// nextSibling
// previousSibling