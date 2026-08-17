<?php
require_once __DIR__ . '/config.php';
require_admin();

$pdo = get_pdo();

$requests = $pdo->query(
    "SELECT r.id, r.request_type, r.situation, r.amount_requested, r.amount_granted,
            r.status, r.created_at, u.full_name, u.email
     FROM aide_requests r
     JOIN users u ON u.id = r.user_id
     ORDER BY r.created_at DESC"
)->fetchAll();

$financements = $pdo->query(
    "SELECT f.id, f.amount, f.donor_name, f.donor_email, f.reference_code, f.status, f.created_at, p.name AS project_name
     FROM financements f
     JOIN projects p ON p.id = f.project_id
     ORDER BY (f.status = 'en_attente') DESC, f.created_at DESC LIMIT 50"
)->fetchAll();

$messages = $pdo->query(
    "SELECT id, full_name, email, subject, message, created_at
     FROM contact_messages ORDER BY created_at DESC LIMIT 50"
)->fetchAll();

$stats = $pdo->query(
    "SELECT
        (SELECT COUNT(*) FROM users) AS total_users,
        (SELECT COUNT(*) FROM aide_requests WHERE status = 'en_attente') AS pending_requests,
        (SELECT COUNT(*) FROM financements WHERE status = 'en_attente') AS pending_financements,
        (SELECT COALESCE(SUM(amount),0) FROM financements WHERE status = 'confirme') AS total_raised"
)->fetch();

json_response([
    'requests' => $requests,
    'financements' => $financements,
    'messages' => $messages,
    'stats' => $stats,
]);
