import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3; // сколько раундов подряд нужно выиграть

const isEven = (num) => num % 2 === 0; // предикат: правда ли, что число чётное

export function run() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const number = Math.floor(Math.random() * 100); // случайное число
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; // игра заканчивается при ошибке
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}

