const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  // Случайный выбор операции
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomNumber(0, operations.length - 1)];

  let correctAnswer;
  let question;

  switch (operation) {
    case '+':
      correctAnswer = num1 + num2;
      question = `${num1} + ${num2}`;
      break;
    case '-':
      correctAnswer = num1 - num2;
      question = `${num1} - ${num2}`;
      break;
    case '*':
      correctAnswer = num1 * num2;
      question = `${num1} * ${num2}`;
      break;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }

  return {
    question,
    correctAnswer: String(correctAnswer), // Приводим к строке для сравнения
  };
};

const gameDescription = 'What is the result of the expression?';

export default { gameDescription, generateRound };

