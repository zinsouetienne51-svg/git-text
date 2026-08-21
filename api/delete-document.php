<?php
require_once __DIR__ . '/config.php';

$userId = require_login();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['error' => 'Méthode non autorisée.'], 405);
}

$body = get_json_body();
$docId = (int) ($body['document_id'] ?? 0);

$pdo = get_pdo();
$stmt = $pdo->prepare('SELECT * FROM documents WHERE id = ? AND user_id = ?');
$stmt->execute([$docId, $userId]);
$doc = $stmt->fetch();

if (!$doc) {
    json_response(['error' => 'Document introuvable.'], 404);
}

$path = __DIR__ . '/../uploads/documents/' . $doc['stored_name'];
if (file_exists($path)) {
    unlink($path);
}

$stmt = $pdo->prepare('DELETE FROM documents WHERE id = ?');
$stmt->execute([$docId]);

json_response(['success' => true]);
