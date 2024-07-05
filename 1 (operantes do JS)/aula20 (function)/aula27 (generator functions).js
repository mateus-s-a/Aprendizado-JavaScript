/* FUNÇÕES GERADORAS -->  possui seu return adiado até o momento necessitado;
pilar da programação assícrona;
retornando valores ao longo da execução;

function* --> função geradora
yield --> retornos
next() --> próximo retorno
.value --> valor desse retorno
*/

function* cores() {
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

let itc = cores() // variável 'let itc' recebe função
console.log(itc.next().value) // output: Vermelho
console.log(itc.next().value) // output: Verde
console.log(itc.next().value) // output: Azul
console.log(itc.next().value) // output: undefined



function* perguntas() {
    const nome = yield 'Qual seu nome?' // cria-se um yield em um const, permite armazenamento na const, no momento de chamada
    const esporte = yield 'Qual seu esporte favorito?'
    return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte
}

let itc2 = perguntas()
console.log(itc2.next().value) // faz a execução da função geradora avançar até o primeiro yield
console.log(itc2.next('Matthew').value)
console.log(itc2.next('Corrida').value)



function* contador() {
    let i = 0
    while(true) { // loop infinito de contador, mas somente quando for chamada
        yield i++
        if(i > 5) {
            break
        }
    }
}

const itc3 = contador()
for(c of itc3) {
    console.log(c)
}