CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_email VARCHAR(40) UNIQUE,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    profile_pic VARCHAR(255),
    user_title VARCHAR(40),
    hash VARCHAR(255)
)


CREATE TABLE rooms (
    room_id SERIAL PRIMARY KEY,
    room_title VARCHAR(40),
    room_description VARCHAR(255)
)

CREATE TABLE room_users (
    room_user_id SERIAL PRIMARY KEY,
    room_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (room_id) REFERENCES rooms(room_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
)

CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    message_text VARCHAR(2000),
    user_id INT NOT NULL,
    room_id INT NOT NULL,
    ts_added TIMESTAMP,
    ts_edited TIMESTAMP,
    is_task BOOLEAN,
    assigned_to INT,
    due_date DATE,
    is_complete BOOLEAN,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (room_id) REFERENCES rooms(room_id),
    FOREIGN KEY (assigned_to) REFERENCES users(user_id)
)
