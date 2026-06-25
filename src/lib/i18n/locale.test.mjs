import test from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_LANGUAGE, normalizeLanguage, getLanguageFromCookie } from './locale.mjs';

test('normalizeLanguage returns supported locale values', () => {
  assert.equal(normalizeLanguage('id'), 'id');
  assert.equal(normalizeLanguage('EN'), 'en');
  assert.equal(normalizeLanguage('fr'), DEFAULT_LANGUAGE);
});

test('getLanguageFromCookie reads the stored language value', () => {
  assert.equal(getLanguageFromCookie('northstar-language=id'), 'id');
  assert.equal(getLanguageFromCookie('foo=bar; northstar-language=en'), 'en');
  assert.equal(getLanguageFromCookie('foo=bar'), DEFAULT_LANGUAGE);
});
