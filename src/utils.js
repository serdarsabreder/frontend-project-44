import { randomInt } from 'node:crypto';

export const getRandomInt = (min, max) => randomInt(min, max + 1);