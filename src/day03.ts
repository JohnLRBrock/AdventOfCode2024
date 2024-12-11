"use strict";

import { access } from "fs";

// https://adventofcode.com/2024/day/3

const part1: RegExp = /mul\((\d{1,3}),(\d{1,3})\)/g;
const mulBeforeDont = /^.*?mul\((\d{1,3}),(\d{1,3})\)+.*?don't\(\)/g;
const part2 = /(?:(?:mul\((\d{1,3}),(\d{1,3})\))|(do\(\))|(don't\(\)))/g;

export const partOne = (input: string): number => {
    return [...input.matchAll(part1)]
        .map(match => parseInt(match[1]) * parseInt(match[2]))
        .reduce((accum, x) => accum + x, 0)
};

export const partTwo = (input: string) => {
    let on: boolean = true;
    let sum = 0;
    const matches = input.matchAll(part2);
    [...matches].forEach((match) => {
        switch(match[0]) {
            case 'do()': 
                on = true;
                break;
            case "don't()":
                on = false;
                break;
            default:
                sum += on ? parseInt(match[1]) * parseInt(match[2]) : 0;
        }
    });
    return sum;
};
// export const toTouple = <T>(a: T[], n?: number): T[][] => {
//     let touple: T[][] = [];
//     while(a.length > 0) {
//         touple.push(a.splice(0, n || 2));
//     }
//     return touple;
// };

