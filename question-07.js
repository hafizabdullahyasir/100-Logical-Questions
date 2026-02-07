// ============================================
// Question 7: Check if a number is Perfect
// Sawal 7: Check karo ke number Perfect hai ya nahi
// ============================================
// WHAT IT ASKS: A perfect number equals the sum of its proper divisors (excluding itself)
// YE KYA PUCHTA HAI: Perfect number apne divisors ke sum ke barabar hota hai (khud ko chhod kar)
// 
// EXAMPLES:
// MISAALEIN:
// - 6 is perfect: divisors are 1,2,3 → 1+2+3 = 6 ✅
//   6 perfect hai: divisors hain 1,2,3 → 1+2+3 = 6 ✅
// - 28 is perfect: divisors are 1,2,4,7,14 → 1+2+4+7+14 = 28 ✅
//   28 perfect hai: divisors hain 1,2,4,7,14 → 1+2+4+7+14 = 28 ✅
// - 12 is NOT perfect: divisors are 1,2,3,4,6 → 1+2+3+4+6 = 16 ≠ 12 ❌
//   12 perfect NAHI: divisors hain 1,2,3,4,6 → 1+2+3+4+6 = 16 ≠ 12 ❌
// 
// APPROACH: Find all divisors (except the number itself), sum them, compare with original
// TAREEQA: Saare divisors dhundo (number ko chhod kar), unko jama karo, original se compare karo

function checkPerfect(num) {
    let sum = 0; // Will hold sum of divisors | Divisors ka sum yahan hoga

    // Find all divisors from 1 to num-1
    // 1 se lekar num-1 tak saare divisors dhundo
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {        // If i divides num evenly | Agar i number ko evenly divide kare
            sum = sum + i;          // Add to sum | Sum mein add karo
        }
    }

    // Compare sum of divisors with the number
    // Divisors ke sum ko number se compare karo
    if (sum === num) {
        return num + " is a Perfect Number! ✅";      // Perfect hai
    } else {
        return num + " is not a Perfect Number! ❌";  // Perfect nahi hai
    }
}
console.log(checkPerfect(28));
