/* FUNÇÕES --> bloco de comandos, executar em um momento oportuno, armazenado à espera para ser chamado 

Sintaxe:

function nome(parâmetro) {}

nome: nome da função
parâmetro: conjunto de parâmetros para a função operar; sem parâmetros --> ()
*/

function nome() { // declaração da função
    console.log("JavaScript")
}

nome() // chamada tradicional de função

for(let i=0; i<5; i++) {
    nome() // chama 5 vezes
}


function soma2_10() {
    let n1 = 2, n2 = 10
    let soma = n1 + n2
    console.log(soma)
}

soma2_10()


function mudar_Texto() {
    let d1 = document.getElementById("d1")
    let d2 = document.getElementById("d2")
    let d3 = document.getElementById("d3")
    d1.innerHTML = "Aprendendo JavaScript"
    d2.innerHTML = "Aprendendo JavaScript"
    d3.innerHTML = "Aprendendo JavaScript"
}

