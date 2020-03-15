SELECT 
    m.message_text,
    m.message_id,
    m.ts_added, 
    m.ts_edited, 
    m.is_task, 
    m.assigned_to, 
    m.due_date, 
    m.is_complete,
    u.first_name,
    u.last_name
FROM messages m
FULL JOIN users u ON m.user_id = u.user_id
WHERE m.room_id = ${room_id};