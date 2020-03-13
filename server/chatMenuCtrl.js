module.exports = {
    getUsers: async(req, res) => {
        const db = req.app.get('db').search
        const users = await db.get_users()
        if(users[0]) {
            // console.log(users)
            res.status(200).send(users)
        } else {
            res.sendStatus(500)
        }
    },

    addRoom: async(req, res) => {
        const { room_title, room_description, user_id } = req.body
        console.log(user_id)
        const dbObj = req.app.get('db').rooms
        let roomId = null
        // console.log(room_title, room_description)

        dbObj.create_room({room_title, room_description})
        .then((data) => {
            roomId = data[0].room_id
            user_id.forEach((element) => {
                // console.log(roomId)
                dbObj.add_room_users({room_id: roomId, user_id: element})
           }) 
            res.status(200).send(data[0])
        })
        .catch(err => {
            res.status(500).send('Room not created. Try again later.')
            console.log(err)
        })

   },

  
   getRooms: async (req, res) => {
        const {user_id} = req.params
        const dbObj = req.app.get('db').rooms
        const rooms = await dbObj.get_rooms({user_id})
        if(rooms[0]) {
            res.status(200).send(rooms)
            console.log(rooms)
        }
    },

    
   
}
