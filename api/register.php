<?php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['error' => 'Méthode non autorisée.'], 405);
}

$body = get_json_body();
$fullName = trim($body['full_name'] ?? '');
$email    = trim($body['email'] ?? '');
$phone    = trim($body['phone'] ?? '');
$password = (string) ($body['password'] ?? '');
$userType = ($body['user_type'] ?? 'particulier') === 'entreprise' ? 'entreprise' : 'particulier';

if ($fullName === '' || $email === '' || $password === '') {
    json_response(['error' => 'Nom, email et mot de passe sont obligatoires.'], 422);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_response(['error' => 'Adresse email invalide.'], 422);
}
if (strlen($password) < 6) {
    json_response(['error' => 'Le mot de passe doit contenir au moins 6 caractères.'], 422);
}

$pdo = get_pdo();

$stmt = $pdo->prepare('SELECT id FROM users WHERE email = ?');
$stmt->execute([$email]);
if ($stmt->fetch()) {
    json_response(['error' => 'Un compte existe déjà avec cet email.'], 409);
}

$hash = password_hash($password, PASSWORD_DEFAULT);

$stmt = $pdo->prepare(
    'INSERT INTO users (full_name, email, password_hash, phone, user_type) VALUES (?, ?, ?, ?, ?)'
);
$stmt->execute([$fullName, $email, $hash, $phone, $userType]);

$userId = (int) $pdo->lastInsertId();
$_SESSION['user_id'] = $userId;
$_SESSION['full_name'] = $fullName;

json_response([
    'success' => true,
    'user' => ['id' => $userId, 'full_name' => $fullName, 'email' => $email, 'user_type' => $userType],
]);
