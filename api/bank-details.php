<?php
require_once __DIR__ . '/config.php';

$pdo = get_pdo();
$stmt = $pdo->query(
    "SELECT setting_key, setting_value FROM site_settings WHERE setting_key IN
     ('bank_holder','bank_name','bank_iban','bank_bic')"
);
$rows = $stmt->fetchAll(PDO::FETCH_KEY_PAIR);

json_response([
    'holder' => $rows['bank_holder'] ?? '',
    'bank' => $rows['bank_name'] ?? '',
    'iban' => $rows['bank_iban'] ?? '',
    'bic' => $rows['bank_bic'] ?? '',
]);
