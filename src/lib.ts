"use strict"

export const toHist = <T>(array: T[]): Record<string, number> => {
    const hist: Record<string, number> = {};
    array.forEach((i: T) => {
        const key = String(i);
        hist[key] = hist[key] ? hist[key] + 1 : 1;
    });
    return hist;
}

export const splitIntoArray = (input: string): string[][] => {
    let first: string[] = [];
    let last: string[] = [];
    input.split('\n').forEach((row) => {
        const items: string[] = row.split('   ');
        last.push(items.pop()!)
        first.push(items.pop()!);
    });
    return [first, last];
}