/*operadores lógicos
&& -> and (e)
|| -> or (ou)
! -> not (não)
*/

let n1 = 10, n2 = 5, n3 = 15, n4 = 2

console.log((n1>n2) && (n1>n3)) // output: false
console.log((n1>n2) || (n1>n3)) // output: true
console.log(!((n1>n2) || (n1>n3))) // output: false

if( (n1>n2) && (n3>n4) ) { // se, n1 maior que n2 , E, n3 maior que n4...
    console.log("verdadeiro")
} else {
    console.log("falso")
}

if( (n1>n2) || (n3>n4) ) { // se, n1 maior que n2 , OU, n3 maior que n4...
    console.log("verdadeiro")
} else {
    console.log("falso")
}

if( !(n1>n2) && (n3>n4) ) { // se, NÃO, n1 maior que n2 , E, n3 maior que n4...
    console.log("verdadeiro")
} else {
    console.log("falso")
}