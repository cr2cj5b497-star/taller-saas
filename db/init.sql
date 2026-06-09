CREATE TABLE workshops (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    workshop_id INT REFERENCES workshops(id),
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL
);

INSERT INTO workshops (name, email, password_hash) VALUES ('Taller Paco', 'admin@taller.com', 'hash_falso_para_test');
