// IF - ELSE

let n = 40

if(n > 10) {
    //console.log("Comando 2")
    console.log("Numeral maior que 10") // somente executa com condição
    if(n > 50) {
        console.log("Numeral maior que 50")
    }
} else if(n > 5) {
    console.log("Numeral esta entre 6 e 10") // senão se
} else {
    console.log("Numeral menor ou igual a 5") // senão
}

console.log("Fim do programa.") // executa independentemente da condição acima



let energia = 50, clima = "Sol"

if(energia > 70 && clima == "Sol") {
    console.log("Vou à praia")
} else {
    console.log("Vou ao cinema")
}