const operation = require('../resources/calc');

describe( 'Operations test', () => {
  test('Operation 1 + 2 to equal 3', () => {
    expect(operation.addition(1, 2)).toBe(3);
  });

  test('Operation 2 - 1 to equal 1', () => {
    expect(operation.subtraction(2, 1)).toBe(1);
  });

  test('Operation 1 * 2 to equal 2', () => {
    expect(operation.multiplication(1, 2)).toBe(2);
  });

  test('Operation 2 / 1 to equal 2', () => {
    expect(operation.division(2, 1)).toBe(2);
  });

});