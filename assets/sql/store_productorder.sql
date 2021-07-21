DROP TABLE store.order;
CREATE TABLE `store`.`productorder` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `order` INT NULL,
  `product` INT NULL,
  `total` DOUBLE NULL,
  `quantity` INT NULL,
  `state` INT NULL,
  PRIMARY KEY (`id`));
