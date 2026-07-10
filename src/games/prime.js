const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export function generateRound() {
  const number = getRandomInt(2, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = String(number);

  return { question, correctAnswer };
}

