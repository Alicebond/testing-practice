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

function caesarCipher(str, shift) {
  let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (shift < 0) return caesarCipher(str, shift + 26)
  let output = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let code = str.charCodeAt(i);

    if (letters.includes(char)) {
      if (65 <= code && code <= 90) {
        char = String.fromCharCode((code - 65 + shift) % 26 + 65);
      } else if (97 <= code && code <= 122) {
        char = String.fromCharCode((code - 97 + shift) % 26 + 97);
      }
    }
    output += char;
  }
  return output;
}

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

// module.exports = capitalize;
export {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
}
