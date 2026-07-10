const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getOperatorAndResult = (a, b, operator) => {
  switch (operator) {
    case '+':
      return { operator, result: a + b };
    case '-':
      return { operator, result: a - b };
    case '*':
      return { operator, result: a * b };
    default:
      throw new Error('Unknown operator');
  }
};

export const description = 'What is the result of the expression?';

export function generateRound() {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];

  const { result } = getOperatorAndResult(a, b, operator);
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = (result);

  return { question, correctAnswer };
}

