CREATE TABLE `dados` (
	`id` INT(5) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(30) NOT NULL,
	`lastname` VARCHAR(30) NOT NULL,
	`company` VARCHAR(30),
	`arecode` VARCHAR(30),
	`phone` VARCHAR(30),
	`subject` VARCHAR(30),
	`newCustomer` VARCHAR(30),
	`email` VARCHAR(30),
	PRIMARY KEY (`id`)
);