#!/usr/bin/env node

import runGame from '../src/index.js';
import calcGame from '../games/calc.js';

runGame(calcGame.gameDescription, calcGame.generateRound);

