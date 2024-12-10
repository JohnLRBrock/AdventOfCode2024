"use strict";
// adventofcode.com/2024/day/1

import { toHist, splitIntoArrays } from './lib'

export const partOne = (input: string): number => {
    const [first, last] = splitIntoArrays(input);
    const firstInts = first.map(Number);
    const lastInts = last.map(Number);
    firstInts.sort();
    lastInts.sort();
    let sum = 0;
    for(let i = 0; i < first.length; i++) {
        sum += Math.abs(firstInts[i] - lastInts[i]);
    }
    return sum;
}

export const partTwo = (input: string): number => {
    const [first, last] = splitIntoArrays(input);
    const hist = toHist(last);
    return first.reduce((sum, i) => sum + (parseInt(i) * (hist[i] || 0)), 0);
}
