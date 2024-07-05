// ORIENTAÇÃO À OBJETOS: class (aula62), herança: uma classe que herda uma outra classe, tudo que está implementado na classe 'pai' será para a classe 'filho'

// Classe 'PAI'
class Carro {
    constructor(p_nome_carro, p_qtd_portas) {
        this.nome = p_nome_carro
        this.portas = p_qtd_portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function() {
        this.ligado = true
    }
    desligar = function() {
        this.ligado = false
    }
    setCor = function(p_cor) {
        this.cor = p_cor
    }
}

// Classe 'FILHO'
class Militar extends Carro {
    constructor(p_nome_carro, p_qtd_portas, p_blindagem, p_municao) {
        super(p_nome_carro, p_qtd_portas)
        this.blindagem = p_blindagem
        this.municao = p_municao
        this.setCor("Verde")
    }
    atirar = function() {
        if(this.municao > 0) {
            this.municao--
        }
    }
}

class Utilitario extends Carro {
    constructor(p_nome_carro, p_qtd_portas, p_lugares) {
        super(p_nome_carro, p_qtd_portas)
        this.lugares = p_lugares
    }
}



const c1 = new Carro("Normal", 4)
c1.ligar()
c1.setCor("Preta")

const c2 = new Militar("Lutador", 6, 100, 50)
c2.setCor("Azul")
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

const c3 = new Utilitario("Mini-Golf", 0, "Campos")

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${c1.ligado ? "Sim" : "Não"}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)

console.log("-----------------------------------")

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${c2.ligado ? "Sim" : "Não"}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)

console.log("-----------------------------------")

console.log(`Nome: ${c3.nome}`)
console.log(`Portas: ${c3.portas}`)
console.log(`Lugares: ${c3.lugares}`)