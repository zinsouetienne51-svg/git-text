/**
 * Petit client fetch pour parler à l'API PHP dans /api.
 * Toutes les routes sont relatives à /api/ et utilisent les sessions PHP
 * (cookies) pour l'authentification — d'où credentials:'include'.
 */
const API_BASE = 'api/';

async function apiPost(endpoint, data) {
  const res = await fetch(API_BASE + endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data)
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json.error || 'Une erreur est survenue.');
  }
  return json;
}

async function apiGet(endpoint) {
  const res = await fetch(API_BASE + endpoint, { credentials: 'include' });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json.error || 'Une erreur est survenue.');
  }
  return json;
}

/** Redirige vers login.html si l'utilisateur n'est pas connecté. Retourne l'utilisateur sinon. */
async function requireAuth() {
  const session = await apiGet('session.php');
  if (!session.authenticated) {
    window.location.href = 'login.html';
    return null;
  }
  return session.user;
}
