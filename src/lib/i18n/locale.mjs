export const DEFAULT_LANGUAGE = 'en';
export const SUPPORTED_LANGUAGES = ['en', 'id'];

export function normalizeLanguage(value) {
  if (typeof value !== 'string') return DEFAULT_LANGUAGE;

  const normalized = value.toLowerCase();
  return SUPPORTED_LANGUAGES.includes(normalized) ? normalized : DEFAULT_LANGUAGE;
}

export function getLanguageFromCookie(cookieHeader = '') {
  if (typeof cookieHeader !== 'string') return DEFAULT_LANGUAGE;

  const match = cookieHeader
    .split(';')
    .map((entry) => entry.trim())
    .find((entry) => entry.startsWith('northstar-language='));

  if (!match) return DEFAULT_LANGUAGE;

  const [, rawValue] = match.split('=');
  return normalizeLanguage(rawValue);
}

export function setLanguageCookie(value) {
  const language = normalizeLanguage(value);
  if (typeof document === 'undefined') return language;

  const expires = new Date(Date.now() + 60 * 60 * 24 * 365 * 1000).toUTCString();
  document.cookie = `northstar-language=${language}; path=/; expires=${expires}; SameSite=Lax`;
  return language;
}
