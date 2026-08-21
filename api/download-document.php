<?php
require_once __DIR__ . '/config.php';

$userId = require_login();
$pdo = get_pdo();

$docId = (int) ($_GET['id'] ?? 0);
$stmt = $pdo->prepare('SELECT * FROM documents WHERE id = ? AND user_id = ?');
$stmt->execute([$docId, $userId]);
$doc = $stmt->fetch();

if (!$doc) {
    http_response_code(404);
    exit('Document introuvable.');
}

$path = __DIR__ . '/../uploads/documents/' . $doc['stored_name'];
if (!file_exists($path)) {
    http_response_code(404);
    exit('Fichier introuvable sur le serveur.');
}

header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="' . basename($doc['original_name']) . '"');
header('Content-Length: ' . filesize($path));
readfile($path);
exit;
