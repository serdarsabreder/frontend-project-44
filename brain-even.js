#!/usr/bin/env node

import readline from 'node:readline'; // Используем префикс node:
import { stdin as input, stdout as output } from 'node:process'; // Используем префикс node:

const rl = readline.createInterface({ input, output });


const isEven = (num) => num % 2 === 0;

const askQuestion = () => {
  return Math.floor(Math.random() * 100); 
};

const playGame = () => {
  console.log('Welcome to the Brain Games!');

  rl.question('May I have your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswers = 0;

    const askNextQuestion = () => {
      if (correctAnswers >= 3) {
        console.log(`Congratulations, ${name}!`);
        rl.close();
        return;
      }

      const number = askQuestion();
      console.log(`Question: ${number}`);

      rl.question('Your answer: ', (answer) => {
        const isNumberEven = isEven(number);
        const expectedAnswer = isNumberEven ? 'yes' : 'no';

        if (answer.trim().toLowerCase() === expectedAnswer) {
          console.log('Correct!');
          correctAnswers++;
          askNextQuestion();
        } else {
          console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
          console.log(`Let's try again, ${name}!`);
          rl.close();
        }
      });
    };

    askNextQuestion();
  });
};

playGame();


