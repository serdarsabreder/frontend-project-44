#!/usr/bin/env node
import readlineSync from 'readline-sync';

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const sqrtN = Math.floor(Math.sqrt(n));
  for (let divisor = 3; divisor <= sqrtN; divisor += 2) {
    if (n % divisor === 0) {
      return false;
    }
  }
  return true;
}

function brainPrime() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const roundsToWin = 3;

  for (let round = 1; round <= roundsToWin; round++) {
    const number = Math.floor(Math.random() * 99) + 2;
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

brainPrime();

