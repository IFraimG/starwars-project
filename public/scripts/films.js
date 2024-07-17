console.log(
    '%cВ видео присутствует реклама >:0',
    'color: lightblue; font-size: 50px;' +
    'background: black; font-family: cursive;' +
    'text-shadow: 3px 3px 3px white; border: 1px solid #fff;'
)

let sliderImage = document.querySelector('.sliderImage')
let elPlay = document.createElement('div')
let block = document.querySelector('.main__block')

let el0 = document.querySelector('.sliderTest')
let slider = document.querySelector('.slider')
let el1 = document.createElement('iframe')
el1.classList.add('sliderContent')
let el2 = document.createElement('iframe')
el2.classList.add('sliderContent')
let el3 = document.createElement('iframe')
el3.classList.add('sliderContent')
let el4 = document.createElement('iframe')
el4.classList.add('sliderContent')
let el5 = document.createElement('iframe')
el5.classList.add('sliderContent')
let el6 = document.createElement('iframe')
el6.classList.add('sliderContent')
let el7 = document.createElement('iframe')
el7.classList.add('sliderContent')
let el8 = document.createElement('iframe')
el8.classList.add('sliderContent')
let el9 = document.createElement('iframe')
el9.classList.add('sliderContent')

let seria = document.querySelectorAll('seria')
let seria0 = document.querySelector('.seria0')
let seria1 = document.querySelector('.seria1')
let seria2 = document.querySelector('.seria2')
let seria3 = document.querySelector('.seria3')
let seria4 = document.querySelector('.seria4')
let seria5 = document.querySelector('.seria5')
let seria6 = document.querySelector('.seria6')
let seria7 = document.querySelector('.seria7')
let seria8 = document.querySelector('.seria8')

function hide() { elPlay.classList.add('hided') }

function videoPlay() {
elPlay.classList.toggle('sliderImage')
slider.appendChild(elPlay)
}
function videoType(el) {
el.allowfullscreen = true
el.frameborder = 0
}
function videoSrc(el, linkSrc) {
el.src = linkSrc
}
function elRemove(el0,el1,el2,el3,el4,el5,el6,el7,el8) {
el0.remove()
el1.remove()
el2.remove()
el3.remove()
el4.remove()
el5.remove()
el6.remove()
el7.remove()
el8.remove()
}

slider.addEventListener('click', () => sliderImage.classList.add('hided'))

el1.addEventListener('click', () => {hide();videoType(el1)})
el2.addEventListener('click', () => {hide(); videoType(el2)})
el3.addEventListener('click', () => {hide();videoType(el3)})
el4.addEventListener('click', () => {hide();videoType(el4)})
el5.addEventListener('click', () => {hide();videoType(el5)})
el6.addEventListener('click', () => {hide();videoType(el6)})
el7.addEventListener('click', () => {hide();videoType(el7)})
el8.addEventListener('click', () => {hide();videoType(el8)})
el9.addEventListener('click', () => {hide();videoType(el9)})

seria0.addEventListener('click', () => {
videoPlay()
sliderImage.classList.remove('hided')
videoSrc(el9, "https://player.vimeo.com/video/390974844")
slider.insertBefore(el9, block)
elRemove(el0,el1,el2,el3,el4,el5,el6,el7,el8)
})

seria1.addEventListener('click', () => {
videoPlay()
sliderImage.classList.remove('hided')
videoSrc(el1, "https://player.vimeo.com/video/390331691")
slider.insertBefore(el1, block)
elRemove(el0,el9,el2,el3,el4,el5,el6,el7,el8)
})
seria2.addEventListener('click', () => {
videoPlay()
sliderImage.classList.remove('hided')
videoSrc(el2, "https://player.vimeo.com/video/390967449")
slider.insertBefore(el2, block)
elRemove(el0,el1,el9,el3,el4,el5,el6,el7,el8)
})
seria3.addEventListener('click', () => {
videoPlay()
sliderImage.classList.remove('hided')
videoSrc(el3, "https://player.vimeo.com/video/390973226")
slider.insertBefore(el3, block)
elRemove(el0,el1,el2,el9,el4,el5,el6,el7,el8)
})
seria4.addEventListener('click', () => {
videoPlay()
sliderImage.classList.remove('hided')
videoSrc(el4, "https://player.vimeo.com/video/390975901")
slider.insertBefore(el4, block)
elRemove(el0,el1,el2,el3,el9,el5,el6,el7,el8)
})
seria5.addEventListener('click', () => {
videoPlay()
sliderImage.classList.remove('hided')
videoSrc(el5, "https://player.vimeo.com/video/390979853")
slider.insertBefore(el5, block)
elRemove(el0,el1,el2,el3,el4,el9,el6,el7,el8)
})
seria6.addEventListener('click', () => {
videoPlay()
sliderImage.classList.remove('hided')
videoSrc(el6, "https://player.vimeo.com/video/390981509")
slider.insertBefore(el6, block)
elRemove(el0,el1,el2,el3,el4,el5,el9,el7,el8)
})
seria7.addEventListener('click', () => {
videoPlay()
sliderImage.classList.remove('hided')
videoSrc(el7, "https://player.vimeo.com/video/391426955")
slider.insertBefore(el7, block)
elRemove(el0,el1,el2,el3,el4,el5,el6,el9,el8)
})
seria8.addEventListener('click', () => {
videoPlay()
sliderImage.classList.remove('hided')
videoSrc(el8, "https://player.vimeo.com/video/391428200")
slider.insertBefore(el8, block)
elRemove(el0,el1,el2,el3,el4,el5,el6,el7,el9)
})

let menuOpen = document.querySelector('.one')
let menu = document.querySelector('.menu')

menuOpen.addEventListener('click', () => menu.classList.toggle('hide') )

// ЭФФЕКТ ПЕЧАТНОЙ МАШИНКИ ---------------------------

const tl = new TimelineMax()
let text = 'Информация о сериале'
let textTwo = 'Описание сюжета «Мандалорец»'

let inputName = document.querySelector('.inputName')
let inputMessage = document.querySelector('.inputMessage')

document.addEventListener('DOMContentLoaded', () => {
    tl.fromTo('.type-me', 3, {
        width: '0',
    }, {
        width: '1000px',
        ease:  SteppedEase.config(text.length)
    }, 0)

    tl.fromTo('.type-meTwo', 3, {
        width: '0',
    }, {
        width: '1000px',
        ease: SteppedEase.config(textTwo.length)
    }, 0)
})

inputName.addEventListener('click', () => inputName.classList.toggle('clickInput'))
inputMessage.addEventListener('click', () => inputMessage.classList.toggle('clickInput'))

// КОММЕНТАРИИ 

let inpName = document.querySelector('.inputName')
let inpMessage = document.querySelector('.inputMessage')
let btn = document.querySelector('.btnSend')
let pole = document.querySelector('.field')

btn.addEventListener('click', () => {
    axios.get('/sendText', {params: {user: inpName.value, text: inpMessage.value}})
    .then(function(response) { inpName.disabled = true })
})

receiv()

function receiv() {
    axios.get('/komments').then(function(response) {
        let komments = response.data
        inpMessage.value = ''
        for (komment of komments) {
            pole.value += komment.user + ': ' + komment.text + '\n'
        }
    })
}

let socket = new WebSocket('ws://localhost:1001')

socket.onmessage = event => {
    inpMessage.value = ''
    let komment = JSON.parse(event.data)
    pole.value += komment.user + ': ' + komment.text + '\n'
}
