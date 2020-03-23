require('dotenv').config()
const express = require('express')
    massive = require('massive')
    session = require('express-session')
    authCtrl = require('./authCtrl')
    chatMenuCtrl = require('./chatMenuCtrl')
    chatRoomCtrl = require('./chatRoomCtrl')
    messageCtrl = require('./messageCtrl')
    userMenuCtrl = require('./userMenuCtrl')
    socket = require('socket.io') //sockets
    // bodyParser = require('body-parser') //sockets?? Didn't need this for the `Chatting on` message to show
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
    // const socketIo = require('socket.io')
    // const axios = require('axios')
    
const app = express()
    
app.use(express.json())
const io = socket(app.listen(SERVER_PORT, () => console.log(`Chatting on ${SERVER_PORT}`))) // sockets: hd to declare after the server port I think?
// app.use(bodyParser.json()) //sockets??
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
    // app.listen(SERVER_PORT || 4020, () => console.log(`Server running on ${SERVER_PORT}`)) //moved to const io above.
    console.log('Database Connected')
})

//ENDPOINTS authCtrl
app.post('/api/register', authCtrl.register)
app.post('/api/login', authCtrl.login)
app.post('/api/logout', authCtrl.logout)

//ENDPOINTS chatMenuCtrl
app.get('/api/users', chatMenuCtrl.getUsers)
app.post('/api/room', chatMenuCtrl.addRoom)
app.get('/api/room/:user_id', chatMenuCtrl.getRooms)
app.get('/api/filteredRooms', chatMenuCtrl.getFilteredRooms) 

//ENDPOINTS chatRoomCtrl
app.post('/api/room_user/:room_id/:user_id', chatRoomCtrl.joinRoom)

//ENDPOINTS userMenuCtrl
// app.put('/api/user/:userId', userMenuCtrl.editUser)

//REPLACE WITH SOCKET ENDPOINTS
// app.put('/api/chat/:messageId', messageCtrl.editMessage)
// app.delete('/api/chat/:messageId', messageCtrl.deleteMessage)

//ENDPOINTS messageCtrl
//SOCKETS

io.on('connection', socket => {
    console.log('User Connected using Sockets')

    //join room, pull up chats
    socket.on('join room', async data => {
        const { room_id } = data,
        dbObj = app.get('db')
        // console.log(dbObj)
        // console.log("Room joined", room_id )
        let room = await dbObj.rooms.get_a_room({ room_id: room_id }) //should put this info in the room name placeholder when page loads
        let chats = await dbObj.messages.get_chats({ room_id: room_id }) //should get all chats with this room id when page loads
        // console.log(room)
        socket.join(room[0].room_id) //.join method subscribes user to the room we pulled from the database query get_a_room above.
        io.to(room[0].room_id).emit('room joined', { room: room[0], chats }) // I think using io instead of socket sends the message to everyone in the room including the sender. "to" specifies the room
        //.emit is a method that broadcasts 'room joined' which you use to call on front end. Brings up the room and our chats
    })
    //add chats
    socket.on('chat sent', async data => {
        console.log(data)
        const { room_id, user_id, message_text } = data
        const dbObj = app.get('db')
        await dbObj.messages.add_chat({ room_id: 
            room_id, 
            user_id, 
            message_text 
        })
        let chats = await dbObj.messages.get_chats({
            room_id, 
            user_id, 
            message_text })
            // console.log(chats)
        socket.emit('chat dispatched', chats)
    })
    //add tasks
    // socket.on('task sent', async data => {
    //     const { room_id, user_id, message_text, assigned_to, due_date } = data
    //     const dbObj = app.get('db')
    //     await dbObj.messages.add_task({ task_id: 
    //         room_id, 
    //         user_id, 
    //         message_text, 
    //         assigned_to, 
    //         due_date 
    //     })
    //     let tasks = await db.messages.get_tasks({user_id: user_id})
    //     socket.emit('task dispatched', tasks)
    // })

    //edit chat and task
    socket.on('edit message', async data => {
        const { message_text, room_id, message_id } = data
        // console.log(message_text, message_id)
        const dbObj = app.get('db')
        let message = await dbObj.messages.edit_message({message_text, message_id})
        console.log(message)
        // let chats = await dbObj.messages.get_chats({room_id, user_id})
        // socket.emit('edit dispatched', chats)
    })

    //delete chat and task
    socket.on('delete message', async data => {
        const { message_id } = data
        console.log(message_id)
        const dbObj = app.get('db')
        let removedMessage = await dbObj.messages.delete_messages({message_id})
        socket.emit('delete dispatched', removedMessage)
    })


})