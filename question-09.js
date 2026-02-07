// ============================================
// Question 9: Check whether a number is Prime or not
// Sawal 9: Check karo ke number Prime hai ya nahi
// ============================================
// WHAT IT ASKS: Determine if a number is prime (only divisible by 1 and itself)
// YE KYA PUCHTA HAI: Check karo ke number prime hai (sirf 1 aur khud se divide ho)
// 
// PRIME NUMBER: A number greater than 1 that has no divisors except 1 and itself
// PRIME NUMBER: 1 se bara number jo sirf 1 aur khud se divide ho
// 
// EXAMPLES:
// MISAALEIN:
// - 2, 3, 5, 7, 11, 13, 17, 19, 23... are prime
//   2, 3, 5, 7, 11, 13, 17, 19, 23... prime hain
// - 4, 6, 8, 9, 10, 12... are NOT prime (composite numbers)
//   4, 6, 8, 9, 10, 12... prime NAHI hain (composite numbers)
// 
// APPROACH: Check if any number from 2 to num/2 divides it
// TAREEQA: 2 se lekar num/2 tak koi bhi number divide karta hai to prime nahi
// 
// OPTIMIZATION: Only check up to num/2 (no number > num/2 can divide num)
// OPTIMIZATION: Sirf num/2 tak check karo (num/2 se bara koi number num ko divide nahi kar sakta)

function checkPrime(num) {
    // Numbers <= 1 are not prime
    // 1 ya usse chhote numbers prime nahi hote
    if (num <= 1) {
        return num + " is not a Prime Number! ❌";
    }

    // Check if any number from 2 to num/2 divides evenly
    // 2 se lekar num/2 tak koi bhi number evenly divide kare to prime nahi
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {                        // Found a divisor | Divisor mil gaya
            return num + " is not a Prime Number! ❌";
        }
    }

    // No divisors found, it's prime
    // Koi divisor nahi mila, prime hai
    return num + " is a Prime Number! ✅";
}

console.log(checkPrime(11));

