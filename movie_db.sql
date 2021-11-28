-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2021 at 03:18 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movie_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `characters`
--

CREATE TABLE `characters` (
  `id` int(11) NOT NULL,
  `imageCharacter` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `age` decimal(10,0) NOT NULL,
  `weight` decimal(10,0) NOT NULL,
  `history` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `characters`
--

INSERT INTO `characters` (`id`, `imageCharacter`, `name`, `age`, `weight`, `history`) VALUES
(1, 'imageCharacter-1637975883104.png', 'sultan', '17', '63', 'a young and lonely man'),
(2, 'imageCharacter-1637976229589.png', 'Cinderella', '15', '45', 'a beautiful lady');

-- --------------------------------------------------------

--
-- Table structure for table `character_movie`
--

CREATE TABLE `character_movie` (
  `id` int(11) NOT NULL,
  `character_id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `character_movie`
--

INSERT INTO `character_movie` (`id`, `character_id`, `movie_id`) VALUES
(1, 2, 1),
(2, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `imageGenre` varchar(255) NOT NULL,
  `movie_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`, `imageGenre`, `movie_id`) VALUES
(1, 'Accion', '', 0),
(2, 'fantasy', 'imagen grande', 1),
(3, 'Fantasy', 'imageGenre-1638057221646.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `imageMovie` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `genre_id` int(11) NOT NULL,
  `release_date` date NOT NULL,
  `score` decimal(5,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `imageMovie`, `title`, `genre_id`, `release_date`, `score`) VALUES
(1, 'imageMovie-1638041247245.jpg', 'cinderella', 1, '0000-00-00', '5'),
(2, 'imageMovie-1638041377305.jpg', 'a cinderella story', 1, '0000-00-00', '3'),
(4, 'imageMovie-1638052710442.jpg', 'aladin', 1, '0000-00-00', '4'),
(5, 'imageMovie-1638052751003.jpg', 'aladin', 1, '0000-00-00', '4'),
(6, 'imageMovie-1638052762457.jpg', 'aladin', 1, '0000-00-00', '4'),
(7, 'imageMovie-1638058935949.jpg', 'aladin', 1, '0000-00-00', '4');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `mail`, `password`) VALUES
(1, 'xiomara', 'xiomaraq@gmail.com', '123456'),
(2, 'waletr', '', '123456'),
(3, 'sol', 'sol@gmail.com', '123456'),
(4, 'maria', 'maria@gmail.com', '12345'),
(5, 'luis', 'luis@gmail.com', '123456'),
(6, 'mica', 'mica@gmail.com', '123456'),
(7, 'mica', 'mica@gmail.com', '123456'),
(8, 'sol', 'sol@gmail.com', '123456'),
(9, 'maribel', 'maribel@gmail.com', '123456'),
(10, 'rebeca', 'rebeca@gmail.com', '123456'),
(11, 'rebeca', 'rebeca@gmail.com', '123456'),
(12, 'evelina', 'evelina@gmail.com', '$2b$10$ZrIRLzU5TY1YDN3hCVobqeJLekpJ0811JFDZ.wpGjec0F4tX7PnD2'),
(13, 'evelina', 'evelina@gmail.com', '$2b$10$elkHzXVZIwUCtjgg9WNPuesffwmfYFOOm.pqF4RJSSMh0shq5vA8a'),
(14, 'evelina', 'evelina@gmail.com', '$2b$10$bZMfbOGHjHzlhLk6uJvhT.Xv6vNHskNKmWZhnL5y47twQtzw6CJO2'),
(15, 'paula@gmail.com', 'evelina@gmail.com', '$2b$10$o6wXxBK.eH0waLPJ01ZtnupAJqCFblgHO8zHp66noYJWvMT72wUqm'),
(16, 'pamela', 'pamela@gmail.com', '$2b$10$.ZZlUoplEHmHZ/V/z.ONG.N/bJI.tzTzTRCJb.BlGzLhpjR66K18i'),
(17, 'Brian', 'brian@gmail.com', '$2b$10$TwVL4iqitDKIuWTvp0CQy.aEvSInFeDaZB9m4jkmOcPBZ60iLMbB.'),
(18, 'gabriel', 'gabriel@gmail.com', '$2b$10$35Uw8QS9.vRYcSqvmTCR7eK/mWbizby9LxQi1KLc55R0NgiV6dbuy'),
(19, 'gabriel', 'gabriel@gmail.com', '$2b$10$YQaUDtPxlcWw4a6io4Dbl.sGvEDC.e2mOGMR7f3ITzXE6KmZl4RDO'),
(20, 'gabriel', 'gabriel@gmail.com', '$2b$10$d5laM3FHtraZcoyLtfR8G.UXDFqoomvZ429rJOlIsMjfiITIRQ.SG'),
(21, 'luciana', 'luciana@gmail.com', '$2b$10$3ZCekz91vLirzc90M.Eb2.QxAWITg.ypFYgjxCNc0VxXCwYWAvXy.'),
(22, 'luciana', 'luciana@gmail.com', '$2b$10$kA4ZA3PnIcTEQxfoO/1LMOSpaqt0f9P80GjLNp7X0T2XUwVlZ9bNq'),
(23, 'luciana', 'luciana@gmail.com', '$2b$10$SHhSO1WdJEUu.rHR4sbVSu3z31i65nal9q6kgUxvR6XXo7e/RwPwO'),
(24, 'Romina', 'romina@gmail.com', '$2b$10$xnHyQd0zNYwpzY0Z0.fMgexBUm8kNTUrlnnT1AfJmsZVlIJ1I71oe');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `character_movie`
--
ALTER TABLE `character_movie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genre_id` (`genre_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `characters`
--
ALTER TABLE `characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `character_movie`
--
ALTER TABLE `character_movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
