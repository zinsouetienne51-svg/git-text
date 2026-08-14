<?php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['error' => 'Méthode non autorisée.'], 405);
}

$userId = require_login();
$body = get_json_body();

$type = ($body['type'] ?? 'particulier') === 'entreprise' ? 'entreprise' : 'particulier';
$situation = trim($body['situation'] ?? '');
$amount = isset($body['amount']) && $body['amount'] !== '' ? (float) $body['amount'] : null;

$pdo = get_pdo();
$stmt = $pdo->prepare(
    'INSERT INTO aide_requests (user_id, request_type, situation, amount_requested, status)
     VALUES (?, ?, ?, ?, "en_attente")'
);
$stmt->execute([$userId, $type, $situation, $amount]);

json_response(['success' => true, 'request_id' => (int) $pdo->lastInsertId()]);
