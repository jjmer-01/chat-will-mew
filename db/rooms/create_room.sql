INSERT INTO rooms (room_title, room_description)
VALUES (${room_title}, ${room_description})
RETURNING room_id;