/* declarações BREAK e CONTINUE 

Break: interrupção na execução, para o loop, pare iteração e continue o programa (fora do loop)
Continue: para somente uma iteração em específico, pare iteração e continue para a próxima iteração (dentro do loop)
*/

let n = 0, max = 100, par = 0

while(n < max) {
    console.log("JavaScript: " + n)
    if(n > 10) {
        break // quebra o loop se n for maior que 10
    }
    n++
}
console.log("Fim do programa\n")


n = 0
for(let i = n; i<max; i++) {
    console.log("Python: " + i)
    if(i % 2 != 0) {
        continue // quando o n for ímpar, não executa essa iteração, continue para a próxima 
    }
    par++ // logo, ele executa essa iteração
}
console.log("Qtd de pares: " + par)
console.log("Fim do segundo programa")