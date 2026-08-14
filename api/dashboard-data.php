<?php
require_once __DIR__ . '/config.php';

$userId = require_login();
$pdo = get_pdo();

// KPIs
$stmt = $pdo->prepare(
    "SELECT
        COUNT(*) AS total_requests,
        SUM(status = 'en_attente' OR status = 'en_cours') AS pending_requests,
        SUM(status = 'acceptee') AS accepted_requests,
        COALESCE(SUM(CASE WHEN status = 'acceptee' THEN amount_granted ELSE 0 END), 0) AS total_amount
     FROM aide_requests WHERE user_id = ?"
);
$stmt->execute([$userId]);
$kpis = $stmt->fetch();

// Recent updates (latest requests, most recently updated first)
$stmt = $pdo->prepare(
    "SELECT id, request_type, status, amount_granted, amount_requested, updated_at
     FROM aide_requests WHERE user_id = ?
     ORDER BY updated_at DESC LIMIT 8"
);
$stmt->execute([$userId]);
$updates = $stmt->fetchAll();

$labels = [
    'en_attente' => 'en attente',
    'en_cours'   => 'en cours d\'examen',
    'acceptee'   => 'acceptée',
    'refusee'    => 'refusée',
];

$formatted = array_map(function ($row) use ($labels) {
    return [
        'title' => 'Demande #' . $row['id'] . ' (' . $row['request_type'] . ') — ' . ($labels[$row['status']] ?? $row['status']),
        'amount' => $row['amount_granted'] ?? $row['amount_requested'],
        'status' => $row['status'],
        'date' => $row['updated_at'],
    ];
}, $updates);

json_response([
    'kpis' => [
        'total_requests' => (int) $kpis['total_requests'],
        'pending_requests' => (int) $kpis['pending_requests'],
        'accepted_requests' => (int) $kpis['accepted_requests'],
        'total_amount' => (float) $kpis['total_amount'],
    ],
    'updates' => $formatted,
]);
