console.log('My first module');

function myMultiplier(a) {
  return a * 2;
}

const resu = myMultiplier(4);

console.log(resu);

module.exports = myMultiplier;
