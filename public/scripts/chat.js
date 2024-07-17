let inpName = document.querySelector('.inputName')
let inputText = document.querySelector('.inputText')
let btn = document.querySelector('.send')
let pole = document.querySelector('.text-field')
let el = document.createElement('div')
let btnDown = document.querySelector('.btnDown')

btn.addEventListener('click', function() {
    axios.get('/send', {params:{user: inpName.value, text: inputText.value}})
    inpName.disabled = true
})

btnDown.addEventListener('click', function() {pole.scrollTop = pole.scrollHeight})

btnDown.addEventListener('contextmenu', function(event) {event.preventDefault()})
btn.addEventListener('contextmenu', function(event) {event.preventDefault()})

function receiv() {
    axios.get('/recieve').then(function(response) {
        let messages = response.data
        for (message of messages) {
            pole.value += message.user + ': ' + message.text + '\n'
        }
    })
}

let socket = new WebSocket('ws://localhost:1001')

socket.onopen = function() {
    receiv()
    el.innerHTML = 'Новый пользователь присоединился в чат!'
    el.classList.add('alert')
    document.body.appendChild(el)
    setTimeout(function() {
        el.classList.remove('alert')
        el.remove()
    }, 3000)
}

socket.onmessage = function(event) {
    inputText.value = ''
    let message = JSON.parse(event.data)
    pole.value += message.user + ': ' + message.text + '\n'
}