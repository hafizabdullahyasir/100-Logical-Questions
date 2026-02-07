// ============================================
// Question 3: Find GCD and LCM of two numbers
// Sawal 3: Do numbers ka GCD aur LCM nikalo
// ============================================
// WHAT IT ASKS: Calculate Greatest Common Divisor and Least Common Multiple
// YE KYA PUCHTA HAI: Sab se bara common divisor aur sab se chhota common multiple nikalo
// 
// GCD: Largest number that divides both numbers (e.g., GCD of 12,18 is 6)
// GCD: Sab se bara number jo dono numbers ko divide kare (misal: 12,18 ka GCD 6 hai)
// 
// LCM: Smallest number divisible by both numbers (e.g., LCM of 12,18 is 36)
// LCM: Sab se chhota number jo dono numbers se divide ho (misal: 12,18 ka LCM 36 hai)
// 
// APPROACH:
// TAREEQA:
// - GCD: Start from smaller number and count down to find largest common divisor
//   GCD: Chhote number se shuru karo aur neeche jao, sab se bara common divisor dhundo
// - LCM: Use formula: LCM = (num1 × num2) / GCD
//   LCM: Formula use karo: LCM = (num1 × num2) / GCD
// 
// MATHEMATICAL RELATIONSHIP: num1 × num2 = GCD × LCM
// MATHS KA RISHTA: num1 × num2 = GCD × LCM

// Find Greatest Common Divisor (GCD)
// Sab se bara common divisor (GCD) nikalo
function findGCD(num1, num2) {
    // Start from the smaller number and count down
    // Chhote number se shuru karo aur neeche jao
    for (let i = Math.min(num1, num2); i > 0; i--) {
        // Check if i divides both numbers evenly
        // Check karo ke i dono numbers ko evenly divide karta hai
        if (num1 % i === 0 && num2 % i === 0) {
            return i; // First match is the greatest common divisor | Pehla match hi sab se bara common divisor hai
        }
    }
}

// Find Least Common Multiple (LCM)
// Sab se chhota common multiple (LCM) nikalo
function findLCM(num1, num2) {
    let gcd = findGCD(num1, num2); // First find GCD | Pehle GCD nikalo

    // Use formula: LCM = (num1 × num2) / GCD
    // Formula use karo: LCM = (num1 × num2) / GCD
    // Example: For 12 and 18: GCD=6, LCM=(12×18)/6=36
    // Misal: 12 aur 18 ke liye: GCD=6, LCM=(12×18)/6=36
    return (num1 * num2) / gcd;
}

console.log(findGCD(12, 18));
console.log(findLCM(12, 18));
