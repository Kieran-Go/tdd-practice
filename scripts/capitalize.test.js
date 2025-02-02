const capitalize = require('./capitalize');

test('first letter is capitalized', () => {
    expect(capitalize('hello')).toBe('Hello');
});
