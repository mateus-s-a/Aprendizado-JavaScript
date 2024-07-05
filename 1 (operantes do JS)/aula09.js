//pré-incremento

let n = 10

n++ // incremento: 11
console.log(n)

n--
console.log(++n) // pré-incremento: 11

n--
console.log(n++) // output: 10
console.log(n) // output: 11

n--
console.log(--n) // pré-decremento: 9

n = 10
let x = -n
console.log(x, -x) // jogo de sinais

let n2 = 20
console.log(n + n2) // output: operador de soma
console.log(n + "" + n2) // output: operador de concatenação