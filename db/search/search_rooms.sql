SELECT * FROM rooms
WHERE room_title LIKE '%' || ${search_text} || '%';