// ============================================
// Question 5: Print Fibonacci series up to n terms
// Sawal 5: Fibonacci series ko n terms tak print karo
// ============================================
// WHAT IT ASKS: Generate first n numbers in Fibonacci sequence
// YE KYA PUCHTA HAI: Fibonacci sequence ke pehle n numbers generate karo
// 
// FIBONACCI PATTERN: Each number is the sum of previous two numbers
// FIBONACCI PATTERN: Har number pichle do numbers ka sum hota hai
// 
// EXAMPLE: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
// MISAL:   0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
//          0+1=1, 1+1=2, 1+2=3, 2+3=5, 3+5=8, waghaira
// 
// APPROACH: Start with 0 and 1, then keep adding last two numbers
// TAREEQA: 0 aur 1 se shuru karo, phir pichle do numbers jama karte raho
// 
// LOGIC: nextTerm = previous + current
// LOGIC: agla term = pichla + current

function fibonacciSeries(n) {
    let a = 0; // First term | Pehla term
    let b = 1; // Second term | Dusra term

    // Print first two terms
    // Pehle do terms print karo
    console.log(a);
    console.log(b);

    // Generate remaining terms (starting from 3rd term)
    // Baqi terms generate karo (3rd term se shuru karke)
    for (let i = 2; i < n; i++) {
        let nextTerm = a + b;  // Add previous two numbers | Pichle do numbers jama karo
        console.log(nextTerm);
        a = b;                 // Shift: previous becomes current | Shift: pichla current ban jaye
        b = nextTerm;          // Shift: current becomes next | Shift: current agla ban jaye
    }

    return;
}

console.log(fibonacciSeries(10));
