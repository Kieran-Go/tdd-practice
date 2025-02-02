const ceaserCipher = require("./ceaserCipher");

test('Use ceaser sipher serialization on the given string', () => {
    expect(ceaserCipher("abCde", 3)).toBe("deFgh");
});

test('Ceaser sipher should wrap correctly', () => {
    expect(ceaserCipher("xyz", 3)).toBe("abc");
});

test('Preseve letter case', () => {
    expect(ceaserCipher("HeLLo", 3)).toBe("KhOOr");
});

test('Preseve letter case', () => {
    expect(ceaserCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
