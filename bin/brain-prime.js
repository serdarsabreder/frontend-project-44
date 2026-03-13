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

  // Генерируем одно случайное число
  const number = Math.floor(Math.random() * 99) + 2;
  console.log(`Question: ${number}`);

  // Получаем ответ пользователя
  const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  // Проверяем ответ и выводим результат
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
}

brainPrime();

