/* Aula 82, 83, 84, 85, 86 - Prática de Classes: geração de objetos(bolinhas) que rebatem em no container 'palco',
e a quantidade de objetos é controlada pelo input 'num_objetos' e o texto do input é atualizado no span 'txt_quantidade' */

const palco = document.querySelector('#palco')
const num_objetos = document.querySelector('#num_objetos')
const txt_quantidade = document.querySelector('#txt_quantidade')
const btn_add = document.querySelector('#btn_add')
const btn_remover = document.querySelector('#btn_remover')

let largura_palco = palco.offsetWidth // 'offsetWidth' é a propriedade do DOM que retorna a largura do elemento em pixels
let altura_palco = palco.offsetHeight // 'offsetHeight' é a propriedade do DOM que retorna a altura do elemento em pixels
let bolas = []
let num_bolas = 0
let contador_bolas = 0

class Bola {
    constructor(array_bolas, palco, id_bola) {
        this.array_bolas = array_bolas
        this.palco = palco
        this.id_bola = id_bola
        this.controle_bola = setInterval(() => this.controlar(), 10)
        this.eu = document.getElementById(`bola_${this.id_bola}`)
        this.raio = Math.floor((Math.random() * 22) + 7)
        this.cor = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
        this.posicao_x = Math.floor(Math.random() * (largura_palco - 2 * this.raio)) + this.raio
        this.posicao_y = Math.floor(Math.random() * (altura_palco - 2 * this.raio)) + this.raio
        this.velocidade_x = Math.floor(Math.random() * 3) - 1.5
        this.velocidade_y = Math.floor(Math.random() * 3) - 1.5
        this.direcao_y = Math.random() < 0.5 ? -1 : 1
        this.direcao_x = Math.random() < 0.5 ? -1 : 1

        num_objetos.innerHTML = ++num_bolas
        this.desenhar()
    }

    minhaPosicao() {
        return this.array_bolas.indexOf(this)
    }

    desenhar() {
        this.eu = document.createElement('div')
        this.eu.setAttribute('id', `bola_${this.id_bola}`)
        this.eu.setAttribute('class', 'bola')
        this.eu.setAttribute('style', `background-color: rgb(${this.cor[0]}, ${this.cor[1]}, ${this.cor[2]}); width: ${this.raio}px; height: ${this.raio}px; position: absolute; top: ${this.posicao_y}px; left: ${this.posicao_x}px;`)
        this.palco.appendChild(this.eu)
    }

    remover() {
        clearInterval(this.controle_bola)
        bolas = bolas.filter((b) => b.id_bola !== this.id_bola)
        if(this.eu) this.eu.remove()
        bolas.forEach((b) => {
            if(b.id_bola !== this.id_bola && b.eu) b.eu.remove()
        })
        num_objetos.innerHTML = --num_bolas
        contador_bolas--
    }

    colisao_bordas() {
        if(this.posicao_x + this.raio >= largura_palco) this.direcao_x = -1
        else if(this.posicao_x <= 0) this.direcao_x = 1
        if(this.posicao_y + this.raio >= altura_palco) this.direcao_y = -1
        else if(this.posicao_y <= 0) this.direcao_y = 1
    }

    controlar() {
        this.colisao_bordas()
        this.posicao_x += this.direcao_x * this.velocidade_x
        this.posicao_y += this.direcao_y * this.velocidade_y
        if(this.eu) this.eu.setAttribute('style', `background-color: rgb(${this.cor[0]}, ${this.cor[1]}, ${this.cor[2]}); width: ${this.raio}px; height: ${this.raio}px; position: absolute; top: ${this.posicao_y}px; left: ${this.posicao_x}px;`)
        if((this.posicao_x > largura_palco) || (this.posicao_y > altura_palco)) this.remover()
    }
}

window.addEventListener('resize', () => {
    largura_palco = palco.offsetWidth
    altura_palco = palco.offsetHeight
})

btn_add.addEventListener('click', () => {
    for(let i = 0; i < txt_quantidade.value; i++) {
        bolas.push(new Bola(bolas, palco, contador_bolas++))
        num_objetos.innerHTML = ++num_bolas
    }
})

btn_remover.addEventListener('click', () => {
    bolas.map((b) => {
        b.remover()
    })
})