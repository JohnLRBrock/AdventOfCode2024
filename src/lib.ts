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