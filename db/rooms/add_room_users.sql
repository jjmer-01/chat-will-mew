INSERT INTO room_users (room_id, user_id)
VALUES (${r}, ${u})
RETURNING room_user_id;