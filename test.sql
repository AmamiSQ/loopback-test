-- Active: 1677059414511@@127.0.0.1@5432@loopbackDB

CREATE TABLE
    users (
        id SERIAL NOT NULL,
        firstName VARCHAR(255) NOT NULL,
        lastName VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    );
