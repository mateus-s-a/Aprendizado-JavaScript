/* operadores bitwise -> são parecidos com os operadores lógicos && e ||

EQUIVALÊNCIA entre dois números em BINÁRIO:
10 = 1010
11 = 1011
   = 1010 = 10

11 = 1011
14 = 1110
   = 1010 = 10
*/

let n1 = 11, n2 = 14, res = n1 & n2 // equivalente '&'
console.log(res) // output: 10


/* 
10 = 1010
11 = 1011
   = 1011 = 11

11 = 1011
14 = 1110
   = 1111 = 15
*/
let n3 = 10, n4 = 11, res2 = n3 | n4 // equivalente '|'
console.log(res2) // output: 11


/* 
10 = 1010
11 = 1011
   = 0001 = 1

13 = 1101
14 = 1110
   = 0011 = 3
*/
let n5 = 14, n6 = 13, res3 = n5 ^ n6 // equivalente '^'
console.log(res3) // output: 3


/* deslocamento de bits -> mover os bits para direita ou esquerda em um ou mais

(mover uma vez para direita dobra seu valor decimal)
10 = 1010 << 1 = 10100 = 20
10 = 1010 << 2 = 101000 = 40 --> dobro do dobro

(mover uma vez para esquerda divide pela metade seu valor decimal)
10 = 1010 >> 1 = 0101 = 101 = 5
30 = 11110 >> 1 = 01111 = 1111 = 15 
20 = 10100 >> 2 = 00101 = 101 = 5 --> metade da metade
*/
let n7 = 20, res4 = n7 >> 2
console.log(res4) // output: 5