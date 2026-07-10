const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

export const generateRound = () => {
  const length = 5 + Math.floor(Math.random() * 6); // 5–10 чисел
  const start = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 10) + 1; // шаг >= 1

  const progression = getProgression(start, step, length);
  const hiddenIndex = Math.floor(Math.random() * length);
  const correctAnswer = progression[hiddenIndex];

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return { question, correctAnswer };
};

