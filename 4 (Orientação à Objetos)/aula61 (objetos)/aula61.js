// ORIENTAÇÃO À OBJETOS: class (aula61), objetos literais

// Sintaxe diferente (não esquecer da vírgula)
const Pessoa = {
    // propriedade
    nome: "Matthew",
    // métodos
    getNome: function() {
        return this.nome
    },
    setNome: function(parametro_nome) {
        this.nome = parametro_nome
    },
}

// 'p2' e 'p3' recebem os mesmos objetos literais feitos antes em 'Pessoa'
const p2 = Pessoa
const p3 = Pessoa

// Tanto 'Pessoa' e 'p2' imprimem a mesma propriedade 'nome'
console.log(Pessoa.nome)
console.log(p2.nome)

// Como eles não são independentes, a alteração de um irá alterar o outro. Logo, neste caso, será imprimido outro nome, mesmo utilizando a mesma sintaxe
p3.nome = "Foyer"
console.log(Pessoa.nome)
// OU
const p4 = Pessoa
p4["nome"] = "Triz"
console.log(Pessoa.nome)

// Imprime a propriedade 'nome' por um método de retorno 'getNome'
console.log(p2.getNome())
// Altera a propriedade 'nome' por um método 'setNome' e depois o imprime
p2.setNome("Uh...")
console.log(p2.getNome())


//----------------------------------------------------


const Pessoa2 = {
    // propriedade
    nome2: "",
    idade2: "",
    // métodos
    getNome2: function() {
        return this.nome2
    },
    getIdade2: function() {
        return this.idade2
    },
    setNome2: function(parametro_nome2) {
        this.nome2 = parametro_nome2
    },
    setIdade2: function(parametro_idade2) {
        this.idade2 = parametro_idade2
    },
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
        div.innerHTML = `Nome: ${p.getNome2()}<br/>Idade: ${p.getIdade2()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener(('click'), () => {
    const aux_nome2 = document.querySelector('#f_nome').value
    const aux_idade2 = document.querySelector('#f_idade').value
    
    const novaPessoa = {
        nome2: aux_nome2,
        idade2: aux_idade2,
        getNome2: Pessoa2.getNome2,
        getIdade2: Pessoa2.getIdade2,
        setNome2: Pessoa2.setNome2,
        setIdade2: Pessoa2.setIdade2
    }

    pessoas.push(novaPessoa)

    document.querySelector('#f_nome').value = ""
    document.querySelector('#f_idade').value = ""

    document.querySelector('#f_nome').focus()

    console.log(pessoas)

    addPessoa()
})