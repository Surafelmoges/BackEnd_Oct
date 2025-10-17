const myfirst = require('./myfirst');
const myMultiplier = require('./mysecond');
//const mysecond = require('./mysecond');
const fs = require('fs');


const result1 = myfirst(5);
const result2 = myMultiplier(5);

console.log('Result from myfirst: ' + result1);
console.log('Result from mysecond: ' + result2);

console.log('**************************************************');
console.log('**************************************************');


const inputValue = 14;
const result = myMultiplier(inputValue);

const text = `The value of 14 when passed through the myMultiplier function is: ${result} `;

fs.writeFileSync('resultSu.txt', text, 'utf-8');


console.log('**************************************************');
console.log('The File is created successfully');
console.log('**************************************************');







