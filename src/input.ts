"use strict";

export const day = (n: Number): string => {
    return fetch(`./input/day${n}.txt`);
}

const fetch = (fileUrl: string): string => {
    return require('fs').readFileSync(fileUrl, 'utf8');
}
