import test from 'node:test';
import assert from 'node:assert/strict';
import { runGame, start } from '../src/index.js';

const withCapturedLogs = (fn) => {
  const logs = [];
  const originalLog = console.log;
  console.log = (message) => logs.push(String(message));
  try {
    fn(logs);
  } finally {
    console.log = originalLog;
  }
  return logs;
};

test('runGame — names the player and greets them', () => {
  const logs = withCapturedLogs(() => {
    const answers = ['Alice', '1', '1', '1'];
    runGame('desc', () => ({ question: '1', correctAnswer: '1' }), () => answers.shift());
  });
  assert.ok(logs.includes('Hello, Alice!'));
  assert.ok(logs.includes('Welcome to the Brain Games!'));
});

test('runGame — congratulates after three correct answers', () => {
  const logs = withCapturedLogs(() => {
    const answers = ['Alice', '1', '1', '1'];
    runGame('desc', () => ({ question: '1', correctAnswer: '1' }), () => answers.shift());
  });
  assert.equal(logs.filter((line) => line === 'Correct!').length, 3);
  assert.ok(logs.includes('Congratulations, Alice!'));
});

test('runGame — a wrong answer ends the game early', () => {
  const logs = withCapturedLogs(() => {
    const answers = ['Bob', '2'];
    runGame('desc', () => ({ question: '1', correctAnswer: '1' }), () => answers.shift());
  });
  assert.ok(logs.includes("'2' is wrong answer ;(. Correct answer was '1'."));
  assert.ok(logs.includes("Let's try again, Bob!"));
  assert.ok(!logs.some((line) => line === 'Congratulations, Bob!'));
});

test('runGame — answer matching is case and whitespace insensitive', () => {
  const logs = withCapturedLogs(() => {
    const answers = ['Bob', '  1  ', '1', '1'];
    runGame('even', () => ({ question: '2', correctAnswer: '1' }), () => answers.shift());
  });
  assert.ok(logs.includes('Correct!'));
});

test('start — asks for the name and greets', () => {
  const logs = withCapturedLogs(() => {
    start(() => 'Serdar');
  });
  assert.ok(logs.includes('Hello, Serdar!'));
  assert.ok(logs.includes('Welcome to the Brain Games!'));
});