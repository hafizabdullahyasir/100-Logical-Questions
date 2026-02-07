// ============================================
// Question 4: Check whether a number is Armstrong or not
// Sawal 4: Check karo ke number Armstrong hai ya nahi
// ============================================
// WHAT IT ASKS: Determine if a number equals the sum of its digits raised to power of digit count
// YE KYA PUCHTA HAI: Number apne digits ke cubes ke sum ke barabar hai ya nahi
// 
// ARMSTRONG NUMBER: Sum of cubes of digits equals the number itself (for 3-digit numbers)
// ARMSTRONG NUMBER: Digits ke cubes ka sum number ke barabar ho (3-digit numbers ke liye)
// 
// EXAMPLES: 
// MISAALEIN:
// - 153 is Armstrong: 1³ + 5³ + 3³ = 1 + 125 + 27 = 153 ✅
//   153 Armstrong hai: 1³ + 5³ + 3³ = 1 + 125 + 27 = 153 ✅
// - 370 is Armstrong: 3³ + 7³ + 0³ = 27 + 343 + 0 = 370 ✅
//   370 Armstrong hai: 3³ + 7³ + 0³ = 27 + 343 + 0 = 370 ✅
// - 947 is NOT Armstrong: 9³ + 4³ + 7³ = 729 + 64 + 343 = 1136 ≠ 947 ❌
//   947 Armstrong NAHI: 9³ + 4³ + 7³ = 729 + 64 + 343 = 1136 ≠ 947 ❌
// 
// APPROACH: Extract each digit, cube it, sum all cubes, compare with original
// TAREEQA: Har digit nikalo, uska cube karo, sab cubes jama karo, original se compare karo

function checkArmstrong(num) {
    let temp = num; // Store original number | Original number save karo
    let sum = 0;    // Will hold sum of cubes | Cubes ka sum yahan hoga

    // Extract each digit and calculate sum of cubes
    // Har digit nikalo aur cubes ka sum calculate karo
    while (temp > 0) {
        let digit = temp % 10;              // Get last digit | Aakhri digit nikalo
        sum = sum + digit * digit * digit;  // Add cube of digit (digit³) | Digit ka cube add karo
        temp = Math.floor(temp / 10);       // Remove last digit | Aakhri digit hata do
    }

    // Compare sum of cubes with original number
    // Cubes ke sum ko original number se compare karo
    if (sum === num) {
        return true;  // It's an Armstrong number | Armstrong number hai
    } else {
        return false; // Not an Armstrong number | Armstrong number nahi hai
    }
}

console.log(checkArmstrong(153));
console.log(checkArmstrong(370));
console.log(checkArmstrong(947));
