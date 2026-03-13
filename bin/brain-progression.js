#!/usr/bin/env node

import readlineSync from 'readline-sync';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

const playProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  const roundsToWin = 3;
  let correctAnswers = 0;

  while (correctAnswers < roundsToWin) {
    // Генерация параметров прогрессии
    const start = Math.floor(Math.random() * 20) + 1; // от 1 до 20
    const step = Math.floor(Math.random() * 10) + 1;  // от 1 до 10
    const length = Math.floor(Math.random() * 6) + 5; // от 5 до 10

    // Создание прогрессии
    const progression = generateProgression(start, step, length);

    // Выбор позиции для скрытого числа
    const hiddenIndex = Math.floor(Math.random() * length);
    const correctAnswer = progression[hiddenIndex];

    // Создание строки с вопросом
    const questionProgression = progression.map((num, index) =>
      index === hiddenIndex ? '..' : num
    ).join(' ');

    console.log(`Question: ${questionProgression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      correctAnswers++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playProgressionGame();

