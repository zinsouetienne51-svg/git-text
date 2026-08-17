<?php
require_once __DIR__ . '/config.php';
require_admin();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['error' => 'Méthode non autorisée.'], 405);
}

$body = get_json_body();
$fields = [
    'bank_holder' => trim($body['holder'] ?? ''),
    'bank_name' => trim($body['bank'] ?? ''),
    'bank_iban' => trim($body['iban'] ?? ''),
    'bank_bic' => trim($body['bic'] ?? ''),
];

$pdo = get_pdo();
$stmt = $pdo->prepare(
    "INSERT INTO site_settings (setting_key, setting_value) VALUES (?, ?)
     ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)"
);
foreach ($fields as $key => $value) {
    if ($value === '') continue;
    $stmt->execute([$key, $value]);
}

json_response(['success' => true]);
