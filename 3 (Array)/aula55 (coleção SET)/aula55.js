// COLEÇÃO SET: não permite entradas duplicadas de elementos, sendo mais restritas, não há chave-valor
const caixa = document.querySelector('#caixa')

let musicas = new Set(["Música 1", "Música boa", "Música 10"])
console.log(musicas)

musicas.add("Música muito legal") // É adicionado
musicas.add("Música 1") // Não é adicionado
musicas.add("Música 10") // Não é adicionado

// Output: irá permanecer com 'size' = 4
console.log(musicas)

// Aloca os valores da coleção 'musicas' à 'caixa'
musicas.forEach((el) => {
    caixa.innerHTML += el + "<br/>"
})
// OU
for(let el of musicas) {
    caixa.innerHTML += el + "<br/>"
}

musicas.delete("Música 10")
caixa.innerHTML = musicas.size