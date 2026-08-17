-- ============================================================
-- Base de données : tobb_segitseget
-- Importer ce fichier dans phpMyAdmin (ou via mysql CLI)
-- avant d'utiliser le site. Les IDs des projets correspondent
-- exactement à l'ordre affiché sur projets.html et financement.html.
-- ============================================================

CREATE DATABASE IF NOT EXISTS tobb_segitseget
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE tobb_segitseget;

-- ---------------- Utilisateurs ----------------
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  phone VARCHAR(30) DEFAULT NULL,
  user_type ENUM('particulier','entreprise') NOT NULL DEFAULT 'particulier',
  is_admin TINYINT(1) NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Compte administrateur de départ.
-- Email : admin@tobbsegitseg.hu   /   Mot de passe : Admin@2026
-- (à changer une fois connecté — pas d'interface pour ça pour l'instant,
--  il faudrait ré-exécuter password_hash() et faire un UPDATE en SQL)
INSERT INTO users (full_name, email, password_hash, user_type, is_admin) VALUES
('Administrateur', 'admin@tobbsegitseg.hu', '$2y$10$UIACOpVskAVc0oXYXCliCuqP.1CqqeThoijnd9i3QEcnwWvJR.8Ci', 'particulier', 1);

-- ---------------- Demandes d'aide ----------------
CREATE TABLE IF NOT EXISTS aide_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  request_type ENUM('particulier','entreprise') NOT NULL,
  situation TEXT DEFAULT NULL,
  amount_requested DECIMAL(10,2) DEFAULT NULL,
  amount_granted DECIMAL(10,2) DEFAULT NULL,
  status ENUM('en_attente','en_cours','acceptee','refusee') NOT NULL DEFAULT 'en_attente',
  admin_note VARCHAR(255) DEFAULT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ---------------- Projets (financement) ----------------
-- L'ordre et les IDs (1 à 6) correspondent exactement aux 6 cartes de projets.html.
CREATE TABLE IF NOT EXISTS projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  description VARCHAR(255) DEFAULT NULL,
  goal_amount DECIMAL(10,2) NOT NULL,
  raised_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

INSERT INTO projects (id, name, description, goal_amount, raised_amount) VALUES
(1, 'Soutien aux petites entreprises', 'Aider à relancer et développer les activités locales.', 150000, 22000),
(2, 'Aide aux familles en difficulté', 'Soutenir les besoins essentiels et l''avenir des enfants.', 100000, 38500),
(3, 'Relance professionnelle', 'Redonner les moyens d''un nouveau départ.', 80000, 26000),
(4, 'Aide médicale d''urgence', 'Prendre en charge des soins imprévus pour des familles vulnérables.', 50000, 26000),
(5, 'Formation & reconversion', 'Financer des formations professionnelles courtes et qualifiantes.', 50000, 10500),
(6, 'Aide au logement', 'Éviter les expulsions et sécuriser un toit stable.', 100000, 68000),
(7, 'Là où le besoin est le plus urgent', 'Fonds général réparti vers les projets qui en ont le plus besoin.', 1000000, 0);

-- ---------------- Financements / dons ----------------
CREATE TABLE IF NOT EXISTS financements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT DEFAULT NULL,
  project_id INT NOT NULL,
  donor_name VARCHAR(150) DEFAULT NULL,
  donor_email VARCHAR(150) DEFAULT NULL,
  amount DECIMAL(10,2) NOT NULL,
  payment_method VARCHAR(30) NOT NULL DEFAULT 'virement',
  reference_code VARCHAR(20) NOT NULL,
  status ENUM('en_attente','confirme') NOT NULL DEFAULT 'en_attente',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  confirmed_at DATETIME DEFAULT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ---------------- Messages de contact ----------------
CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  subject VARCHAR(150) DEFAULT NULL,
  message TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ---------------- Réglages du site ----------------
-- Contient la langue actuellement affichée à TOUS les visiteurs.
-- Seul un compte administrateur peut la modifier (voir api/site-lang.php).
CREATE TABLE IF NOT EXISTS site_settings (
  setting_key VARCHAR(50) PRIMARY KEY,
  setting_value VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

-- Langue par défaut du site : hongrois. Seul un compte admin peut la
-- repasser en français (bouton FR/HU visible uniquement pour lui).
INSERT INTO site_settings (setting_key, setting_value) VALUES ('site_lang', 'hu');

-- Coordonnées bancaires affichées sur la page "Faire un financement".
-- À REMPLACER par les vraies coordonnées (modifiable ensuite dans la table
-- site_settings, ou directement en base via phpMyAdmin).
INSERT INTO site_settings (setting_key, setting_value) VALUES
  ('bank_holder', 'TÖBB SEGÍTSÉGET'),
  ('bank_name', 'À compléter (nom de la banque)'),
  ('bank_iban', 'À compléter (IBAN)'),
  ('bank_bic', 'À compléter (BIC / SWIFT)');
