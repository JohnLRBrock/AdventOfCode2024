"use strict";

export const fetch = (fileUrl: string): string => {
    return require('fs').readFileSync(fileUrl, 'utf8');
}

export const day1 = (): string => {
    return fetch('./input/day1.txt');
}

export const day2 = (): string => {
    return fetch('./input/day2.txt')
}