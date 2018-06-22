BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS `users` (
	`userid`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	`firstName`	TEXT NOT NULL,
	`lastName`	TEXT NOT NULL,
	`userName`	TEXT NOT NULL UNIQUE,
	`password`	TEXT NOT NULL UNIQUE,
	`message`	TEXT
);
INSERT INTO `users` VALUES (1,'Robert','Bender','Robb','password123','I love node.js!');
COMMIT;
