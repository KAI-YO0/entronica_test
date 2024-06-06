-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2024 at 12:34 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `entronica_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` bigint(20) NOT NULL,
  `first_name` varchar(20) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `phone_number` varchar(10) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `first_name`, `last_name`, `birth_date`, `phone_number`, `email`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Khabib', 'Nurmagomedov', '1988-09-12', '0877777777', 'kabib@gmail.com', '2024-06-06 07:32:18', '2024-06-06 07:32:18', NULL),
(2, 'Conor', 'Mcgregor', '1988-09-14', '0877777771', 'conor@gmail.com', '2024-06-06 07:32:18', '2024-06-06 07:32:18', NULL),
(3, 'testzzz', 'postmanzz', '2002-03-15', '0877538574', 'test@postman.com', '2024-06-06 08:31:37', '2024-06-06 08:35:37', '2024-06-06 08:35:37'),
(4, 'test', 'postman', '2002-03-15', '0877538574', 'test@postman.com', '2024-06-06 08:53:13', '2024-06-06 08:53:13', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `customer_addresses`
--

CREATE TABLE `customer_addresses` (
  `customer_address_id` bigint(20) NOT NULL,
  `customer_id` bigint(20) NOT NULL,
  `address_type` set('home','shipping','billing') DEFAULT NULL,
  `street_address` varchar(50) DEFAULT NULL,
  `village` varchar(50) DEFAULT NULL,
  `sub_district` varchar(50) DEFAULT NULL,
  `district` varchar(50) DEFAULT NULL,
  `province` varchar(50) DEFAULT NULL,
  `postal_code` varchar(5) DEFAULT NULL,
  `country` enum('thailand','usa','japan','korea') DEFAULT NULL,
  `description` varchar(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `customer_addresses`
--

INSERT INTO `customer_addresses` (`customer_address_id`, `customer_id`, `address_type`, `street_address`, `village`, `sub_district`, `district`, `province`, `postal_code`, `country`, `description`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'home,shipping,billing', '42', 'UFC', 'klong thanon', 'saimai', 'bangkok', '10220', 'thailand', 'บ้าน', '2024-06-06 07:32:32', '2024-06-06 07:32:32', NULL),
(2, 2, 'home,billing', '55', 'UFC', 'klong thanon', 'saimai', 'bangkok', '10220', 'thailand', 'บ้าน', '2024-06-06 07:32:32', '2024-06-06 07:32:32', NULL),
(3, 2, 'shipping', '99', 'Gym', 'watcharapol', 'ramintra', 'bangkok', '10230', 'thailand', 'ที่ทำงาน', '2024-06-06 07:32:32', '2024-06-06 07:32:32', NULL),
(7, 1, 'home,shipping,billing', '2', 'postman vils', 'klong-thanon', 'saimai', 'bangkok', '10220', 'usa', 'บ้าน', '2024-06-06 09:11:10', '2024-06-06 09:11:23', '2024-06-06 09:11:23');

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `package_id` bigint(20) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `monthly_fee` decimal(7,2) DEFAULT NULL,
  `call_minutes` varchar(50) DEFAULT NULL,
  `data_allowance` varchar(50) DEFAULT NULL,
  `description_details` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`package_id`, `name`, `monthly_fee`, `call_minutes`, `data_allowance`, `description_details`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Internet Max speed Unlimited 7D', 199.00, '-', 'Max speed Unlimited', 'Internet Max speed Unlimited 199 บาท นาน 7 วัน\nเน็ตไม่อั้น ไม่ลดสปีด บนความเร็วสูงสุด', '2024-06-06 07:32:38', '2024-06-06 07:32:38', NULL),
(2, '5G Unlimited', 1199.99, '350m โทรฟรีทุกเครือข่าย', '5G unlimited', '5G Unlimited 1,199 บาท เน็ต 5G ไม่จำกัด 350นาทีโทรฟรีทุกเครือข่าย ไม่จำกัด Wifi', '2024-06-06 07:32:38', '2024-06-06 07:32:38', NULL),
(3, '5G Professionalsz​', 999.00, '300m โทรฟรีทุกเครือข่ายz', '50GB (เล่นเน็ตต่อเนื่อง ความเร็วสูงสุด 6Mbps)z', '5G Professionals​ 699 บาท เน็ต 5G เต็มสปีด50GB(เล่นเน็ตต่อเนื่อง ความเร็วสูงสุด 6Mbps) 300นาทีโทรฟรีทุกเครือข่าย ไม่จำกัด Wifi Microsoft 365 Personal 24เดือนz', '2024-06-06 09:35:59', '2024-06-06 09:38:10', '2024-06-06 09:38:10');

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `subscription_id` bigint(20) NOT NULL,
  `customer_id` bigint(20) NOT NULL,
  `package_id` bigint(20) NOT NULL,
  `customer_address_id` bigint(20) NOT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`subscription_id`, `customer_id`, `package_id`, `customer_address_id`, `start_date`, `end_date`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 1, 1, '2024-06-06 12:40:00', '2024-06-13 12:40:00', '2024-06-06 07:32:42', '2024-06-06 07:32:42', NULL),
(2, 2, 2, 3, '2024-06-06 13:00:00', '2024-07-06 13:00:00', '2024-06-06 07:32:42', '2024-06-06 07:32:42', NULL),
(3, 2, 3, 3, '2024-06-06 16:53:00', '2024-07-06 16:53:00', '2024-06-06 09:53:24', '2024-06-06 09:54:26', '2024-06-06 09:54:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `customer_addresses`
--
ALTER TABLE `customer_addresses`
  ADD PRIMARY KEY (`customer_address_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`package_id`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`subscription_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `package_id` (`package_id`),
  ADD KEY `customer_address_id` (`customer_address_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `customer_addresses`
--
ALTER TABLE `customer_addresses`
  MODIFY `customer_address_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `package_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `subscription_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customer_addresses`
--
ALTER TABLE `customer_addresses`
  ADD CONSTRAINT `customer_addresses_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);

--
-- Constraints for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD CONSTRAINT `subscriptions_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `subscriptions_ibfk_2` FOREIGN KEY (`package_id`) REFERENCES `packages` (`package_id`),
  ADD CONSTRAINT `subscriptions_ibfk_3` FOREIGN KEY (`customer_address_id`) REFERENCES `customer_addresses` (`customer_address_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
