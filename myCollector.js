const myfirst = require('./myfirst');
const myMultiplier = require('./mysecond');
const mysecond = require('./mysecond');
const fs = require('fs');


const result1 = myfirst(5);
const result2 = myMultiplier(5);

console.log('Result from myfirst: ' + result1);
console.log('Result from mysecond: ' + result2);

console.log('**************************************************');
console.log('**************************************************');


const inputValue = 14;
const result = myMultiplier(inputValue);

const text = `The value of 14 when passed through the myMultiplier function is: ${result}\n`;

fs.writeFileSync('resultSu.txt', text, 'utf-8');


console.log('**************************************************');
console.log('The First File is created successfully');
console.log('**************************************************');


const resultTwo  = mysecond(inputValue);

const textTwo = `The value of 14 when passed through the mysecond function is: ${resultTwo}`;
fs.appendFileSync('resultSu.txt', textTwo, 'utf-8');

console.log('**************************************************');
console.log('The Second File is created successfully');

console.log('Both results are written successfully in resultSu.txt');
console.log('**************************************************');











