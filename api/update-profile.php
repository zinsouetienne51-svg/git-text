<?php
require_once __DIR__ . '/config.php';

$userId = require_login();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['error' => 'Méthode non autorisée.'], 405);
}

$body = get_json_body();
$fullName = trim($body['full_name'] ?? '');
$phone = trim($body['phone'] ?? '');
$currentPassword = (string) ($body['current_password'] ?? '');
$newPassword = (string) ($body['new_password'] ?? '');

if ($fullName === '') {
    json_response(['error' => 'Le nom complet est obligatoire.'], 422);
}

$pdo = get_pdo();

// Changement de mot de passe optionnel : uniquement si un nouveau mot de passe est fourni.
if ($newPassword !== '') {
    if (strlen($newPassword) < 6) {
        json_response(['error' => 'Le nouveau mot de passe doit contenir au moins 6 caractères.'], 422);
    }
    $stmt = $pdo->prepare('SELECT password_hash FROM users WHERE id = ?');
    $stmt->execute([$userId]);
    $row = $stmt->fetch();
    if (!$row || !password_verify($currentPassword, $row['password_hash'])) {
        json_response(['error' => 'Mot de passe actuel incorrect.'], 401);
    }
    $newHash = password_hash($newPassword, PASSWORD_DEFAULT);
    $stmt = $pdo->prepare('UPDATE users SET full_name = ?, phone = ?, password_hash = ? WHERE id = ?');
    $stmt->execute([$fullName, $phone ?: null, $newHash, $userId]);
} else {
    $stmt = $pdo->prepare('UPDATE users SET full_name = ?, phone = ? WHERE id = ?');
    $stmt->execute([$fullName, $phone ?: null, $userId]);
}

$_SESSION['full_name'] = $fullName;

json_response(['success' => true]);
