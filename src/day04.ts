"use strict";

import { toMatrix } from "./lib";

// https://adventofcode.com/2024/day/4

export const partOne = (input: string) => {
    const crossword: string[][] = toMatrix(input, '');
    structuredClone(crossword)                              // add rows
        .concat(crossword.map((row) => row.toReversed()));  // add rows reversed
    // columns forward and reversed
    // left to right diagnals and reversed
    // right to left diangals and reversed
};

export const matrixColumns = <T>(matrix: T[][]): T[][] => {
    const columns: T[][] = []; 
    for(let i = 0; i < matrix.length; i++) {
        columns.push(matrix.map((row) => row[i]).join(''));
    }
}
export const partTwo = (input: string) => {};