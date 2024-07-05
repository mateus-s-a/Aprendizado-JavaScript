/* operações ternárias
0 = False
1 = True

Teste lógico ? se verdadeiro : se falso
*/

let n = 10, res = n%2

// forma if-else
if(res == 0) {
    console.log("Par")
} else {
    console.log("Impar")
}

res = (n%2 ? "Par" : "Impar") // errado
console.log(res)

res = (!(n%2) ? "Par" : "Impar") // certo
console.log(res)


let n2 = 20
res = (n > n2 ? "Verdadeiro" : "Falso")
console.log(res)


let st = "A"
res = (st == "A" ? "Ativo" : "Inativo")
console.log(res)