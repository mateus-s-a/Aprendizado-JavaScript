/* FUNÇÃO 3 --> funções parametrizadas, valores inseridos nos parâmetros*/

function texto(p1) {
    console.log(p1)
}

texto("Matthew") // função chamada, string 'Matthew' passada para 'p1', dentro da função utiliza 'p1'
texto(2024)
texto(19.8)



function soma(n1, n2) {
    console.log(n1 + n2)
}

soma(10, 5) // função chamada, números '10' e '5' passada para 'n1' e 'n2' respectivamente, dentro da função utiliza 'n1' e 'n2'



function soma_Vazia(n1 = 0, n2 = 0) { // assumindo antes valores para os parâmetros, valor padrão parâmetro
    console.log(n1 + n2)
}

soma_Vazia(10) // não dará erro passando somente 1 valor



function soma_Return(n1, n2) {
    let res = n1 + n2
    return res
}

let resSoma = soma_Return(5, 8)
console.log(resSoma)



let valor = 0
function add(v) {
    //return valor + v
    valor += v
}
/*valor = */add(30)
console.log("\nPrimeira soma: " + valor)

/*valor = */add(20)
console.log("Segunda soma: " + valor)