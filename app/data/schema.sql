CREATE DATABASE friend_finderDB;

USE friend_finderDB;

CREATE TABLE users (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    userName varchar(50) NOT NULL, 
    userEmail varchar(50) NOT NULL,
    userPassword varchar(20) NOT NULL,
    userMatches INTEGER(5),
    PRIMARY KEY (id)
    );

INSERT INTO users (userName, userEmail, userPassword)
VALUES ("Bob", "beccapotter12@gmail.com", "asdfjkl12");

CREATE TABLE matches (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    matchID INTEGER(5) AUTO_INCREMENT NOT NULL,
    matchName varchar(50) NOT NULL, 
    matchEmail varchar(50) NOT NULL,
    matchDescription varchar(200) NOT NULL,
    PRIMARY KEY (id)
    );