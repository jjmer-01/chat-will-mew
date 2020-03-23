module.exports = {

 joinRoom: async(req, res) => {
    const { room_id } = req.params
    const { user_id } = req.body
    const dbObj = req.app.get('db')

    let roomUser = await dbObj.rooms.check_room_users({user_id})
    roomUser = roomUser[0]
    if(roomUser) {
        return res.status(400).send('This user is already a member of the room. No further action needed')
    }

    dbObj.rooms.add_room_users({user_id, room_id})
    .then(() => {res.status(200).send('Room Joined!')})
    .catch(() => {res.status(200).send('Unsuccessful. Please try again later.')})
 },

 leaveRoom: async(req, res) => {
    
 },
}