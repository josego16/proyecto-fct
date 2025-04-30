-- Crear la base de datos si no existe y seleccionarla
CREATE DATABASE IF NOT EXISTS www;
USE www;

-- Desactivar temporalmente restricciones para evitar errores durante la creación
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- Crear tabla test
DROP TABLE IF EXISTS `test`;

CREATE TABLE IF NOT EXISTS `test` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;

-- Crear tabla pregunta
DROP TABLE IF EXISTS `pregunta`;

CREATE TABLE IF NOT EXISTS `pregunta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pregunta` VARCHAR(250) NULL,
  `resp1` VARCHAR(250) NULL,
  `resp2` VARCHAR(250) NULL,
  `resp3` VARCHAR(250) NULL,
  `resp4` VARCHAR(250) NULL,
  `num_respuestas` INT NULL,
  `resp_correcta` INT NULL,
  `test_id` INT NOT NULL,
  PRIMARY KEY (`id`, `test_id`),
  INDEX `fk_pregunta_test_idx` (`test_id` ASC),
  CONSTRAINT `fk_pregunta_test`
    FOREIGN KEY (`test_id`)
    REFERENCES `test` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;

-- Restaurar los valores originales de configuración
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
