// ============================================
// Question 8: Convert Decimal to Binary
// Sawal 8: Decimal ko Binary mein convert karo
// ============================================
// WHAT IT ASKS: Convert a decimal (base-10) number to binary (base-2)
// YE KYA PUCHTA HAI: Decimal (base-10) number ko binary (base-2) mein convert karo
// 
// EXAMPLES:
// MISAALEIN:
// - 5 in binary = 101 (because 5 = 1×4 + 0×2 + 1×1)
//   5 binary mein = 101 (kyunke 5 = 1×4 + 0×2 + 1×1)
// - 10 in binary = 1010
//   10 binary mein = 1010
// - 120 in binary = 1111000
//   120 binary mein = 1111000
// 
// APPROACH: Repeatedly divide by 2, collect remainders from right to left
// TAREEQA: Bar bar 2 se divide karo, remainders ko dayen se bayen jama karo
// 
// LOGIC: Keep dividing by 2, remainder (0 or 1) forms binary digit
// LOGIC: 2 se divide karte raho, remainder (0 ya 1) binary digit banata hai

function decimalToBinary(num) {
    // Special case: 0 in binary is 0
    // Special case: 0 binary mein 0 hi hai
    if (num === 0) {
        return 0;
    }

    let binary = ""; // Will hold binary result | Binary result yahan hoga

    // Keep dividing by 2 until num becomes 0
    // 2 se divide karte raho jab tak num 0 na ho jaye
    while (num > 0) {
        let rem = num % 2;          // Get remainder (0 or 1) | Remainder nikalo (0 ya 1)
        binary = rem + binary;      // Add to left side of binary string | Binary string ke left mein add karo
        num = Math.floor(num / 2);  // Divide by 2 | 2 se divide karo
    }
    return binary;
}

console.log(decimalToBinary(120));