// FOR IN e FOR OF

let n = [10, 20, 30, 40, 50]

/*for(let i=0; i<n.length; i++) {
    console.log(n[i])
}*/

for(num in n) { // imprime as posições no console node.js, pode percorrer coleções de POSIÇÕES
    console.log(num)
}

for(num of n) { // imprime os valores no console node.js, pode percorrer coleções dos VALORES
    console.log(num)
}



const objs = document.getElementsByTagName("div")

for(o in objs) {
    console.log(objs[o].innerHTML)
}

for(o of objs) {
    console.log(o.innerHTML = "Test")
}