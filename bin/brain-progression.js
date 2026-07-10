#!/usr/bin/env node
import { runGame } from '../src/index.js';
import { generateRound } from '../src/games/progression.js';

runGame('What number is missing in the progression?', generateRound);

