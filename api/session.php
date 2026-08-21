<?php
require_once __DIR__ . '/config.php';

if (empty($_SESSION['user_id'])) {
    json_response(['authenticated' => false]);
}

$pdo = get_pdo();
$stmt = $pdo->prepare('SELECT id, full_name, email, phone, user_type, is_admin FROM users WHERE id = ?');
$stmt->execute([$_SESSION['user_id']]);
$user = $stmt->fetch();

if (!$user) {
    json_response(['authenticated' => false]);
}

$user['is_admin'] = (bool) $user['is_admin'];
$_SESSION['is_admin'] = $user['is_admin'];

json_response(['authenticated' => true, 'user' => $user]);
