/* FUNÇÕES 2 --> funções que retornam valores, return, valores retornados para quando é chamado*/

function teste_Console() {
    let n1 = 10, n2 = 2
    let res = n1 * n2
    if(res % 2 == 0) {
        return "Par"
    } else {
        return "Impar" // não garantir ter 2 return's ao mesmo tempo, somente 1
    }
}

let num = teste_Console() // variável recebe o retorno da função teste_Console, o valor string 'Par'
console.log(num)