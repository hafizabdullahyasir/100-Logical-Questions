// Numbers & Math Logic (1–20)
// 1. Find all prime numbers in an array.

function checkPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findPrime(numbers) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (checkPrime(numbers[i])) {
            result.push(numbers[i]);
        }
    }
    return result;
}


let myNumbers = [2, 4, 6, 8, 5, 11];
console.log(findPrime(myNumbers));


