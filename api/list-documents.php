<?php
require_once __DIR__ . '/config.php';

$userId = require_login();
$pdo = get_pdo();

$stmt = $pdo->prepare(
    "SELECT d.id, d.original_name, d.size_bytes, d.uploaded_at, d.request_id
     FROM documents d WHERE d.user_id = ? ORDER BY d.uploaded_at DESC"
);
$stmt->execute([$userId]);
$docs = $stmt->fetchAll();

json_response(['documents' => $docs]);
