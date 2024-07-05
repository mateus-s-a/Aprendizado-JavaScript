// SWITCH - CASE

let colocacao = 6

switch(colocacao) {
    case 1:
        console.log("Primeiro Lugar")
        break

    case 2:
        console.log("Segundo Lugar")
        break

    case 3:
        console.log("Terceiro Lugar")
        break

    case 4: case 5: case 6:
        console.log("Premio de participação")
        break

    default:
        console.log("Não subiu ao podio")
        break
}


let mes = 11

switch(true) {
    case mes >= 1 && mes <= 3:
        console.log("Primeiro Trimestre")
        break

    case mes >= 4 && mes <= 6:
        console.log("Segundo Trimestre")
        break

    case mes >= 7 && mes <= 9:
        console.log("Terceiro Trimestre")
        break

    case mes >= 10 && mes <= 12:
        console.log("Quarto Trimestre")
        break

    default:
        console.log("Número do mês inválido.")
}