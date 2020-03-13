INSERT INTO messages (
    message_text,
    user_id,
    room_id
    )
VALUES (
    ${message_text},
    ${user_id},
    ${room_id}
)
RETURNING
    message_text,
    user_id,
    room_id;