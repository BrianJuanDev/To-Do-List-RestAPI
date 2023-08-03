CREATE DATABASE IF NOT EXISTS taskdb;

USE taskdb;

CREATE TABLE task (
    id INT AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    completado BOOLEAN,
    PRIMARY KEY(id)
)