<?php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['error' => 'Méthode non autorisée.'], 405);
}

$body = get_json_body();
$email    = trim($body['email'] ?? '');
$password = (string) ($body['password'] ?? '');

if ($email === '' || $password === '') {
    json_response(['error' => 'Email et mot de passe requis.'], 422);
}

$pdo = get_pdo();
$stmt = $pdo->prepare('SELECT id, full_name, email, password_hash, user_type, is_admin FROM users WHERE email = ?');
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user['password_hash'])) {
    json_response(['error' => 'Email ou mot de passe incorrect.'], 401);
}

$_SESSION['user_id'] = (int) $user['id'];
$_SESSION['full_name'] = $user['full_name'];
$_SESSION['is_admin'] = (bool) $user['is_admin'];

json_response([
    'success' => true,
    'user' => [
        'id' => $user['id'],
        'full_name' => $user['full_name'],
        'email' => $user['email'],
        'user_type' => $user['user_type'],
        'is_admin' => (bool) $user['is_admin'],
    ],
]);
