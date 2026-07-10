const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export function generateRound() {
  const number = getRandomInt(1, 100);
  const question = String(number);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return { question, correctAnswer };
}






