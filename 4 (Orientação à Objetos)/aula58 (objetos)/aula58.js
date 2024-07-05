// ORIENTAÇÃO À OBJETOS: class (aula58)

class Carro {
    // Propriedade default da classe 'Carro', não é necessário 'this'
    curso = "JavaScript"

    // Método 'constructor': automaticamente chamado quando se instância um novo obj nesta classe 'Carro'
    constructor(parametro_nome, parametro_tipo) {
        // 'this' é um ponteiro para o objeto atual, que neste caso, cria a propriedade 'nome' e atribui o valor string 'Matthew'
        this.nome = parametro_nome
        this.curso = "TypeScript" // É possível instanciar as propriedades 'default' das classes no método 'construct'
        
        switch(parametro_tipo) {
            case 1:
                this.tipo = "Esportivo"
                this.vel_max = 300
                break
            case 2:
                this.tipo = "Utilitário"
                this.vel_max = 100
                break
            case 3:
                this.tipo = "Passeio"
                this.vel_max = 160
                break
            default:
                this.tipo = "Militar"
                this.vel_max = 180
        }
    }

    getNome() {
        return this.nome
    }
    getInfo() {
        // Retorna todas as propriedas em espécie de array
        return [this.nome, this.tipo, this.vel_max]
    }
    // Substitui o nome do carro pelo parâmetro
    setNome(nome_do_carro) {
        this.nome = nome_do_carro
    }

    // Construindo um método 'info', num molde de uma função
    info() {
        console.log(`Nome.: ${this.nome}`)
        console.log(`Tipo.: ${this.tipo}`)
        console.log(`Velocidade Máxima.: ${this.vel_max}`)
        console.log(`Curso.: ${this.curso}`)
        console.log("-----------------------")
    }
}

// No 'constructor', utilizar o operador 'new' estará instanciando um novo objeto da classe 'Carro'
let c1 = new Carro("Rapidão", 1)
let c2 = new Carro("Super-luxo", 2)
let c3 = new Carro("Bombadão", 3)
let c4 = new Carro("Carrego tudo", 4)

console.log(c1.getNome())
console.log(c1.getInfo())
console.log(c1.setNome("Devagar"))

c1.info()
c2.info()
c3.info()