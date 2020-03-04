INSERT INTO users (user_email, first_name, last_name, user_title, hash)
VALUES (${user_email}, ${first_name}, ${last_name}, ${user_title}, ${hash})
RETURNING user_id, first_name, last_name;