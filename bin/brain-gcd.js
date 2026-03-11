#!/usr/bin/env node

import * as readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Алгоритм Евклида для вычисления НОД
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

// Генерация случайного числа в диапазоне [min, max]
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  console.log('brain-gcd');
  console.log('Welcome to the Brain Games!');

  rl.question('May I have your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    console.log('Find the greatest common divisor of given numbers.');

    let correctAnswersCount = 0;
    const totalQuestions = 3;

    function askNextQuestion() {
      // Генерируем два случайных числа от 1 до 100
      const num1 = getRandomInt(1, 100);
      const num2 = getRandomInt(1, 100);

      // Вычисляем правильный ответ
      const correctAnswer = gcd(num1, num2);

      console.log(`Question: ${num1} ${num2}`);

      rl.question('Your answer: ', (userInput) => {
        // Пытаемся преобразовать ввод в число
        const userAnswer = parseInt(userInput, 10);

        if (isNaN(userAnswer)) {
          // Если ввод не является числом
          console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
          console.log(`Let's try again, ${name}!`);
          rl.close();
          return;
        }

        if (userAnswer === correctAnswer) {
          correctAnswersCount++;
          console.log('Correct!');

          // Проверяем, выиграл ли пользователь
          if (correctAnswersCount === totalQuestions) {
            console.log(`Congratulations, ${name}!`);
            rl.close();
          } else {
            // Задаём следующий вопрос
            askNextQuestion();
          }
        } else {
          // Неправильный ответ
          console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
          console.log(`Let's try again, ${name}!`);
          rl.close();
        }
      });
    }

    // Запускаем первый вопрос
    askNextQuestion();
  });
}

// Запускаем игру
startGame();

