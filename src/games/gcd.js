const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Алгоритм Евклида для поиска НОД
const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

export const description = 'Find the greatest common divisor of given numbers.';

export function generateRound() {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);

  const correctAnswer = (gcd(a, b));
  const question = `${a} ${b}`;

  return { question, correctAnswer };
}

