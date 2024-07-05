/*WHILE & DO...WHILE --> diferença entre eles

While: primeiro, execução lógica
se retornar true, executa o bloco
se retornar false, não executa o bloco

Do...While: primeiro, execução dos comandos, depois, execução lógica
garantia de execução uma vez
se execução lógica retornar false, não executa o bloco
*/

let n=10
do {
    console.log("Número: " + n)
    n++
} while(n<10)
console.log("Fim do programa.") // output: imprime pelo menos uma vez com 'do...while'