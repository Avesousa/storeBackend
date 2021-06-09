-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: store
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(150) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `icon` varchar(45) DEFAULT NULL,
  `exticon` varchar(5) DEFAULT NULL,
  `imagen` varchar(45) DEFAULT NULL,
  `extimagen` varchar(5) DEFAULT NULL,
  `store` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (2,'Cervezas','Cervezas','cerveza','png',NULL,NULL,74),(3,'Fernet','Fernet','fernet','png',NULL,NULL,74),(4,'Ginebra ','Ginebra ','ginebra','png',NULL,NULL,74),(5,'Licor','Licor','licor','png',NULL,NULL,74),(6,'Ron','Ron','ron','png',NULL,NULL,74),(7,'Sidra','Sidra','sidra','png',NULL,NULL,74),(8,'Tequila','Tequila','tequila','png',NULL,NULL,74),(9,'Vodka','Vodka','vodka','png',NULL,NULL,74),(10,'Whisky','Whisky','whisky','png',NULL,NULL,74),(11,'Aperitivos','Aperitivos','aperitivo','png',NULL,NULL,74),(12,'Vinos','Vinos','wine','png',NULL,NULL,74),(13,'Angostura','Angostura','angostura','png',NULL,NULL,74);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-09  7:36:15
