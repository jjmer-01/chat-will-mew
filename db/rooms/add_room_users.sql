INSERT INTO room_users (room_id, user_id)
VALUES (${room_id}, ${user_id})
RETURNING room_user_id;