"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitIntoArray = exports.toHist = void 0;
const toHist = (array) => {
    const hist = {};
    array.forEach((i) => {
        const key = String(i);
        hist[key] = hist[key] ? hist[key] + 1 : 1;
    });
    return hist;
};
exports.toHist = toHist;
const splitIntoArray = (input) => {
    let first = [];
    let last = [];
    input.split('\n').forEach((row) => {
        const items = row.split('   ');
        last.push(items.pop());
        first.push(items.pop());
    });
    return [first, last];
};
exports.splitIntoArray = splitIntoArray;
