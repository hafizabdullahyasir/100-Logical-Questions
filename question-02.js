// ============================================
// Question 2: Check if a number is a palindrome
// Sawal 2: Check karo ke number palindrome hai ya nahi
// ============================================
// WHAT IT ASKS: Determine if a number reads the same forwards and backwards
// YE KYA PUCHTA HAI: Number aage se aur peeche se same hai ya nahi
// 
// EXAMPLES: 121 is palindrome, 123 is not
// MISAAL: 121 palindrome hai, 123 nahi hai
// 
// APPROACH: Reverse the number digit by digit and compare with original
// TAREEQA: Number ko ulta karo digit by digit aur original se compare karo
// 
// LOGIC:
// - Extract each digit from right to left using modulo (%)
//   Har digit ko dayen se bayen nikalo modulo (%) use karke
// - Build the reversed number by multiplying previous result by 10 and adding new digit
//   Ulta number banao pehle result ko 10 se multiply karke aur naya digit add karke
// - Compare reversed number with original
//   Ulta number ko original se compare karo

function isPalindrome(num) {
    let isOriginal = num; // Store original number for comparison | Original number save karo comparison ke liye
    let reversed = 0;     // Will hold the reversed number | Ulta number yahan store hoga

    // Reverse the number digit by digit
    // Number ko digit by digit ulta karo
    while (num > 0) {
        let reminder = num % 10;              // Get last digit (e.g., 121 % 10 = 1) | Aakhri digit nikalo
        reversed = (reversed * 10) + reminder; // Build reversed number | Ulta number banao (0*10+1=1, 1*10+2=12, 12*10+1=121)
        num = Math.floor(num / 10);           // Remove last digit (121 → 12 → 1 → 0) | Aakhri digit hata do
    }

    // Compare original with reversed
    // Original ko reversed se compare karo
    if (isOriginal === reversed) {
        return true;  // It's a palindrome | Palindrome hai
    } else {
        return false; // Not a palindrome | Palindrome nahi hai
    }
}
console.log(isPalindrome(121));
console.log(isPalindrome(123));
