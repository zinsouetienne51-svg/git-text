<?php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['error' => 'Méthode non autorisée.'], 405);
}

$body = get_json_body();
$projectId = (int) ($body['project_id'] ?? 0);
$amount = (float) ($body['amount'] ?? 0);
$donorName = trim($body['donor_name'] ?? '');
$donorEmail = trim($body['donor_email'] ?? '');

if ($projectId <= 0 || $amount <= 0) {
    json_response(['error' => 'Projet et montant valides requis.'], 422);
}

$pdo = get_pdo();

$stmt = $pdo->prepare('SELECT id FROM projects WHERE id = ?');
$stmt->execute([$projectId]);
if (!$stmt->fetch()) {
    json_response(['error' => 'Projet introuvable.'], 404);
}

$userId = $_SESSION['user_id'] ?? null;

$pdo->beginTransaction();
try {
    $stmt = $pdo->prepare(
        'INSERT INTO financements (user_id, project_id, donor_name, donor_email, amount, status)
         VALUES (?, ?, ?, ?, ?, "confirme")'
    );
    $stmt->execute([$userId, $projectId, $donorName ?: null, $donorEmail ?: null, $amount]);

    $stmt = $pdo->prepare('UPDATE projects SET raised_amount = raised_amount + ? WHERE id = ?');
    $stmt->execute([$amount, $projectId]);

    $pdo->commit();
} catch (Exception $e) {
    $pdo->rollBack();
    json_response(['error' => 'Le financement n\'a pas pu être enregistré.'], 500);
}

json_response(['success' => true]);
