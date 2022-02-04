import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './app';

test('first try', () => {
  expect(capitalize('alice')).toBe('Alice');
});

test('reverse string', () => {
  expect(reverseString('abcd')).toBe('dcba');
});

test('calculator', () => {
  expect(calculator.add(2, 5)).toEqual(7);
  expect(calculator.subtract(2, 5)).toEqual(-3);
  expect(calculator.divide(2, 5)).toEqual(0.4);
  expect(calculator.multiply(2, 5)).toEqual(10);
});

test('caesar cipher', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza');
  expect(caesarCipher('abc, de', 1)).toBe('bcd, ef');
  expect(caesarCipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 1)).toBe('BCDEFGHIJKLMNOPQRSTUVWXYZA');
});

test('array analyzer', () => {
  const result1 = analyzeArray([1, 4, -3, 0, 9, 4, 6]);
  expect(result1.average).toEqual(3);
  expect(result1.length).toEqual(7);
  expect(result1.max).toEqual(9);
  expect(result1.min).toEqual(-3);
})
