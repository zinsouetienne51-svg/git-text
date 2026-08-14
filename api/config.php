<?php
/**
 * Configuration & helpers partagés par toutes les routes API.
 * Adapte les identifiants ci-dessous à ton environnement local
 * (XAMPP/WAMP/MAMP : généralement host=localhost, user=root, pass="").
 */

// ---- Identifiants base de données ----
define('DB_HOST', 'localhost');
define('DB_NAME', 'tobb_segitseget');
define('DB_USER', 'root');
define('DB_PASS', '');

// ---- Session ----
session_start();

// ---- Connexion PDO ----
function get_pdo(): PDO {
    static $pdo = null;
    if ($pdo === null) {
        try {
            $pdo = new PDO(
                "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
                DB_USER,
                DB_PASS,
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                ]
            );
        } catch (PDOException $e) {
            json_response(['error' => 'Connexion à la base de données impossible.'], 500);
        }
    }
    return $pdo;
}

// ---- Réponse JSON standard ----
function json_response(array $data, int $status = 200): void {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

// ---- Lecture du corps JSON de la requête ----
function get_json_body(): array {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

// ---- Exige un utilisateur connecté ----
function require_login(): int {
    if (empty($_SESSION['user_id'])) {
        json_response(['error' => 'Vous devez être connecté.'], 401);
    }
    return (int) $_SESSION['user_id'];
}

// ---- Exige un utilisateur admin connecté ----
function require_admin(): int {
    $userId = require_login();
    if (empty($_SESSION['is_admin'])) {
        json_response(['error' => 'Accès réservé aux administrateurs.'], 403);
    }
    return $userId;
}

// ---- CORS (utile si le front est servi sur un autre port en dev) ----
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
