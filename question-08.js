// Decimal to Binary

function decimalToBinary(num) {
    if (num === 0) {
        return 0;
    }
    let binary = "";
    while (num > 0) {
        let rem = num % 2;
        binary = rem + binary;
        num = Math.floor(num / 2);
    }
    return binary;
}

console.log(decimalToBinary(120));