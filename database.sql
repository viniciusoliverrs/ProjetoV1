-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.17-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for test
CREATE DATABASE IF NOT EXISTS `test` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `test`;

-- Dumping structure for table test.personphone
CREATE TABLE IF NOT EXISTS `personphone` (
  `BusinessEntityID` bigint(20) NOT NULL AUTO_INCREMENT,
  `PhoneNumber` varchar(100) NOT NULL,
  `PhoneNumberTypeID` bigint(20) NOT NULL,
  PRIMARY KEY (`BusinessEntityID`) USING BTREE,
  KEY `PhoneNumberTypeID` (`PhoneNumberTypeID`),
  CONSTRAINT `personphone_ibfk_1` FOREIGN KEY (`PhoneNumberTypeID`) REFERENCES `phonenumbertype` (`PhoneNumberTypeID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table test.phonenumbertype
CREATE TABLE IF NOT EXISTS `phonenumbertype` (
  `PhoneNumberTypeID` bigint(20) NOT NULL AUTO_INCREMENT,
  `Name` varchar(150) NOT NULL,
  PRIMARY KEY (`PhoneNumberTypeID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
