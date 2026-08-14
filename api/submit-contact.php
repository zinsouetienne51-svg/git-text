<?php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['error' => 'Méthode non autorisée.'], 405);
}

$body = get_json_body();
$fullName = trim($body['full_name'] ?? '');
$email = trim($body['email'] ?? '');
$subject = trim($body['subject'] ?? '');
$message = trim($body['message'] ?? '');

if ($fullName === '' || $email === '' || $message === '') {
    json_response(['error' => 'Nom, email et message sont obligatoires.'], 422);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_response(['error' => 'Adresse email invalide.'], 422);
}

$pdo = get_pdo();
$stmt = $pdo->prepare(
    'INSERT INTO contact_messages (full_name, email, subject, message) VALUES (?, ?, ?, ?)'
);
$stmt->execute([$fullName, $email, $subject, $message]);

json_response(['success' => true]);
