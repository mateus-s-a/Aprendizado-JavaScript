// AULA 92
import { cursos2, marcasCarros2 } from "./module.js"

console.log("Servidor online.")
console.log(cursos2)
console.log(marcasCarros2)



// AULA 93
import { cursos3, pegueTodosElementos } from "./module.js"
import pegueTodosElementos2, { cursos4 } from "./module.js" // 'export default' não precisa de {chaves}
import { pegueCurso } from "./module.js"

console.log(cursos3)
console.log(pegueTodosElementos())

console.log(cursos4)
console.log(pegueTodosElementos2())

pegueCurso(2) // Lua




// AULA 94 | IMPORTAÇÕES NOMEADAS
import { nomes as nomesExemplos, sobrenomes as sobrenomesExemplos } from "./module.js"
import * as tudo from "./module.js"

console.log(nomesExemplos)
console.log(sobrenomesExemplos)

console.log(tudo) // imprime todo o 'module.js' dentro de 'Module {...}'
console.log(tudo.default) // imprime somente a importação 'default(pegueTodosElementos2())'
for (const key in tudo) { // imprime todo o 'module.js' normalmente
    if (Object.hasOwnProperty.call(tudo, key)) {
        console.log(tudo[key]) 
    }
}