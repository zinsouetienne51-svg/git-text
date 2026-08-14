<?php
require_once __DIR__ . '/config.php';

$pdo = get_pdo();
$stmt = $pdo->query('SELECT id, name, description, goal_amount, raised_amount FROM projects ORDER BY id');
$projects = $stmt->fetchAll();

$formatted = array_map(function ($p) {
    $percent = $p['goal_amount'] > 0
        ? round(($p['raised_amount'] / $p['goal_amount']) * 100)
        : 0;
    return [
        'id' => (int) $p['id'],
        'name' => $p['name'],
        'description' => $p['description'],
        'goal_amount' => (float) $p['goal_amount'],
        'raised_amount' => (float) $p['raised_amount'],
        'percent' => min(100, $percent),
    ];
}, $projects);

json_response(['projects' => $formatted]);
