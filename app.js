function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  }
}

function caesarCipher() {}

function analyzeArray(arr) {
  let average = arr.reduce((sum, cur) => sum + cur, 0) / arr.length;
  let min = arr.sort((a, b) => a - b)[0];
  let max = arr.sort((a, b) => b - a)[0];
  let length = arr.length;
  return {
    average,
    min,
    max,
    length
  };
}

module.exports = capitalize;
