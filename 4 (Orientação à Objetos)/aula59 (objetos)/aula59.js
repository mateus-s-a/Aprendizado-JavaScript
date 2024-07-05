// ORIENTAÇÃO À OBJETOS: class (aula59)

class Pessoa {
    constructor(parametro_nome, parametro_idade) {
        this.nome = parametro_nome
        this.idade = parametro_idade
    }

    getNome() {
        return this.nome
    }
    getIdade() {
        return this.idade
    }

    setNome(nome_da_pessoa) {
        this.nome = nome_da_pessoa
    }
    setIdade(idade_da_pessoa) {
        this.idade = idade_da_pessoa
    }

    info() {
        console.log(`Nome.: ${this.nome}`)
        console.log(`Idade.: ${this.idade}`)
        console.log("-----------------------")
    }
}

let pessoas = []
const btn_add = document.querySelector('#btn_add')
const res = document.querySelector('.res')

const addPessoa = () => {
    // Limpa o 'res' para não duplicar pessoas
    res.innerHTML = ""
    pessoas.map((p) => {
        const div = document.createElement("div")
        div.setAttribute("class", "pessoas")
        div.innerHTML = `Nome: ${p.getNome()}<br/>Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener(('click'), () => {
    const p = new Pessoa(document.querySelector('#f_nome').value, document.querySelector('#f_idade').value)
    pessoas.push(p)
    addPessoa()
    
    // Limpa os inputs depois do click
    document.querySelector('#f_nome').value = ""
    document.querySelector('#f_idade').value = ""
    
    // Foca o input 'f_nome' depois do click, com um estilo de borda em volta da caixa
    document.querySelector('#f_nome').focus()
    console.log(pessoas)
    
})