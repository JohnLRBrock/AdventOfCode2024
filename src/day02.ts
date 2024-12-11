"use strict";
// adventofcode.com/2024/day/2

import { toMatrix, everyPair } from './lib'

export const partOne = (input: string): number => {
    return toMatrix(input)
        .filter(row => rowIncreasing(row) || rowDecreasing(row))
        .length;
};

export const partTwo = (input: string): number => {
    return toMatrix(input)
        .map(everyPermutation)
        .filter((rows) => rows.some((row) => rowIncreasing(row) || rowDecreasing(row)))
        .length;
};

const rowIncreasing = (array: number[]): boolean => everyPair(array, increasing); 
const rowDecreasing = (array: number[]): boolean => everyPair(array, decreasing); 

const increasing = (x: number, y: number) => y - x > 0 && y - x <= 3;
const decreasing = (x: number, y: number) => x - y > 0 && x - y <= 3;

const everyPermutation = (row: number[]): number[][] => {
    return row.map((_x, i) => row.toSpliced(i, 1))
}
