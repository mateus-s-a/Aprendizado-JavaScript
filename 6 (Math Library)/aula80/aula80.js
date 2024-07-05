/* Aula 80 - BIBLIOTECA MATH, é uma biblioteca que contém funções matemáticas */

const mat = document.getElementById('mat')

mat.innerHTML = Math.round(Math.random() * 100)
mat.innerHTML = Math.PI.toFixed(2) // Retorna o valor de PI com 2 casas decimais







/* MATH */
Math.round(Math.random() * 100) // Gera um número aleatório entre 0 e 100
Math.round(9.9) // Arredonda para cima
Math.floor(Math.random() * 100) // Gera um número aleatório entre 0 e 100
Math.ceil(9.9) // Arredonda para cima
Math.floor(9.9) // Arredonda para baixo
Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) // Retorna o menor número
Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) // Retorna o maior número
Math.pow(2, 10) // Retorna 2 elevado a 10
Math.sqrt(100) // Retorna a raiz quadrada de 100
Math.abs(-100) // Retorna o valor absoluto de -100
Math.sign(-100) // Retorna -1
Math.sign(0) // Retorna 0
Math.sign(100) // Retorna 1
Math.random() // Retorna um número aleatório entre 0 e 1
Math.random() * 100 // Retorna um número aleatório entre 0 e 100
Math.random() * 100 + 1 // Retorna um número aleatório entre 1 e 100
Math.floor(Math.random() * 100 + 1) // Retorna um número aleatório entre 1 e 100
Math.log(100) // Retorna o logaritmo de 100
Math.log(100, 10) // Retorna o logaritmo de 100 na base 10
Math.log(100, 2) // Retorna o logaritmo de 100 na base 2
Math.sin(0) // Retorna o seno de 0
Math.cos(0) // Retorna o cosseno de 0
Math.tan(0) // Retorna a tangente de 0
Math.PI // Retorna o valor de PI
Math.E // Retorna o valor de E (número de Euler)
Math.atan(1) // Retorna a tangente inversa de 1
Math.asin(0.5) // Retorna o arco seno de 0.5
Math.acos(0.5) // Retorna o arco cosseno de 0.5
Math.exp(1) // Retorna o número de Euler elevado a 1