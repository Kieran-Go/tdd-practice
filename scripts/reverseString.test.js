const reverseString = require('./reverseString');

test('will reverse the word "hello"', () => {
    expect(reverseString('hello')).toBe('olleh');
});
