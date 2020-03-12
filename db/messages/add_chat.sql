INSERT INTO messages (
    message_text,
    user_id,
    room_id,
    ts_added
    )
VALUES (
    ${message_text},
    ${user_id},
    ${room_id},
    ${ts_added}
)
RETURNING
    message_text,
    user_id,
    room_id,
    ts_added;