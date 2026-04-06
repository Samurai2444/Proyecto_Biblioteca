CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    image VARCHAR(255)
);
 INSERT INTO users (name, email, password)
 VALUES (
    'UsuarioPrueba1',
    'prueba@test.com',
    '1234'
);

CREATE TABLE libro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    author VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    published_year INT NOT NULL,
    created_by INT,
    FOREIGN KEY (created_by) REFERENCES users(id)
);

 INSERT INTO libro (title, description, author, published_year, created_by)
 VALUES (
    'Mensaje de prueba',
    'Mensaje de la BD FUNCIONA',
    'Samuel Reche Sanmartin',
    2024,
    1
);

CREATE TABLE notas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    book_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT,
    status ENUM('pendiente', 'en curso', 'leído'),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (book_id) REFERENCES libro(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

 INSERT INTO notas (book_id, user_id, content, status)
 VALUES (
    1,
    1,
    'Primera nota del libro',
    'en curso'
);