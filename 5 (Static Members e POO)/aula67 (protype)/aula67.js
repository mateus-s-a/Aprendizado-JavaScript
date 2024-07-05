/* Protype, irá servir para caso precise adicionar uma propriedade ou um método à um obj/classe */

const Nave = function(p_energia) {
    this.energia = p_energia
    this.disparos = 3
}

Nave.prototype.vidas = 3
Nave.prototype.disparar = function() {
    this.disparos > 0 ? this.disparos-- : undefined
}


const n1 = new Nave(100)

console.log(Nave)
console.log(n1)
console.log(n1.energia)
console.log(n1.vidas)

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
console.log(n1.disparos)