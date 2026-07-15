// src/index.js
import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

export const runGame = (gameDescription, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const { question, correctAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    // Сравниваем с учётом регистра и пробелов (на случай, если пользователь введёт " yes ")
    if (answer.trim().toLowerCase() !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

// Этот экспорт нужен специально для bin/brain-games.js
export const start = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Welcome to the Brain Games!');
};

