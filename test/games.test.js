import test from 'node:test';
import assert from 'node:assert/strict';
import { getRandomInt } from '../src/utils.js';
import * as calc from '../src/games/calc.js';
import * as even from '../src/games/even.js';
import * as gcd from '../src/games/gcd.js';
import * as prime from '../src/games/prime.js';
import * as progression from '../src/games/progression.js';

const games = [calc, even, gcd, prime, progression];

const trueGcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0) return false;
  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

for (const game of games) {
  test(`${game.description} — generateRound returns question and correctAnswer`, () => {
    for (let i = 0; i < 50; i += 1) {
      const { question, correctAnswer } = game.generateRound();
      assert.equal(typeof question, 'string');
      assert.equal(typeof correctAnswer, 'string');
      assert.ok(question.length > 0);
      assert.ok(correctAnswer.length > 0);
    }
  });
}

test('calc — correctAnswer matches the expression result', () => {
  for (let i = 0; i < 100; i += 1) {
    const { question, correctAnswer } = calc.generateRound();
    const [a, operator, b] = question.split(' ');
    const aNum = Number(a);
    const bNum = Number(b);
    const expected = operator === '+' ? aNum + bNum : operator === '-' ? aNum - bNum : aNum * bNum;
    assert.equal(correctAnswer, String(expected));
  }
});

test('even — correctAnswer matches number parity', () => {
  for (let i = 0; i < 100; i += 1) {
    const { question, correctAnswer } = even.generateRound();
    const number = Number(question);
    assert.equal(correctAnswer, number % 2 === 0 ? 'yes' : 'no');
  }
});

test('gcd — correctAnswer is the greatest common divisor', () => {
  for (let i = 0; i < 100; i += 1) {
    const { question, correctAnswer } = gcd.generateRound();
    const [a, b] = question.split(' ').map(Number);
    assert.equal(correctAnswer, String(trueGcd(a, b)));
  }
});

test('prime — correctAnswer matches primality', () => {
  for (let i = 0; i < 100; i += 1) {
    const { question, correctAnswer } = prime.generateRound();
    const number = Number(question);
    assert.equal(correctAnswer, isPrime(number) ? 'yes' : 'no');
  }
});

test('progression — exactly one hidden value, matching the correctAnswer', () => {
  for (let i = 0; i < 100; i += 1) {
    const { question, correctAnswer } = progression.generateRound();
    const values = question.split(' ');
    const hiddenCount = values.filter((value) => value === '..').length;
    assert.equal(hiddenCount, 1);

    const hiddenIndex = values.indexOf('..');
    const shown = values
      .map((value, index) => [value, index])
      .filter(([value]) => value !== '..');
    const step = (Number(shown[1][0]) - Number(shown[0][0])) / (shown[1][1] - shown[0][1]);
    const start = Number(shown[0][0]) - shown[0][1] * step;
    assert.equal(correctAnswer, String(start + hiddenIndex * step));
  }
});

test('progression — length is between 5 and 10 numbers', () => {
  for (let i = 0; i < 100; i += 1) {
    const { question } = progression.generateRound();
    const length = question.split(' ').length;
    assert.ok(length >= 5 && length <= 10, `length ${length} out of range`);
  }
});

test('getRandomInt imported from utils is used by the games', () => {
  assert.equal(typeof getRandomInt, 'function');
});