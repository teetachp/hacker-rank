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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const time = s.substring(0, 8)
    const unit = s.substring(8, 10)
    const timeSplit  = time.split(":");
    let hour = parseInt(timeSplit[0]);

    if (hour > 13 || hour < 0) {
        return
    }

    switch(unit) {
        case 'AM':
            if (hour == 12) {
                hour = 0 
            } 
            timeSplit[0] = hour < 10? `0${hour}`: `${hour}`
          break
        case 'PM':
            if (hour == 12) {
                hour = 12 
            } else {
                hour = hour + 12
            }
            timeSplit[0] = hour < 10? `0${hour}`: `${hour}`
          break
        default:
          break
    }
    return timeSplit.join(":")
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);
    console.log(result)
    // ws.write(result + '\n');

    // ws.end();
}
