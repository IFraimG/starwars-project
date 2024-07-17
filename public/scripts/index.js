let sound = new Audio()
sound.src = '../audio/05090.mp3'
let sound2 = new Audio()
sound2.src = '../audio/05091.mp3'
setTimeout( () => sound.play(), 1000 )

console.log(
    '%cHello world ! ! !',
    'color: lightblue; font-size: 36px;' +
    'background: black; font-family: cursive;' +
    'text-shadow: 3px 3px 3px white; border: 1px solid #fff;'
)

let link1 = document.querySelector('.link1')
let link2 = document.querySelector('.link2')
let link3 = document.querySelector('.link3')
let link4 = document.querySelector('.link4')

let one = document.querySelector('.one')
let el = document.createElement('div')
let elSlider = document.createElement('div')
let slider = document.querySelector('.sliderImage')
let sliderLeft = document.querySelector('.sliderLeft')
let sliderRight = document.querySelector('.sliderRight')
let num = 0
let btnRight = document.querySelector('.btnRight')
    
let circle0 = document.querySelector('.circle0')
let circle1 = document.querySelector('.circle1')
let circle2 = document.querySelector('.circle2')
let circle3 = document.querySelector('.circle3')
let circle4 = document.querySelector('.circle4')

// Слайдер ----------------------

function getSlider() {
    slider.classList.add('img' + (num + 1))
    slider.classList.remove('img' + num)
    num += 1
    if (num >= 5) {
        slider.classList.add('img' + 0)
        slider.classList.remove('img' + num)
        num = 0
    }
}
let timerID = setInterval(getSlider, 4000)

function stopTimer() { clearInterval(timerID) }

slider.addEventListener('click', () => {
    sound2.play()
    setTimeout(() => window.location.href = 'films.html', 1400)
})

sliderLeft.addEventListener('click', () => {
    stopTimer()
    if (num > 0) {
        slider.classList.add('img' + (num - 1))
        slider.classList.remove('img' + num)
        num -= 1
    }
    else num = 0
})

sliderRight.addEventListener('click', () => {
    stopTimer()
    if (num < 4) {
        slider.classList.add('img' + (num + 1))
        slider.classList.remove('img' + num)
        num += 1
    }
    else {
        slider.classList.add('img' + 0)
        slider.classList.remove('img' + 4)
        num = 0
    }
})

circle0.addEventListener('click', () => {
    if (num != 0) slider.classList.remove('img' + num)
    slider.classList.add('img' + 0)
    num = 0
    stopTimer()
})
circle1.addEventListener('click', () => {
    slider.classList.add('img' + 1)
    if (num != 1) slider.classList.remove('img' + num)
    num = 1
    stopTimer()
})
circle2.addEventListener('click', () => {
    slider.classList.add('img' + 2)
    if (num != 2) slider.classList.remove('img' + num)
    num = 2
    stopTimer()
})
circle3.addEventListener('click', () => {
    slider.classList.add('img' + 3)
    if (num != 3) slider.classList.remove('img' + num)
    num = 3
    stopTimer()
})
circle4.addEventListener('click', () => {
    slider.classList.add('img' + 4)
    if (num != 4) slider.classList.remove('img' + num)
    num = 4
    stopTimer()
})
let menu = document.querySelector('.menu')

one.addEventListener('click', () => {
    sound.play()
    menu.classList.toggle('hide')
 })

let titleSlider = document.querySelector('.titleSlider')

slider.addEventListener('mouseover', () => titleSlider.style.visibility = 'visible')
slider.addEventListener('mouseout', () => titleSlider.style.visibility = 'hidden')

// Персонажи ----------------------

class Person {
    constructor(item) {
        this.item = item
    }
    push(container) {
        let card = document.createElement('div')
        card.className = this.item.classCard

        let cardBlock = document.createElement('div')
        cardBlock.className = this.item.classBlock

        let cardText = document.createElement('div')
        cardText.className = 'card__text'

        let cardTitle = document.createElement('div')
        cardTitle.className = 'card__title'
        cardTitle.innerHTML = this.item.name

        let cardSubtitle = document.createElement('div')
        cardSubtitle.className = 'card__subtitle'
        cardSubtitle.innerHTML = this.item.description

        card.appendChild(cardBlock)
        cardBlock.appendChild(cardText)
        cardText.appendChild(cardTitle)
        cardText.appendChild(cardSubtitle)
        container.appendChild(card)
    }
}

axios.get('/psItems').then((response) => {
    let psItems = response.data
    let cards = document.querySelector('.cards')
    for (let psItem of psItems) { new Person(psItem).push(cards) }
})
