// Numbers & Math Logic (1–20)
// ============================================
// Question 1: Find all prime numbers in an array
// Sawal 1: Array mein se saare prime numbers dhundo
// ============================================
// WHAT IT ASKS: Given an array of numbers, return only the prime numbers
// YE KYA PUCHTA HAI: Array mein se sirf prime numbers return karo
// 
// APPROACH: Check each number individually if it's prime, then collect all primes
// TAREEQA: Har number ko check karo ke prime hai ya nahi, phir sab prime numbers jama karo
// 
// LOGIC:
// - A prime number is only divisible by 1 and itself (e.g., 2, 3, 5, 7, 11)
//   Prime number sirf 1 aur khud se divide hota hai (misal: 2, 3, 5, 7, 11)
// - Numbers less than 2 are not prime
//   2 se chhote numbers prime nahi hote
// - For each number, check if any number from 2 to (num-1) divides it evenly
//   Har number ke liye, 2 se lekar (num-1) tak koi bhi number se evenly divide ho to prime nahi
// - If no divisor found, it's prime
//   Agar koi divisor na mile to prime hai

// Helper function: Check if a single number is prime
// Madad karne wala function: Ek number prime hai ya nahi check karo
function checkPrime(num) {
    // Numbers less than 2 are not prime
    // 2 se chhote numbers prime nahi hote
    if (num < 2) return false;

    // Check if any number from 2 to num-1 divides evenly
    // 2 se lekar num-1 tak koi bhi number se divide ho jaye to prime nahi
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false; // Found a divisor, not prime | Divisor mil gaya, prime nahi
    }
    return true; // No divisors found, it's prime | Koi divisor nahi mila, prime hai
}

// Main function: Filter out prime numbers from array
// Main function: Array se prime numbers nikal lo
function findPrime(numbers) {
    let result = [];

    // Check each number in the array
    // Array ke har number ko check karo
    for (let i = 0; i < numbers.length; i++) {
        if (checkPrime(numbers[i])) {
            result.push(numbers[i]); // Add to result if prime | Agar prime hai to result mein daal do
        }
    }
    return result;
}


let myNumbers = [2, 4, 6, 8, 5, 11];
console.log(findPrime(myNumbers));


