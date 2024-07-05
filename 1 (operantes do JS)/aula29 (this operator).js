/* OPERADOR THIS --> */

"use strict"
function aluno(nome, nota) {
    this.nome = nome // 'this.nome', variável declarada para função 'aluno' que recebe o valor do parâmetro 'nome'
    this.nota = nota

    this.dados_anonimo = function() {
        setTimeout(function(){ // 'setTimeout', atrasa a execução, neste caso 2 segundos
            console.log(this.nome) // undefined
            console.log(this.nota) // undefined
        }, 2000) // duração
    }

    this.dados_arrow = function() {
        setTimeout(() => { // 'setTimeout', atrasa a execução, neste caso 2 segundos
            console.log(this.nome) // output: "Matthew"
            console.log(this.nota) // output: 8
        }, 2000) // duração
    }
}

const al1 = new aluno("Matthew", 8)
al1.dados_anonimo()
al1.dados_arrow()