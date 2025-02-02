const calculator = require('./calculator');

test('return the sum of two numbers', () => {
    expect(calculator.add(2, 3)).toEqual(5);
});

test('return the difference of two numbers', () => {
    expect(calculator.subtract(5, 3)).toEqual(2);
});

test('return the product of two numbers', () => {
    expect(calculator.multiply(2, 3)).toEqual(6);
});

test('return the quotient of two numbers', () => {
    expect(calculator.divide(6, 3)).toEqual(2);
});

test('handle division by zero', () => {
    expect(calculator.divide(5, 0)).toEqual("Error: Cannot divide by 0");
});
