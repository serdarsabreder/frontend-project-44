import test from 'node:test';
import assert from 'node:assert/strict';
import { getRandomInt } from '../src/utils.js';

test('getRandomInt returns an integer within the inclusive range', () => {
  for (let i = 0; i < 1000; i += 1) {
    const value = getRandomInt(1, 6);
    assert.ok(Number.isInteger(value));
    assert.ok(value >= 1 && value <= 6, `value ${value} out of range`);
  }
});

test('getRandomInt returns the same number when min equals max', () => {
  assert.equal(getRandomInt(5, 5), 5);
});

test('getRandomInt works with zero-based ranges', () => {
  for (let i = 0; i < 100; i += 1) {
    const value = getRandomInt(0, 2);
    assert.ok(value >= 0 && value <= 2);
  }
});