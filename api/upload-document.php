<?php
require_once __DIR__ . '/config.php';

$userId = require_login();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['error' => 'Méthode non autorisée.'], 405);
}

if (empty($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    json_response(['error' => 'Aucun fichier valide reçu.'], 422);
}

$file = $_FILES['file'];
$requestId = isset($_POST['request_id']) && $_POST['request_id'] !== '' ? (int) $_POST['request_id'] : null;

// Limites : 5 Mo max, types autorisés seulement.
$maxSize = 5 * 1024 * 1024;
if ($file['size'] > $maxSize) {
    json_response(['error' => 'Le fichier dépasse la taille maximale de 5 Mo.'], 422);
}

$allowedExt = ['pdf', 'jpg', 'jpeg', 'png', 'doc', 'docx'];
$ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
if (!in_array($ext, $allowedExt, true)) {
    json_response(['error' => 'Type de fichier non autorisé (pdf, jpg, png, doc, docx uniquement).'], 422);
}

// Si un request_id est fourni, vérifier qu'il appartient bien à l'utilisateur.
if ($requestId !== null) {
    $pdo = get_pdo();
    $stmt = $pdo->prepare('SELECT id FROM aide_requests WHERE id = ? AND user_id = ?');
    $stmt->execute([$requestId, $userId]);
    if (!$stmt->fetch()) {
        json_response(['error' => 'Demande introuvable.'], 404);
    }
} else {
    $pdo = get_pdo();
}

$uploadDir = __DIR__ . '/../uploads/documents/';
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

$storedName = 'u' . $userId . '_' . time() . '_' . bin2hex(random_bytes(4)) . '.' . $ext;
$destination = $uploadDir . $storedName;

if (!move_uploaded_file($file['tmp_name'], $destination)) {
    json_response(['error' => 'Le fichier n\'a pas pu être enregistré sur le serveur.'], 500);
}

$stmt = $pdo->prepare(
    'INSERT INTO documents (user_id, request_id, original_name, stored_name, size_bytes)
     VALUES (?, ?, ?, ?, ?)'
);
$stmt->execute([$userId, $requestId, $file['name'], $storedName, $file['size']]);

json_response(['success' => true, 'document_id' => (int) $pdo->lastInsertId()]);
