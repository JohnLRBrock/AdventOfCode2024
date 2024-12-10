"use strict"
// adventofcode.com/2024/day/2

import { toMatrix, everyPair } from './lib'

export const partOne = (input: string): number => {
    return toMatrix(input)
        .filter(row => increasing(row) || decreasing(row))
        .length;
}

export const partTwo = (input: string): number => {
    return 0;
}

const increasing = (array: number[]): boolean => {
    return everyPair(array, (x: number, y: number) => y - x > 0 && y - x <= 3);
}

const decreasing = (array: number[]): boolean => {
    return everyPair(array, (x: number, y: number) => x - y > 0 && x - y <= 3);
}
