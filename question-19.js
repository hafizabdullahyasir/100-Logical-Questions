// Remove duplicates from an array.

function removeDuplicates(arr) {
    let unique = []; // VIP List
    let uniqueCount = 0; // Ye batayega ke array mein kahan entry karni hai (Bina push ke)

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        let isDuplicate = false; // Flag: Shuru mein assume karo ye duplicate NAHI hai

        // --- MANUALLY CHECK KARNE KA LOOP (Replacement of .includes) ---
        for (let j = 0; j < uniqueCount; j++) {
            if (unique[j] === currentNumber) {
                isDuplicate = true; // Pakda gaya! Pehle se maujood hai
                break; // Aage check karne ki zaroorat nahi, loop rok do
            }
        }

        // --- MANUALLY ADD KARNE KA TAREEQA (Replacement of .push) ---
        // Agar Flag abhi bhi false hai, matlab number VIP list mein nahi tha
        if (isDuplicate === false) {
            unique[uniqueCount] = currentNumber; // Array ke aakhri khali dabbe mein daal do
            uniqueCount++; // Agli baari ke liye counter badha do
        }
    }

    return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]


