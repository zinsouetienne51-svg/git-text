<?php
require_once __DIR__ . '/config.php';
require_admin();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['error' => 'Méthode non autorisée.'], 405);
}

$body = get_json_body();
$financementId = (int) ($body['financement_id'] ?? 0);

if ($financementId <= 0) {
    json_response(['error' => 'Requête invalide.'], 422);
}

$pdo = get_pdo();

$stmt = $pdo->prepare('SELECT id, project_id, amount, status FROM financements WHERE id = ?');
$stmt->execute([$financementId]);
$fin = $stmt->fetch();

if (!$fin) {
    json_response(['error' => 'Financement introuvable.'], 404);
}
if ($fin['status'] === 'confirme') {
    json_response(['success' => true, 'already' => true]);
}

$pdo->beginTransaction();
try {
    $stmt = $pdo->prepare(
        'UPDATE financements SET status = "confirme", confirmed_at = NOW() WHERE id = ?'
    );
    $stmt->execute([$financementId]);

    $stmt = $pdo->prepare('UPDATE projects SET raised_amount = raised_amount + ? WHERE id = ?');
    $stmt->execute([$fin['amount'], $fin['project_id']]);

    $pdo->commit();
} catch (Exception $e) {
    $pdo->rollBack();
    json_response(['error' => 'La confirmation a échoué.'], 500);
}

json_response(['success' => true]);
