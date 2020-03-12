SELECT 
    m.message_text,
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
WHERE u.user_id = ${user_id}