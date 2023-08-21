ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `isActive` tinyint NOT NULL DEFAULT '0',
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_email_index` (`email`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `shop` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `shop_name_index` (`name`),
  KEY `FK_e8f0a5cb5967931a347c31619b6` (`userId`),
  CONSTRAINT `FK_e8f0a5cb5967931a347c31619b6` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO bolsiyo.`user`
(id, email, password, isActive, createdAt, updatedAt)
VALUES(1, 'test@test.com', '$2b$10$Z8hN36twz.uLpuL5NrURzuKLERygmg4/FKO7NvNd.ufc9rdJiQP8W', 1, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6));

INSERT INTO bolsiyo.shop
(id, name, userId)
VALUES(1, 'Test Shop', 1);
