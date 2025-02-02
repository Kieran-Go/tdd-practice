function ceaserCipher(string, shifter = 0) {
    const arr = string.split("");
    if (arr.length === 0) return "Empty string";

    for(let i = 0; i < arr.length; i++){
        let char = arr[i];

        // Skip if not a letter
        if(!isLetter(char)) continue;

        // Get the alphabet array
        const alpha = char === char.toUpperCase() ? getAlphabet() : getAlphabet(true);
        let charIndex = alpha.indexOf(char);

        // Shift the char index
        charIndex += shifter;

        // If the index is now out of bounds, wrap back around
        if(charIndex > alpha.length - 1){
            charIndex = charIndex - alpha.length;
        }

        arr[i] = alpha[charIndex];
    }
    return arr.join("");
}

function getAlphabet(lower = null) {
    if (lower) {
        // Return lowercase alphabet
        return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }
    // Return uppercase alphabet
    return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
}

function isLetter(char) {
    return char.toUpperCase() != char.toLowerCase();
}

module.exports = ceaserCipher;