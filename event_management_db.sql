-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2024 at 09:04 PM
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
-- Database: `event_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` bigint(20) NOT NULL,
  `location_description` varchar(255) DEFAULT NULL,
  `location_link` varchar(255) DEFAULT NULL,
  `place_name` varchar(255) DEFAULT NULL,
  `app` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `cover_picture` varchar(255) DEFAULT NULL,
  `event_description` varchar(255) DEFAULT NULL,
  `event_name` varchar(255) NOT NULL,
  `inside` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `start_time` time(6) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `physical` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id`, `location_description`, `location_link`, `place_name`, `app`, `category`, `cover_picture`, `event_description`, `event_name`, `inside`, `link`, `start_date`, `start_time`, `state`, `physical`) VALUES
(20, ' Tunis', 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6140.381021756343!2d10.177274471237595!3d36.80545097509038!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stn!4v1706289173109!5m2!1sen!2stn%22', 'AJST Club Tunis', '', 'artistic', 'event1.webp', 'Gotham is calling all passionate tech enthusiasts, innovators, and problem-solvers to join us in a transformative 24-hour hackathon dedicated to advancing Sustainable Development Goal 16 - Peace, Justice, and Strong Institutions.\r\n', 'Gotham Hack', 'true', '', '2024-02-03', '12:00:00.000000', 'tunis', b'1'),
(27, '', '', '', 'zoom', 'music', 'Banner-Video-Game-Market-2024.jpg', 'The UK’s biggest and best market for gamers ', 'Video Game Market Leeds 2024', NULL, 'https://zoom.us/j/555111', '2024-01-29', '21:00:00.000000', '', b'0'),
(28, '', 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2908.3079984234996!2d10.55865370155628!3d36.39249092607129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stn!4v1706297485882!5m2!1sen!2stn', 'La Playa Hotel-club', '', 'artistic', '5a06c7b506a669de08f60e93d3a894fd774c37c97b4dec2cb0f6f096264d3a82-rimg-w960-h541-gmir.webp', 'Embrace the winter vibes and boost your professional prowess at the Winter Camp, proudly hosted by ATLAS! 🏔️\r\nDive into a transformative experience featuring a dynamic General Assembly that sets the stage for inspiration', 'Winter Camp', 'false', '', '2024-03-20', '23:00:00.000000', 'Nabeul', b'1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
