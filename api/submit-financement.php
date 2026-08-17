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

// Référence unique à indiquer dans le libellé du virement, pour que l'admin
// puisse rapprocher le virement reçu de ce don précis.
$referenceCode = 'DON-' . strtoupper(substr(bin2hex(random_bytes(4)), 0, 6));

// Le don est créé "en_attente" : le montant n'est ajouté au projet qu'une fois
// le virement confirmé par l'admin (voir api/admin-confirm-financement.php).
$stmt = $pdo->prepare(
    'INSERT INTO financements (user_id, project_id, donor_name, donor_email, amount, payment_method, reference_code, status)
     VALUES (?, ?, ?, ?, ?, "virement", ?, "en_attente")'
);
$stmt->execute([$userId, $projectId, $donorName ?: null, $donorEmail ?: null, $amount, $referenceCode]);

$bankStmt = $pdo->query(
    "SELECT setting_key, setting_value FROM site_settings WHERE setting_key IN
     ('bank_holder','bank_name','bank_iban','bank_bic')"
);
$bankRows = $bankStmt->fetchAll(PDO::FETCH_KEY_PAIR);

json_response([
    'success' => true,
    'reference_code' => $referenceCode,
    'bank' => [
        'holder' => $bankRows['bank_holder'] ?? '',
        'bank' => $bankRows['bank_name'] ?? '',
        'iban' => $bankRows['bank_iban'] ?? '',
        'bic' => $bankRows['bank_bic'] ?? '',
    ],
]);

