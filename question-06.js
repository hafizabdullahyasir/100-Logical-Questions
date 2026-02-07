// ============================================
// Question 6: Find the factorial of a number
// Sawal 6: Kisi number ka factorial nikalo
// ============================================
// WHAT IT ASKS: Calculate factorial (n!) = n × (n-1) × (n-2) × ... × 1
// YE KYA PUCHTA HAI: Factorial calculate karo (n!) = n × (n-1) × (n-2) × ... × 1
// 
// EXAMPLES:
// MISAALEIN:
// - 3! = 3 × 2 × 1 = 6
// - 5! = 5 × 4 × 3 × 2 × 1 = 120
// - 0! = 1 (by definition)
// 
// APPROACH: Multiply all numbers from n down to 1
// TAREEQA: n se lekar 1 tak saare numbers ko multiply karo

function factorial(num) {
    let fact = 1; // Start with 1 | 1 se shuru karo

    // Multiply all numbers from num down to 1
    // num se lekar 1 tak saare numbers ko multiply karo
    for (let i = num; i >= 1; i--) {
        fact = fact * i; // fact = 1 × num × (num-1) × ... × 1
    }
    return fact;
}

console.log(factorial(3));