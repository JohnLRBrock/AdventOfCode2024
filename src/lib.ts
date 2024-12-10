"use strict"

export const toHist = <T>(array: T[]): Record<string, number> => {
    const hist: Record<string, number> = {};
    array.forEach((i: T) => {
        const key = String(i);
        hist[key] = hist[key] ? hist[key] + 1 : 1;
    });
    return hist;
}

export const splitIntoArrays = (input: string): string[][] => {
    const first: string[] = [];
    const last: string[] = [];
    input.split('\n').forEach((row) => {
        const items: string[] = row.split('   ');
        last.push(items.pop()!)
        first.push(items.pop()!);
    });
    return [first, last];
}

export const toMatrix = (input: string, seperator?: string): number[][] => {
    return input.split('\n').map(row => row.split(seperator || ' ').map(Number));
}

export const everyPair = (array: number[], predicate: Function) => {
    return array.every((n, i: number) => !i || predicate(array[i - 1], n));
}

const _findPair = (array: number[], predicate: Function): number => {
    const index = array.findIndex((v, i) => { 
        if (i === 0) {
            const firstPair = predicate(v, array[i + 1]);
            const secondPair = predicate(array[i + 1], array[i + 2]);
            // remove first element if the first pair fails the predicate but the second pair passes.
            return !firstPair && secondPair;
        } else {
            return !predicate(array[i - 1], v); // remove second item in a pair that fails the predicate
        }
    });

    return index
};