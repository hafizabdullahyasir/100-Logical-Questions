// ============================================
// Question 10: Count the number of vowels in a string
// Sawal 10: String mein vowels ki tadaad gino
// ============================================
// WHAT IT ASKS: Count how many vowels (a, e, i, o, u) are in a given string
// YE KYA PUCHTA HAI: String mein kitne vowels (a, e, i, o, u) hain gino
// 
// VOWELS: a, e, i, o, u (both uppercase and lowercase)
// VOWELS: a, e, i, o, u (bare aur chhote dono letters)
// 
// EXAMPLES:
// MISAALEIN:
// - "Hello World" has 3 vowels: e, o, o
//   "Hello World" mein 3 vowels hain: e, o, o
// - "Hafiz Abdullah Yasir" has 7 vowels: a, i, A, u, a, a, i
//   "Hafiz Abdullah Yasir" mein 7 vowels hain: a, i, A, u, a, a, i
// 
// APPROACH: Loop through each character, check if it's a vowel, count it
// TAREEQA: Har character ko check karo, agar vowel hai to count karo

function countVowels(str) {
    let count = 0; // Will hold vowel count | Vowels ki count yahan hogi

    // Loop through each character in the string
    // String ke har character ko check karo
    for (let char of str) {
        char = char.toLowerCase();  // Convert to lowercase for easy comparison | Chhote letter mein convert karo comparison ke liye

        // Check if character is a vowel
        // Check karo ke character vowel hai ya nahi
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            console.log(char);      // Print the vowel | Vowel print karo
            count++;                // Increment counter | Counter barha do
        }
    }

    return count + " is the number of vowels in the string! ✅";
}

console.log(countVowels("Hello World"));
console.log(countVowels("Hafiz Abdullah Yasir"));
