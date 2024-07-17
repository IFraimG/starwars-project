let password = document.querySelector('.pass')
let check = document.getElementById('check')
let ps = document.getElementById('password')
let verif = document.getElementById('verifity')
let btn = document.querySelector('.btn')
let poster = document.querySelector('.poster-content')

let labelName = document.getElementById('labelName')
let labelEmail = document.getElementById('labelEmail')
let labelPass = document.getElementById('labelPassword')

let parent = document.body

let wrapper = document.querySelector('.wrapper')
let nameInp = document.getElementById('name')
let nameEmail = document.getElementById('email')
let nameCheck = document.getElementById('check')
let stop = document.createElement('div')

let form1 = document.querySelector('.form1')
let form2 = document.querySelector('.form2')
let adition = document.getElementById('adition-information')
let back = document.getElementById('back')

let myDate = document.getElementById('date')
let country = document.getElementById('country')
let field = document.getElementById('field')

let anim = document.createElement('div')
anim.innerHTML = 'Идет авторизация...'

let cancel = document.createElement('div')
cancel.innerHTML = 'Отмена'

let num = 3

password.addEventListener('change', function() {
    if (ps.type === 'password') ps.type = 'text'
    else ps.type = 'password'
})

poster.addEventListener('click', function() {window.location.href = 'films.html'})

btn.addEventListener('click', function() {
    axios.post('/reg', {username: nameInp.value, password: verifity.value, email: nameEmail.value, myDate: myDate.value, country: country.value, field: field.value})
    .then(function(response) {
        nameInp.value = ''
        verifity.value = ''
        ps.value = ''
        nameEmail.value = ''
        myDate.value = ''
        country.value = ''
        field.value = ''
    })
})

adition.addEventListener('click', function() {
    form1.classList.add('hide')
    form2.classList.remove('hide')
})
back.addEventListener('click', function() {
    form1.classList.remove('hide')
    form2.classList.add('hide')
})

nameInp.addEventListener('mouseover', function() {
    labelName.style.transition = 0.7 + 's'
    labelName.style.color = 'rgb(82, 205, 253)'
})

nameEmail.addEventListener('mouseover', function() {
    labelEmail.style.transition = 0.7 + 's'
    labelEmail.style.color = 'rgb(82, 205, 253)'
})

ps.addEventListener('mouseover', function() {
    labelPass.style.transition = 0.7 + 's'
    labelPass.style.color = 'rgb(82, 205, 253)'
})

ps.addEventListener('mouseout', function() {labelPass.style.color = 'rgb(121, 118, 118)'})
nameEmail.addEventListener('mouseout', function() {labelEmail.style.color = 'rgb(121, 118, 118)'})
nameInp.addEventListener('mouseout', function() {labelName.style.color = 'rgb(121, 118, 118)'})