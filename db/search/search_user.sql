SELECT * FROM users
WHERE first_name LIKE %$1% || last_name LIKE %$1%;