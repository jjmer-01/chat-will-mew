SELECT u.first_name, u.last_name, r.room_title FROM users u
JOIN room_users ru ON u.user_id = ru.user_id
JOIN rooms r ON ru.room_id = r.room_id
WHERE ru.user_id = ${user_id} 
