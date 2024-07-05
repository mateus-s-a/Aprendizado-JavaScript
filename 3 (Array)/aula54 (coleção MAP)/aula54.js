// COLEÇÃO MAP
const caixa = document.querySelector('#caixa')

let mapa = new Map()

// Adicionar elementos ao 'mapa', padrão chave-valor, valores são referenciados pelas chaves.
mapa.set("curso", "JavaScript")
mapa.set(10, "nota")
mapa.set(1, 100)
mapa.set("canal", 100)

console.log(mapa)

// Usando o método 'get()' para alocar o valor 'JavaScript', da chave 'curso', dentro da 'caixa'
caixa.innerHTML = mapa.get("curso")

// Usando o método 'has()' para verificar se há uma possível chave 'canal' dentro da coleção 'mapa'
const percorrer = (req) => {
    if(mapa.has(req)) {
        caixa.innerHTML = "A chave existe na coleção."
    } else {
        caixa.innerHTML = "A chave NÃO existe na coleção."
    }
}
percorrer(10)

// Usando a propriedade 'size' para alocar o valor da qtd da coleção 'mapa'
caixa.innerHTML = mapa.size

// Usando o método 'delete' para deletar a chave-valor da coleção 'mapa'
mapa.delete("canal", 100)
caixa.innerHTML = mapa.size