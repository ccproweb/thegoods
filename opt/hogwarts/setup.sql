-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema hogwarts
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hogwarts
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hogwarts` DEFAULT CHARACTER SET utf8 ;
USE `hogwarts` ;

-- -----------------------------------------------------
-- Table `hogwarts`.`houses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hogwarts`.`houses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `mascot` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hogwarts`.`students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hogwarts`.`students` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(254) NOT NULL,
  `email` VARCHAR(254) NOT NULL,
  `houses_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_students_houses_idx` (`houses_id` ASC),
  CONSTRAINT `fk_students_houses`
    FOREIGN KEY (`houses_id`)
    REFERENCES `hogwarts`.`houses` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO `hogwarts`.`houses` (`id`, `name`, `mascot`) VALUES ('1', 'Ravenclaw', 'Eagle');
INSERT INTO `hogwarts`.`houses` (`id`, `name`, `mascot`) VALUES ('2', 'Hufflepuff', 'Badger');
INSERT INTO `hogwarts`.`houses` (`id`, `name`, `mascot`) VALUES ('3', 'Gryffindor', 'Lion');
INSERT INTO `hogwarts`.`houses` (`id`, `name`, `mascot`) VALUES ('4', 'Slytherin', 'Serpent');
