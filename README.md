## Доступные игры
- `brain-prime` - Простое ли число?.
- `brain-progression` - Арифметическая прогрессия.
- `brain-even` — проверка числа на чётность.
- `brain-calc` — калькулятор (сложение, вычитание, умножение).
- `brain-gcd` — наибольший общий делитель двух чисел.

## Демонстрация игр
- Brain-prime demo: https://asciinema.org/a/gjF56qI2qwMhtcl4
- Brain-progression demo: https://asciinema.org/a/mExn62Jt5mSKV0mR
- Brain-even demo: https://asciinema.org/a/6i5XPMpMmtmCeQh2
- Brain-calc demo: https://asciinema.org/a/tU3Z4O9cNgnURyuc
- Brain-gcd demo: https://asciinema.org/a/auQziey56WHVLj4y

### Hexlet tests and linter status:
[![Actions Status](https://github.com/serdarsabreder/frontend-project-44/actions/w$
[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=ser$

## Стек

- **Язык:** JavaScript (ES Modules) — консольное приложение на Node.js.
- **Ввод данных:** [readline-sync](https://www.npmjs.com/package/readline-sync).
- **Качество кода:** ESLint 10 (flat config — `@eslint/js`, `globals`).
- **Инструменты:** npm, Makefile (`install`, `lint`, `publish`).
- **CI:** GitHub Actions (проверка Hexlet) + SonarCloud (quality gate).

## Полезные сниппеты

Игровой движок — каждый `src/games/*.js` экспортирует `generateRound()`:

```js
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

    if (answer.trim().toLowerCase() !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
```

Генератор случайного числа, используется во всех играх:

```js
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
```

Flat-конфиг ESLint для консольных скриптов на Node.js:

```js
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
]);
```

Быстрые команды (см. `Makefile`):

```make
make install      # установка зависимостей (npm ci)
make brain-even   # запуск игры
make lint         # npx eslint .
make publish      # npm publish --dry-run
```

