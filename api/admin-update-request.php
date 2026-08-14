<?php
require_once __DIR__ . '/config.php';
require_admin();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['error' => 'Méthode non autorisée.'], 405);
}

$body = get_json_body();
$requestId = (int) ($body['request_id'] ?? 0);
$status = $body['status'] ?? '';
$amountGranted = isset($body['amount_granted']) && $body['amount_granted'] !== ''
    ? (float) $body['amount_granted']
    : null;

$allowedStatus = ['en_attente', 'en_cours', 'acceptee', 'refusee'];
if ($requestId <= 0 || !in_array($status, $allowedStatus, true)) {
    json_response(['error' => 'Requête invalide.'], 422);
}

$pdo = get_pdo();
$stmt = $pdo->prepare(
    'UPDATE aide_requests SET status = ?, amount_granted = ? WHERE id = ?'
);
$stmt->execute([$status, $amountGranted, $requestId]);

json_response(['success' => true]);
