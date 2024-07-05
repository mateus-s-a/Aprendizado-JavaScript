/* (Aula 69) 7w7, Abstract em POO (só pode ser extendida):
Classes Abstratas: São classes que não podem ser instanciadas diretamente e são projetadas para serem subclassificadas;
Métodos Abstratos: Métodos definidos na classe abstrata que devem ser implementados pelas subclasses;
Implementação em JavaScript: Simulamos classes abstratas lançando erros no construtor e nos métodos que devem ser sobrescritos. */

// Classe Abstrata --- servindo somente como uma classe base para outras classes
class CarroPadrao {
    constructor() {
        if(new.target === CarroPadrao) {
            throw new Error("Esta classe não pode ser instanciada.")
        }
        if(!this.ligar || !this.desligar) {
            throw new Error("É obrigatório implementar o método 'ligar' ou 'desligar'.")
        }
        this.roda = 4
        this.porta = 4
        this.ligado = false
    }
}

class Carro extends CarroPadrao {
    constructor(p_Tipo_Carro, p_Estagio_Turbo) {
        super()
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
        console.log(this.roda)
        console.log(this.porta)
        console.log(this.ligado)
        console.log("------------------------")
    }

    ligar() {
        this.ligado = true
    }
    desligar() {
        this.ligado = false
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
        this.tipoInfo = 1
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
// const c4 = new CarroPadrao()

c1.info()
c2.info()

c3.ligar()
c3.info()


// OUTRO EXEMPLO (Usando Construtor para Impedir Instanciação) ————————————————————————————————————————————————————————————————————————————————
class Animal {
    constructor() {
        /* é uma meta-propriedade que se refere à função construtora específica que foi chamada. Se for igual à classe abstrata 'Animal',
        significa que alguém tentou instanciar 'Animal' diretamente, e lançamos um erro. */
        if(new.target === Animal) {
            throw new Error("Não é possível instanciar uma classe abstrata.")
        }
    }

    /* este método lança um erro indicando que deve ser sobrescrito pelas subclasses.
    Isso estimula o comportamento de um método abstrato que deve ser implementado nas subclasses. */
    fazerSom() {
        throw new Error("Este método deve ser substituído por subclasses.")
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log(`O cachorro late.`)
    }
}
class Gato extends Animal {
    fazerSom() {
        console.log(`O gato mia.`)
    }
}

try {
    const a = new Animal() // --- Isso lançará um erro
} catch (e) {
    console.error(e.message)
}

const cachorro = new Cachorro()
cachorro.fazerSom() // Output: O cachorro late.
const gato = new Gato()
gato.fazerSom() // Output: O gato mia.


// OUTRO EXEMPLO (Usando Métodos Abstratos) ———————————————————————————————————————————————————————————————————————————————————————————————————
class Objeto {
    constructor(p_Nome) {
        if(new.target === Objeto) {
            throw new Error("Não é possível instanciar uma classe abstrata.")
        }
        this.nome = p_Nome
    }

    emiteSom() {
        throw new Error("Este método deve ser substituído por subclasses.")
    }
}

class Chave extends Objeto {
    emiteSom() {
        console.log(`${this.nome} tinindo.`)
    }
}
class Clique extends Objeto {
    emiteSom() {
        console.log(`${this.nome} clicando.`)
    }
}

try {
    const a = new Objeto("Genérico") // --- Isso lançará um erro
} catch(e) {
    console.error(e.message)
}

const chave = new Chave("Chave")
chave.emiteSom()
const clique = new Clique("Clique")
clique.emiteSom()