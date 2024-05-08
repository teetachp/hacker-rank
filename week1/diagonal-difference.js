'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let leftSide = 0
    let rightSide = 0
    for (let rowIdx = 0; rowIdx < arr.length; rowIdx++) {
        for (let columnIdx = 0; columnIdx  < arr[rowIdx].length; columnIdx++) {
            if (rowIdx == columnIdx) {
                leftSide = leftSide + arr[rowIdx][columnIdx]
            }

            if (columnIdx == arr[rowIdx].length - (rowIdx + 1)) {
                rightSide = rightSide + arr[rowIdx][columnIdx]
            }
        }
    }

    const diff = (leftSide - rightSide) > -1 ? (leftSide - rightSide) : (leftSide - rightSide) * -1
    return diff
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
