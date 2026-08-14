<?php
require_once __DIR__ . '/config.php';

$pdo = get_pdo();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Lecture publique : tout le monde doit voir la langue choisie par l'admin.
    $stmt = $pdo->prepare("SELECT setting_value FROM site_settings WHERE setting_key = 'site_lang'");
    $stmt->execute();
    $lang = $stmt->fetchColumn();
    json_response(['lang' => $lang ?: 'fr']);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Écriture réservée aux administrateurs.
    require_admin();

    $body = get_json_body();
    $lang = $body['lang'] ?? '';
    if (!in_array($lang, ['fr', 'hu'], true)) {
        json_response(['error' => 'Langue invalide.'], 422);
    }

    $stmt = $pdo->prepare(
        "INSERT INTO site_settings (setting_key, setting_value) VALUES ('site_lang', ?)
         ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)"
    );
    $stmt->execute([$lang]);

    json_response(['success' => true, 'lang' => $lang]);
}

json_response(['error' => 'Méthode non autorisée.'], 405);
