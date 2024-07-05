/* LOOP
for: definido;
while: indefinido;
do while: indefinido;
*/

// for(início; condição; contador) { }

console.log("Início do programa:")
for(let i=0; i<100; i++) { // execução do loop enquanto i for menor que 100
    if(i%2 == 0) {
        console.log("Número Par: " + i)
    } else {
        console.log("Número Impar: " + i)
    }
}

console.log("Fim do programa.")
