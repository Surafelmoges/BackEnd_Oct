function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;

}
const result = randomNumber();
console.log(`Random number generated: ${result}`);

module.exports = randomNumber;