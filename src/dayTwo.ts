"use strict"
// adventofcode.com/2024/day/2

import {} from './lib'

export const partOne = (input: string): number => {

    return 0;
}

const toMatrix = (input: string, seperator?: string): number[][] => {
    return input.split('\n').map((row) => row.split(seperator || ' ').map(Number));
}

const increasing = (array: number[]): boolean => {
    // every number goes up by 1-3
    for(let i = 0; i < array.length - 1; i++) {
        if (![1, 2, 3].includes(array[i] - array[i + 1])) { return false; }
    }
    return true;
}

const everyPair = (array: number[], callback: Function) => {

}

export const partTwo = (input: string): number => {
    return 0;
}
