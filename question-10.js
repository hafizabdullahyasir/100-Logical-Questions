// Count the number of vowels in a string.

function countVowels(str) {


    let count = 0;

    for (let char of str) {
        char = char.toLowerCase();
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            console.log(char);
            count++;
        }
    }

    return count + " is the number of vowels in the string! ✅";


}

console.log(countVowels("Hello World"));
console.log(countVowels("Hafiz Abdullah Yasir"));
