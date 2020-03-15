UPDATE messages
SET message_text = ${message_text}
    -- ts_edited = TIMESTAMP ${ts_edited},
    -- is_task = ${is_task},
    -- assigned_to = ${assigned_to},
    -- due_date = ${due_date},
    -- is_complete = ${is_complete}
WHERE message_id = ${message_id}
RETURNING message_text
    -- ts_edited,
    -- is_task,
    -- assigned_to,
    -- due_date,
    -- is_complete