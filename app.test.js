const capitalize = require('./app.js')

test('first try', () => {
  expect(capitalize('alice')).toBe('Alice');
});
