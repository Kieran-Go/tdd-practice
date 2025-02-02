function analyzeArray(arr) {
    return {
        average: getAverage(arr),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    };
}

function getAverage(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) total += arr[i];
    return total / arr.length;
}

module.exports = analyzeArray;