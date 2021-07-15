DROP TABLE store.order;
CREATE TABLE `store`.`order` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  `zone_id` INT NULL,
  `zone_price` DOUBLE NULL,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `state` INT NULL,
  `store` INT NULL,
  PRIMARY KEY (`id`));