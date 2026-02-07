//Check if a string is a Palindrome.


/*
Question 14: Check if a string is a Palindrome.
(Sawal: Kya ye lafz ulta-seedha aik saman hai?)

Misaal:

"madam" -> Ulta: "madam" (✅ Yes)

"hello" -> Ulta: "olleh" (❌ No)

Humne Question 11 mein string ko Reverse karna seekha tha. Bas wahi logic yahan use karni hai. */

function checkPalindrome(str) {
    let reversedStr = "";


    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    if (str === reversedStr) {
        return true;
    } else {
        return false;
    }
}

console.log(checkPalindrome("racecar"));
