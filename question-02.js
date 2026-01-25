// Question 2: Check if a number is a palindrome.

function isPalindrome(num) {
    let isOriginal = num;
    let reversed = 0;

    while (num > 0) {

        let reminder = num % 10;
        reversed = (reversed * 10) + reminder;
        num = Math.floor(num / 10);


    }

    if (isOriginal === reversed) {
        return true;
    } else {
        return false;
    }


}
console.log(isPalindrome(121));
console.log(isPalindrome(123));
