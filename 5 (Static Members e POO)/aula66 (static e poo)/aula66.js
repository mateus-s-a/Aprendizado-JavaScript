/* Membro Static, é usada em classes para definir métodos e propriedades que pertencem à classe em si, e não às instâncias da classe
métodos e propriedades estáticas podem ser acessados diretamente na classe */

class Npc {
    // 'Static' propriedade 'alerta' como falsa (false)
    static alerta = false
    constructor(p_energia) {
        this.energia = p_energia
    }
    info = function() {
        console.log(`Energia: ${this.energia}`)    
        console.log(`Alerta: ${Npc.alerta ? "Sim" : "Não"}`)
        console.log("------------------------------")
    }
    // 'Static' método 'alertar'
    static alertar = function() {
        Npc.alerta = true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(90)
const npc3 = new Npc(80)

// Agora todos os "npc's" irão receber a propriedade 'alerta' como verdadeira (true)
Npc.alerta = true
// OU
Npc.alertar()

npc1.info()
npc2.info()
npc3.info()