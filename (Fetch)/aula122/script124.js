/* AULA 124 */ /* fazer um envio ('POST'), para a API receber estes dados e poder gravar em um DB por exemplo */
const p_o2 = document.getElementById('p_o2')
const p_velocidade = document.getElementById('p_velocidade')
const p_massa = document.getElementById('p_massa')
const btn_texto = document.getElementById('btn_texto')

const obterDados = () => {
    const endpoint124 = 'https://481d7751-200a-43f6-add8-6d1cf2f71884-00-3qriuime6ftj1.spock.replit.dev/'
    fetch(endpoint124) // padrão — method: "get"
    .then(res => res.json())
    .then(dados => {
        console.log(dados)
        p_o2.innerHTML = "Oxigênio: " + dados.oxigenio
        p_velocidade.innerHTML = "Velocidade: " + dados.velocidade
        p_massa.innerHTML = "Massa: " + dados.massa
    })
}

let dados = {
    nome: "Matthew",
    curso: "Eng. da Computação",
    linguagem: "C99"
}

// (opcional) variável 'let cabecalho'
let cabecalho = {
    method: "POST",
    body:JSON.stringify(dados) // pega os dados a serem gravados, passa ao 'body', os converte em um JSON
}

const gravarDados = () => {
    const endpoint124 = 'https://481d7751-200a-43f6-add8-6d1cf2f71884-00-3qriuime6ftj1.spock.replit.dev/'
    fetch(endpoint124, cabecalho)
    .then(res => res.json())
    .then(ret => {
        console.log(ret)
    })
}

btn_texto.addEventListener('click', () => gravarDados())