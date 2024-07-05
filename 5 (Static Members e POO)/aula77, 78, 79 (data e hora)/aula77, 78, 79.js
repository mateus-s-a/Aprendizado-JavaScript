/* (Aula 77, 78, 79): DATA E HORA, 'Date' é uma função construtora, que, quando chamada, retorna um objeto com informaçes sobre a data e hora atual */

// 'data' recebe o objeto 'Date'
const timer = document.querySelector('#timer')
const div_data = document.querySelector('#div_data')
const div_relogio = document.querySelector('#div_relogio')
const hora_alarme = document.querySelector('#hora_alarme')
const tmp_alarme = document.querySelector('#tmp_alarme')
const btn_ativar = document.querySelector('#btn_ativar')
const btn_parar = document.querySelector('#btn_parar')

const som_alarme = new Audio('alarme.mp3')
som_alarme.loop = true // 'loop' recebe um booleano que indica se o som do alarme deve repetir
let ts_atual = null // 'ts_atual' recebe o timestamp atual
let ts_alarme = null // 'ts_alarme' recebe o timestamp do alarme
let alarme_ativo = false // 'alarme_ativo' recebe um booleano que indica se o alarme está ativo
let alarme_tocando = false // 'alarme_tocando' recebe um booleano que indica se o alarme está tocando

const data = new Date() // 'new' é uma palavra reservada que cria um novo objeto
const dia = data.getDate() + "/"
const mes = (data.getMonth() + 1) < 10 ? "0" + (data.getMonth() + 1) + "/" : (data.getMonth() + 1) + "/" // Se o mês for menor que 10, adiciona um '0' na frente
const ano = data.getFullYear()
const dataString = dia + mes + ano

div_data.innerHTML = dataString



/* EVENTOS */
btn_ativar.addEventListener('click', () => {
    if (alarme_ativo) {
        alert('Alarme já ativo')
    } else {
        ts_atual = Date.now() // 'ts_atual' recebe o timestamp atual
        ts_alarme = ts_atual + (tmp_alarme.value * 1000) // 'ts_alarme' recebe o timestamp atual mais o tempo do alarme em milissegundos
        alarme_ativo = true // 'alarme_ativo' recebe um booleano que indica se o alarme está ativo
        const dt_alarme = new Date(ts_alarme) // 'dt_alarme' recebe o objeto 'Date' com o timestamp do alarme
        hora_alarme.innerHTML = `Hora do Alarme: ${dt_alarme.getHours()}h ${dt_alarme.getMinutes()}min ${dt_alarme.getSeconds()}s`
    }
})

btn_parar.addEventListener('click', () => {
    if (alarme_ativo) {
        alert('Alarme desativado')
        alarme_ativo = false
        alarme_tocando = false
        hora_alarme.innerHTML = "Hora do Alarme: --:--:--"
        tmp_alarme.value = 0
        timer.classList.remove('alarme')
        som_alarme.pause()
        som_alarme.currentTime = 0
    }
})



/* FUNÇÃO */
const relogio = () => {
    const data = new Date()
    let hora = (data.getHours() < 10 ? "0" + data.getHours() : data.getHours()) + ":"
    let minuto = (data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes()) + ":"
    let segundo = (data.getSeconds() < 10 ? "0" + data.getSeconds() : data.getSeconds()) + "."
    let milissegundo = (data.getMilliseconds() < 10 ? "00" + data.getMilliseconds() : data.getMilliseconds() < 100 ? "0" + data.getMilliseconds() : data.getMilliseconds())
    div_relogio.innerHTML = hora + minuto + segundo + milissegundo

    if(alarme_ativo && !alarme_tocando) {
        if(data.getTime() >= ts_alarme) { // 'getTime()' retorna o timestamp atual
            timer.classList.add('alarme')
            alarme_tocando = true
            som_alarme.play()
        }
    }
}

const intervalo = setInterval(relogio, 1) // 'intervalo' recebe o 'setInterval' que executa a função 'relogio' a cada 1 milissegundo





/* TESTE */
console.log(`Ano: ${data.getFullYear()}`) // 'getFullYear()' retorna o ano atual
console.log(`Mês: ${data.getMonth() + 1}`) // 'getMonth()' retorna o mês atual, [0, 11]
console.log(`Dia: ${data.getDate()}`) // 'getDate()' retorna o dia atual
console.log(`Dia da semana: ${data.getDay() + 1}`) // 'getDay()' retorna o dia da semana atual, [0, 6]
console.log(`Hora: ${data.getHours()}`) // 'getHours()' retorna a hora atual
console.log(`Minuto: ${data.getMinutes()}`) // 'getMinutes()' retorna os minutos atual
console.log(`Segundo: ${data.getSeconds()}`) // 'getSeconds()' retorna os segundos atual
console.log(`Milissegundo: ${data.getMilliseconds()}`) // 'getMilliseconds()' retorna os milissegundos atual