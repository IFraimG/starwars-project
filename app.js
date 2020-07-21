let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let fs = require('fs')

app.use('/', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let messages = []
let komments = []
let clients = []
let cart = []
let figthers = []
let tokens = []
let tels = []
let tovars = []

class Message {
    constructor(user, text) {
        this.user = user
        this.text = text
    }
}

app.get('/profile', function(req, res) { res.send('Тут что то есть') }) 

app.get('/send', function(req, res) {
    let user = req.query.user
    let text = req.query.text
    let message = new Message(user, text)
    messages.push(message)
    for(client of clients) { client.send(JSON.stringify(message)) }
    res.send('okk')
})

app.get('/sendText', function(req, res) {
    let user = req.query.user
    let text = req.query.text
    let komment = new Message(user, text)
    komments.push(komment)
    for(client of clients) { client.send(JSON.stringify(komment)) }
    res.send('okk')
})

app.get('/recieve', function(req, res) { res.send(messages) })
app.get('/komments', function(req, res) { res.send(komments) })

app.get('/tel', function(req, res) {
    let tel = req.query.tel
    tels.push(tel)
    res.send(tel)
})
class User {
    constructor(username, password, email, myDate, country, field) {
        this.username = username
        this.password = password
        this.email = email
        this.myDate = myDate
        this.country = country
        this.field = field
    }
}

let users = []
users.push(new User('abc', '123'))

// СОХРАНЕНИЕ ПОЛЬЗОВАТЕЛЕЙ
fs.readFile('users.json', function(err, data) {
    if (err) return console.log('error: ' + err)
    users = JSON.parse(data.toString())
})
// РЕГИСТРАЦИЯ
app.post('/reg', function(req, res) {
    let username = req.body.username
    let password = req.body.password
    let email = req.body.email
    let myDate = req.body.myDate
    let country = req.body.country
    let field = req.body.field
    users.push(new User(username, password, email, myDate, country, field))
    fs.writeFile('users.json', JSON.stringify(users), function(err, data) {
        if (err) return console.log(err)
    })
    res.send(users)
})

// ТОВАРЫ ДОБАВЛЕННЫЕ ВРУЧНУЮ
app.get('/shopItems', function(req, res) {
    fs.readFile('shopItems.json', function(err, data) {
        if (err) return res.send('No products...')
        let shopItems = JSON.parse(data.toString())
        res.send(shopItems)
    })
})

// ПЕРСОНАЖИ
app.get('/psItems', function(req, res) {
    fs.readFile('persons.json', function(err, data) {
        if (err) return res.send('No persons...')
        let psItems = JSON.parse(data.toString())
        res.send(psItems)
    })
})

class Tovar {
    constructor(img, title, description, price, quantity) {
        this.img = img
        this.title = title
        this.description = description
        this.price = price + '₽'
        this.quantity = quantity + ' товаров в продаже'
    }
}

app.get('/tovarAdd', function(req, res) {
    let title = req.query.title
    let description = req.query.description
    let price = req.query.price
    let quantity = req.query.quantity
    tovars.push(new Tovar('legoImg/noimage.png', title, description, price, quantity))
    fs.writeFile('shopItems.json', JSON.stringify(tovars), function(err, data) {
        if (err) return console.log(err)
    })
    res.send(tovars)
})

fs.readFile('shopItems.json', function(err, data) {
    if (err) return console.log('error: ' + err)
    tovars = JSON.parse(data.toString())
})

app.listen(8000, function() { console.log('Сервер запущен! 8000') })

let webSocket = require('ws')
const wServer = new webSocket.Server( {port: 1001} )
wServer.on('connection', function(ws) { clients.push(ws) })