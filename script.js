function convertToRoman(num) {
    // Define Roman numeral symbols and their values
    const obj = [
        ['M', 1000], 
        ['D', 500], 
        ['C', 100], 
        ['L', 50], 
        ['X', 10], 
        ['V', 5], 
        ['I', 1]
    ];

    let result = '';

    // Iterate through the obj array and build the Roman numeral
    for (const [symbol, value] of obj) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Example usage:
console.log(convertToRoman(36));  // XXXVI
console.log(convertToRoman(14));  // XIV
console.log(convertToRoman(798)); // DCCXCVIII
console.log(convertToRoman(39999)); // MMMCMXCIX
console.log(convertToRoman(100000)); // MMMMM
