'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr, n) {
    // Write your code here
    let minusCount = 0;
    let zeroCount = 0;
    let plusCount = 0;

    for (const data of arr) {
        if (data < 0) {
            minusCount++
        } else if (data == 0) {
            zeroCount++
        } else if (data > 0) {
            plusCount++
        }
    }

    const rationMinus = minusCount / n
    const rationZero = zeroCount / n
    const rationPlus = plusCount / n

    const rationList = [rationPlus.toFixed(6), rationMinus.toFixed(6), rationZero.toFixed(6)]
    return rationList
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const rationList = plusMinus(arr, n);
    console.log(rationList[0])
    console.log(rationList[1])
    console.log(rationList[2])
}
