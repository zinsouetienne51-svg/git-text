# Több Segítséget — Site complété (back-end PHP + MySQL)

Ce dossier est **ton dossier tel quel** (design, images, logo inchangés) + tout ce qui
manquait pour que le site fonctionne réellement.

## Ce qui a été ajouté (rien d'existant n'a été modifié en profondeur)

- **`/api`** : toutes les routes PHP (inscription, connexion, déconnexion, session,
  demande d'aide, financement, contact, données du tableau de bord).
- **`/api/schema.sql`** : script SQL — les 6 projets correspondent exactement à ceux
  déjà affichés dans `projets.html` (même ordre, mêmes noms), + un 7ᵉ projet "Là où
  le besoin est le plus urgent" pour l'option générique de `financement.html`.
- **`login.html`** et **`register.html`** : nouvelles pages (même header/logo que le
  reste du site), nécessaires car "Espace personnel" suppose un vrai compte.
- **`js/api.js`** : petit client JS pour parler à l'API.
- **`js/nav.js`** : corrige le bouton menu ☰ sur mobile, qui ne faisait rien.
- **`css/style.css`** : une seule correction, la règle du menu mobile (le reste du
  design n'a pas bougé).

## Dans tes fichiers existants, seuls les formulaires ont été branchés

- `demander-aide.html` : le formulaire envoie maintenant vraiment la demande
  (situation + montant ont été ajoutés, ils manquaient pour qu'une demande ait un
  contenu). Il faut être connecté pour l'utiliser.
- `financement.html` : le menu déroulant des projets avait des options sans valeur
  (impossible de savoir quel projet était choisi) — corrigé. Le formulaire enregistre
  vraiment le don, avec ou sans compte.
- `contact.html` : le message est maintenant vraiment enregistré.
- `dashboard.html` : affiche désormais tes vraies demandes (plus le nom "Jean Laurent
  BONAFE" codé en dur — c'est maintenant le nom du compte connecté).

Tes fichiers `apropos.html`, `faq.html`, `temoignages.html`, `index.html`,
`projets.html` (avec tes images) n'ont reçu que l'ajout du script `nav.js` — rien
d'autre n'a changé visuellement.

## Installation (identique à avant)

1. Installer **XAMPP** (apachefriends.org) et démarrer Apache + MySQL.
2. Copier ce dossier entier dans `htdocs/` (ex. `htdocs/site`).
3. Aller sur `http://localhost/phpmyadmin` → Importer → choisir `api/schema.sql` → Exécuter.
4. Vérifier `api/config.php` (par défaut `root` / mot de passe vide = XAMPP standard).
5. Ouvrir `http://localhost/site/index.html`.

## Pour tester

1. **Espace personnel** → redirige vers **Créer un compte** si tu n'es pas connecté.
2. Crée un compte, puis va sur **Demander une aide** → remplis et envoie.
3. Retourne sur **Espace personnel** → ta demande apparaît (statut "en attente").
4. **Faire un financement** fonctionne aussi sans compte.
5. **Contact** enregistre le message en base (table `contact_messages`).

## Toujours pas inclus (à demander si besoin)

- Interface admin pour changer le statut d'une demande (accepter/refuser, fixer le
  montant accordé) — sans ça, les demandes restent "en attente" indéfiniment.
- Mise à jour automatique des barres de progression sur `projets.html` (actuellement
  toujours les chiffres fixes que tu avais mis, avec tes images) après un financement.

## Traduction FR / HU (réservée à l'administrateur)

Le site s'affiche **par défaut en hongrois**. Un bouton HU / FR apparaît dans le
header, **mais uniquement pour un compte administrateur connecté** — un visiteur
normal ne le voit jamais et ne peut pas changer la langue.

Important : ce n'est **pas** une préférence par visiteur. La langue est enregistrée
en base (`site_settings`, valeur par défaut `hu`) et s'applique **à tout le monde**
— l'admin peut repasser temporairement tout le site en français pour tous les
visiteurs en cliquant sur FR, puis revenir au hongrois avec HU.

Après réimport de `api/schema.sql`, le compte admin (`admin@tobbsegitseg.hu` /
`Admin@2026`) verra le sélecteur HU/FR en se connectant.

## Mode de paiement : virement bancaire

La page **Faire un financement** propose désormais le virement bancaire comme mode
de paiement :

1. Le donateur choisit un projet et un montant, puis clique sur "Obtenir les
   coordonnées bancaires".
2. Le site affiche les coordonnées (titulaire, banque, IBAN, BIC) **et une référence
   unique** (ex. `DON-A1B2C3`) que le donateur doit indiquer dans le libellé de son
   virement.
3. Le don est enregistré en base avec le statut "en attente" — **le montant n'est
   pas encore ajouté au total du projet**.
4. Une fois le virement reçu sur le compte bancaire réel (à vérifier manuellement,
   par exemple via le relevé bancaire), l'admin va dans le panneau admin, retrouve
   le don grâce à sa référence, et clique sur "Confirmer reçu". Le montant est alors
   ajouté au total du projet.

**⚠️ À faire avant mise en production : remplacer les coordonnées bancaires
placeholder.** Après avoir réimporté `api/schema.sql`, connecte-toi en admin et va
dans la section "Coordonnées bancaires affichées aux donateurs" du panneau admin
pour saisir le vrai titulaire, la vraie banque, le vrai IBAN et le vrai BIC. Tant que
ce n'est pas fait, le site affichera "À compléter" aux donateurs.
