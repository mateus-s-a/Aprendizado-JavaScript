/* ORIENTAÇÃO À OBJETOS: objetos literais (aula64), conversão JSON em objetos, vice-versa */

const pessoa = {
    nome: "Matthew",
    curso: "JavaScript",
    data: "09/06/2024",
    aulas: {
        aula01: "Introdução",
        aula02: "Variáveis",
        aula02: "Condicional",
    }
}
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.aulas.aula01)



// Método 'stringfy' serve para converter o objeto literal em uma string JSON
const s_json_pessoa = JSON.stringify(pessoa)
console.log(pessoa)
console.log(s_json_pessoa)

// Método 'parse' serve para converter a string JSON em um objeto literal
const obj_json_pessoa = JSON.parse(s_json_pessoa)
console.log(obj_json_pessoa)