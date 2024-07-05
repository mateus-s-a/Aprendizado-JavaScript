// AULA 92
const cursos = ["JavaScript", "PHP", "HTML", "CSS", "SCSS", "Python"]
const marcasCarros = ["Chevrolet", "Renault", "BMW", "Volkswagen", "Fiat", "Ford"]

export {cursos, marcasCarros}

    // OU

export const cursos2 = ["JavaScript", "PHP", "HTML", "CSS", "SCSS", "Python"]
export const marcasCarros2 = ["Chevrolet", "Renault", "BMW", "Volkswagen", "Fiat", "Ford"]




// AULA 93
export const cursos3 = ["React", "Java", "C", "C#", "C++"]
export function pegueTodosElementos() {
    return cursos3
}

export const cursos4 = ["Assembly", "brainf*ck", "Lua", "Godot", "GML"]
export default function pegueTodosElementos2() {
    return cursos4
}

export function pegueCurso(index_curso) {
    console.log(cursos4[index_curso])
}




// AULA 94 | IMPORTAÇÕES NOMEADAS
export const
    nomes = ["Samuel", "Thomas", "José", "Rodrigo", "Gabriel"],
    sobrenomes = ["Souza", "Silva", "Suares", "Rodrigues", "Enzo"]