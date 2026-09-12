import { runGame } from '../index.js';
import * as calc from './calc.js';
import * as even from './even.js';
import * as gcd from './gcd.js';
import * as prime from './prime.js';
import * as progression from './progression.js';

const games = { calc, even, gcd, prime, progression };

export const launch = (name) => {
  const { description, generateRound } = games[name];
  runGame(description, generateRound);
};