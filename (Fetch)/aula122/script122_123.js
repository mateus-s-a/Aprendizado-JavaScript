// /* AULA 122 */
// // (opcional) criação do endpoint
// const endpoint122_123 = 'https://481d7751-200a-43f6-add8-6d1cf2f71884-00-3qriuime6ftj1.spock.replit.dev/'

// // FETCH para consumo de APIs em JS
// function fetchDadosEAtualizacao() {
//     fetch(endpoint122_123)
//     // .then(res => console.log(res)) // OUTPUT: 'Response {type: 'cors', url: 'https://481....spock.replit.dev/', redirected: false, status: 200, ok: true, …}'
//     // console.log(res) // OUTPUT: 'Promise {<pending>}'
    
//     // propriedade 'res' recebe a conversão
//     .then(res => res.json())
    
//     // propriedade 'dados' já recebe o valor da 'res' convertida em texto
//     .then(dados => {
//         console.log(dados) // OUTPUT: '{"valor":4}'
    
    
    
    
//         /* AULA 123 */
//         const p_temp = document.getElementById('p_temp')
//         const p_nivel = document.getElementById('p_nivel')
//         const p_pressao = document.getElementById('p_pressao')
        
//         p_temp.innerHTML = "Temperatura: " + dados.temperatura
//         p_nivel.innerHTML = "Nível: " + dados.nivel
//         p_pressao.innerHTML = "Pressão: " + dados.pressao
//     })
//     .catch(error => console.error("Erro ao buscar dados: ", error))
// }

// fetchDadosEAtualizacao()
// // setInterval(() => fetchDadosEAtualizacao(), 3000)