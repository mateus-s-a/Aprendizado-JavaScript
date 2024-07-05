// addEventListener (1)

// const c1 = document.getElementById('c1')
// OU
const c1 = document.querySelector("#c1")

// function msg() {
//     alert("clicou")
// }
// OU
const msg = () => {
    alert("clicou")
}

// c1.addEventListener("click", msg)
// OU
// c1.addEventListener("click", () => {alert('clicou')})
// OU
c1.addEventListener("click", () => { msg() })

c1.addEventListener("click", (evt) => { console.log(evt.target) }) // imprime no console o elemento que foi adicionado um evento nele
c1.addEventListener("click", (evt) => {
    const el = evt.target
    el.classList.add("destaque") // quando clicaco o elemento recebe a classe 'destaque' que contém outras características de estilo
})



const cursos = [...document.querySelectorAll(".curso")]
cursos.map((el) => {
    el.addEventListener("click", (evt) => {
        const el = evt.target
        el.classList.add("destaque") // quando clicaco todos os elementos recebem a classe 'destaque' que contém outras características de estilo
        console.log(el.id + " foi clicado") // quando clicado mostra ao console qual elemento id foi clicado
        console.log(el.innerHTML + " foi clicado") // quando clicado mostra ao console que texto do elemento foi clicado
    })
})