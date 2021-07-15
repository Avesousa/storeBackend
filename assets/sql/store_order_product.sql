CREATE TABLE `store`.`order_product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `order_id` INT NULL,
  `product_id` INT NULL,
  `product_total` DOUBLE NULL,
  `product_quantity` INT NULL,
  `state` INT NULL,
  PRIMARY KEY (`id`));
