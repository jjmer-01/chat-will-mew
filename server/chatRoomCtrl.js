module.exports = {

 addRoomUser: async(req, res) => {
    
    const {room_id, user_id} = req.params
    const dbObj = req.app.get('db')
    

    let roomUser = dbObj.rooms.check_room_users({user_id})
    roomUser = roomUser[0]
    if(roomUser) {
        return res.status(400).send('This user is already a member of the room. No further action needed')
    }

    try {
        // console.log(room_id)
        let newRoomUser = await dbObj.rooms.add_room_users({r:room_id, u:user_id})
        res.status(201).send(newRoomUser)
    } catch {
        res.status(200).send('Unsuccessful. Please try again later.')
    }
 },

//  removeRoomUser: async(req, res) => {
//     const {room_user_id} = req.params
//     console.log(room_user_id)
//     const dbObj = req.app.get('db')
//     letRemovedUser = await dbObj.rooms.remove_room_user({room_user_id})
//  },
}