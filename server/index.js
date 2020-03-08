require('dotenv').config()
const express = require('express')
    massive = require('massive')
    session = require('express-session')
    authCtrl = require('./authCtrl')
    chatMenuCtrl = require('./chatMenuCtrl')
    chatRoomCtrl = require('./chatRoomCtrl')
    messageCtrl = require('./messageCtrl')
    userMenuCtrl = require('./userMenuCtrl')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    secret: SESSION_SECRET
}))

//MASSIVE
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    }
}).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT || 4020, () => console.log(`Server running on ${SERVER_PORT}`))
    console.log('Database Connected')
})

//ENDPOINTS authCtrl
app.post('/api/register', authCtrl.register)
app.post('/api/login', authCtrl.login)
app.post('/api/logout', authCtrl.logout)

//ENDPOINTS chatMenuCtrl
// app.get('/api/users', chatMenuCtrl.getUsers)
// app.post('/api/chat', chatMenuCtrl.addRoom)
// app.get('/api/room', chatMenuCtrl.getRooms)
// app.get('/api/direct', chatMenuCtrl.getDirects)

//ENDPOINTS chatRoomCtrl
// app.get('/api/chat', chatRoomCtrl.getChats)
// app.get('/api/chat', chatRoomCtrl.getTasks)

//ENDPOINTS messageCtrl
// app.post('/api/chat', messageCtrl.addChat)
// app.put('/api/chat/:chatId', messageCtrl.editChat)
// app.delete('/api/chat/:chatId', messageCtrl.deleteChat)
// app.post('/api/chat', messageCtrl.addTask)
// app.put('/api/chat/:chatId', messageCtrl.editTask)
// app.delete('/api/chat/:chatId', messageCtrl.deleteTask)

//ENDPOINTS userMenuCtrl
// app.post('/api/logout', userMenuCtrl.logout)
// app.put('/api/user/:userId', userMenuCtrl.editUser)


//SOCKETS SHIT:
// // var app = require('express') //sockets
// // var http = require('http').createServer(app) //sockets

// // app.length('/', function(req, res) {//sockets
// //     res.send('<h1>Hello World Socket Shit</h1>')
// // })

// // http.listen(SERVER_PORT, function(){//sockets
// //     console.log(`Listening on server port${SERVER_PORT}`)
// // })
// .