module.exports = {
    getUsers: async(req, res) => {
        const db = req.app.get('db').search
        const users = await db.get_users()
        if(users[0]) {
            res.status(200).send(users)
        } else {
            res.sendStatus(500)
        }
    },

     addRoom: async(req, res) => {
         const { room_title, room_description, user_id } = req.body
         const dbObj = req.app.get('db').rooms
         const newRoom = await db.create_room
         newRoom = newRoom[0]
         let roomId = null

         dbObj.create_room([room_title, room_description])
         .then((res) => {
             roomId = res[0]
             res.status(200).send(res[0])
         })
         .catch(err => {
             res.status(500).send('Room not created. Try again later.')
             console.log(err)
         })

         user_id.forEach((element) => {
             dbObj.add_room_users({room_id: roomId, user_id: element})
         .catch(err => {
             res.status(500).send('Users not added. Try again later.')
             console.log(err)
            })
        }) 
    },
}
