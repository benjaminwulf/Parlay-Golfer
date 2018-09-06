DROP DATABASE IF EXISTS parlay_golfer_db;

CREATE DATABASE parlay_golfer_db;
USE parlay_golfer_db;

CREATE TABLE teams
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

USE parlay_golfer_db;
INSERT INTO teams (name) VALUES ('Team Benji');
INSERT INTO teams (name) VALUES ('Team Ryan');
INSERT INTO teams (name) VALUES ('Team Brian');
INSERT INTO teams (name) VALUES ('Team Murad');

use Parlay_golfer_db;
SELECT * FROM teams;