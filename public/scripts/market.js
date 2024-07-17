console.log(
    '%cЯ вам ничего не продам!!',
    'color: lightblue; font-size: 50px;' +
    'background: black; font-family: cursive;' +
    'text-shadow: 3px 3px 3px white; border: 1px solid #fff;'
)

document.addEventListener('DOMContentLoaded', function() { setTimeout(() => {if (isTel === false) modalWindow()}, 3000) })

let poster = document.querySelector('.poster')
poster.addEventListener('click', () => window.location.href = 'films.html')

// МОДАЛЬНОЕ ОКНО __________________________________
let modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['windowStyle']
});

let inputTovar1 = '<input type="text" class="inputTel1">'
let textareaTovar1 = '<input type="text" placeholder="Дополнительно:" class="textField1">'

function modalWindow() {
    modal.open()
    modal.setContent('<h1>Заполните анкету</h1><br><h4>Введите ваш email или номер телефона</h4>' + inputTovar1)
    modal.getContent(inputTovar1)
    modal.setFooterContent('')
    modal.addFooterBtn('Отправить', 'tingle-btn tingle-btn--primary', function() {
        isTel = true
        axios.get('/tel', {params: {tel: inputTovar1.value}})
        modal.close()
    })
    modal.addFooterBtn('Закрыть', 'tingle-btn tingle-btn--danger', function() {modal.close()})
}

let login = document.getElementById('sendBtn')
let username = document.getElementById('username')
let password = document.getElementById('password')
let loginForm = document.getElementById('loginForm')
let userData = document.getElementById('userData')
let leave = document.getElementById('leave')

// ДОБАВЛЕНИЕ ТОВАРА ВРУЧНУЮ _____________________
class ShopItem {
    constructor(item) {
        this.item = item
    }
    append(container) {
        let tovar = document.createElement('div')
        tovar.className = 'tovar'

        let img = document.createElement('img')
        img.src = this.item.img
        img.alt = this.item.alt

        let title = document.createElement('h1')
        title.className = 'text-title'
        title.innerHTML = this.item.title

        let description = document.createElement('p')
        description.innerHTML = this.item.description

        let rows = document.createElement('div')
        rows.className = 'rows'
        
        let price = document.createElement('p')
        price.className = 'price'
        price.innerHTML = this.item.price

        let btn = document.createElement('p')
        btn.className = 'buy btn btn-trigger btn-success'
        btn.innerHTML = 'Купить'

        let quantity = document.createElement('p')
        quantity.className = 'quantity'
        quantity.innerHTML = this.item.quantity

        tovar.appendChild(img)
        tovar.appendChild(title)
        tovar.appendChild(description)
        tovar.appendChild(rows)
        rows.appendChild(price)
        rows.appendChild(btn)
        rows.appendChild(quantity)
        container.appendChild(tovar)
    }
}

axios.get('/shopItems').then(function(response) {
    let shopItems = response.data
    for (let shopItem of shopItems) {
        let container = document.querySelector('.tovar__block')
        new ShopItem(shopItem).append(container)
    }
})

// ДОБАВЛЕНИЕ ТОВАРА _______________________________
let btnAdd = document.getElementById('btnAdd')
let inputTitle = document.getElementById('inputTitle')
let inputDescription = document.getElementById('inputDescription')
let inputQuantity = document.getElementById('inputQuantity')
let inputSell = document.getElementById('inputSell')

btnAdd.addEventListener('click', event => {
    axios.get('/tovarAdd', {params:{title: inputTitle.value, description: inputDescription.value, 
        quantity: inputQuantity.value, price: inputSell.value}}).then(response => {
            let shopItems = response.data
            let container = document.querySelector('.tovar__block')
            for (let shopItem of shopItems) new ShopItem(shopItem).append(container)
    })
})

// КОРЗИНА _______________________________
let card = document.getElementById('shoppingCart')
let btnOpen = document.querySelector('.card')
let closee = document.querySelector('.closee')
let isTel = false

class CartItem {
    constructor(title, count) {
        this.title = title
        this.count = count
    }
}

class Cart {
    constructor(shopList) {
        this.shopList = shopList
        this.items = []
    }
    addItem(title) {
        for (let item of this.items) {
            if (item.title === title) {
                item.count++
                this.refresh()
                return
            }
        }
        this.items.push(new CartItem(title, 1))
        this.refresh()
    }
    refresh() {
        this.shopList.innerHTML = ''
        for (let item of this.items) {
            let listItem = document.createElement('li')
            listItem.className = 'list-group-item'
            listItem.innerHTML = item.title + ', ' + item.count + ' товаров в продаже'
            this.shopList.appendChild(listItem)
            let btnItem = document.createElement('button')
            btnItem.className = 'btn btn-outline-primary btnM'
            btnItem.innerHTML = 'Отменить'
            listItem.appendChild(btnItem)
            btnItem.addEventListener('click', function(event) {
                item.count = 1
                listItem.remove()
            })
        }
        if (!this.items.length) {
            let listItem = document.createElement('li')
            listItem.className = 'list-group-item'
            listItem.innerHTML = 'Вы еще не купили не один товар.'
            this.shopList.appendChild(listItem)
        }
    }
}
btnOpen.addEventListener('click', function(event) {
    event.stopPropagation()
    card.classList.toggle('shopping-cart_hidden')
})
closee.addEventListener('click', () => card.classList.add('shopping-cart_hidden'))

let shopList = card.querySelector('.list-group')

let cardItem = new Cart(shopList)
cardItem.refresh()

let shoppingItems = document.querySelector('.tovar__block')
let btns = shoppingItems.querySelectorAll('.buy')
btns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        if (isTel == false) modalWindow()
        event.stopPropagation()
        let cartBody = event.target.parentElement
        console.log(cartBody)
        let name = cartBody.querySelector('.text-title')
        cardItem.addItem(name.innerHTML)
    })
})
