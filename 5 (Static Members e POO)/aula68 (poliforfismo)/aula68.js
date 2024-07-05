/* (Aula 68), Poliforfismo, permite objetos diferentes tipos, respondam de maneira específica, métodos que compartilham o mesmo nome. 
Alcançado através de herança e sobrescrita de métodos, quer usando classes ES6 ou funções construtoras e protótipos. */

class Carro {
    constructor(p_Tipo_Carro, p_Estagio_Turbo) {
        this.turbo = new Turbo(p_Estagio_Turbo)
        switch(p_Tipo_Carro) {
            case 1:
                this.velMax = 120
                this.nome = "Normal"
                break

            case 2:
                this.velMax = 160
                this.nome = "Esportivo"
                break

            default:
                this.velMax = 200
                this.nome = "Super-Esportivo"
                break
        }
        this.velMax += this.turbo.potencia
    }

    info() {
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log("------------------------")
    }
}

class Turbo {
    constructor(param_e) {
        switch(param_e) {
            case 1:
                this.potencia = 50
                break

            case 2:
                this.potencia = 75
                break

            case 3:
                this.potencia = 100
                break

            default:
                this.potencia = 0
                break
        }
    }
}

class CarroEspecial extends Carro {
    constructor(p_Estagio_Turbo){
        super(4, p_Estagio_Turbo)
        this.tipoInfo = 2
        this.velMax = 300 + this.turbo.potencia
        this.nome = "Carro Especial"
    }

    info() {
        switch(this.tipoInfo) {
            case 1:
                super.info()
                break

            case 2:
                console.log(`Nome: ${this.nome}`)
                console.log(`Velocidade Máxima: ${this.velMax}`)
                console.log(`Turbo: ${this.turbo.potencia}`)
                console.log("------------------------")
                break
        }
    }
}

const c1 = new Carro(1, 0)
const c2 = new Carro(1, 1)
const c3 = new CarroEspecial(3)

c1.info()
c2.info()
c3.info()


// OUTRO EXEMPLO (Classes) ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
class Animal {
    constructor(p_nome) {
        this.nome = p_nome
    }

    fazerSom() {
        console.log(`O animal ${this.nome} faz um som.`)
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log(`O cachorro ${this.nome} late.`)
    }
}

class Gato extends Animal {
    fazerSom() {
        console.log(`O gato ${this.nome} mia.`)
    }
}

// aplicando o polimorfismo
const animais = [
    new Cachorro('Rex'),
    new Gato('Miau'),
    new Animal('Genérico')
]
animais.map((el) => el.fazerSom())

// OUTRO EXEMPLO (Funções Construtoras) —————————————————————————————————————————————————————————————————————————————————————————————————————————
function Objeto(p_nome) {
    this.nome = p_nome
}
Objeto.prototype.emiteSom = function() {
    console.log(`Um objeto ${this.nome} emite um som.`)
}

/* 'Objeto.call(this, nome) chama a função construtora 'Objeto' com o contexto ('this') da instância da subclasse ('Chave' ou 'Clique'),
fazendo com que as propriedades definidias em 'Objeto' (como 'nome') sejam corretamente atribuídas às instâncias de 'Chave' e 'Clique' */
function Chave(p_nome) {
    Objeto.call(this, p_nome)
}
// cria um novo objeto que tem 'Objeto.protype' como seu protótipo. Isso significa que qualquer instância de 'Chave' ou 'Clique' herdará métodos e propreidades do protótipo de 'Objeto'
Chave.prototype = Object.create(Objeto.prototype)
Chave.prototype.constructor = Chave
Chave.prototype.emiteSom = function() {
    console.log(`A chave é ${this.nome}.`)
}

function Clique(p_nome) {
    Objeto.call(this, p_nome)
}
Clique.prototype = Object.create(Objeto.prototype)
Clique.prototype.constructor = Clique
Clique.prototype.emiteSom = function() {
    console.log(`O clique ${this.nome}.`)
}

const objetos = [
    new Chave('Tinido'),
    new Clique('Clica'),
    new Objeto('Genérico')
]
objetos.map((el) => el.emiteSom())