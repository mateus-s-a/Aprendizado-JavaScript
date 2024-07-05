// OPERADOR ...SPREAD --> espalhar, dividir array

let n1 = [10, 20, 30], n2 = [11, 22, 33, 44], n3 = [...n1, ...n2]

console.log("n1: " + n1)
console.log("n2: " + n2)
console.log("n3: " + n3)
console.log("Tipo n3: " + typeof(n3))



const jogador1 = {nome: "Matthew", energia: 100, vidas: 3, mana: 150}
const jogador2 = {nome: "Nathan", energia: 100, vidas: 5, velocidade: 80}
const jogador3 = {...jogador1, ...jogador2}

console.log(jogador3)



const soma1 = (v1, v2, v3) => { // função de modelo arrow function
    return v1 + v2 + v3
}

let valores1 = [1, 5, 4]
console.log(soma1(...valores1)) // operador spread espalha os valores com os respectivos parâmetros da função soma1


function soma2(v4, v5, v6) { // função modelo clássico
    return v4 + v5 + v6
}

let valores2 = [1, 5, 4]
console.log(soma2(...valores2)) // operador spread espalha os valores com os respectivos parâmetros da função soma2



//HTML collection e Array
const objs1 = document.getElementsByTagName("div") // node.js não reconhece 'document', 'document' é uma implementação do DOM
const objs2 = [...document.getElementsByTagName("div")] // qtd de métodos/funções é muito maior usando ...spread

/*objs1.forEach(element => { // percorrer essa coleção
    console.log(element) // retornará erro, objs1 é um HTML collection e não array
});*/

objs2.forEach(element => { // percorrer essa coleção
    console.log(element)
    element.innerHTML = "Curso" // retornará os elementos que estão na coleção
});

console.log(objs1)
console.log(objs2)