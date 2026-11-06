import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('accepts integer', () => {
  assert.equal(api.isDecimalString('12'), true);
});
test('accepts fraction', () => {
  assert.equal(api.isDecimalString('-.75'), true);
});
test('accepts trailing decimal point', () => {
  assert.equal(api.isDecimalString('4.'), true);
});
test('rejects exponent notation', () => {
  assert.equal(api.isDecimalString('1e3'), false);
});
test('rejects whitespace', () => {
  assert.equal(api.isDecimalString(' 1'), false);
});
test('rejects non-string input', () => {
  assert.throws(() => api.isDecimalString(1), TypeError);
});
