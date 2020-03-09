SELECT room_title FROM rooms
JOIN room_users ON rooms.room_id = room_users.room_id
WHERE room_users.user_id = ${user_id}