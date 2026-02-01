//. Check whether a number is Prime or not.


function checkPrime(num) {

    if (num <= 1) {
        return num + " is not a Prime Number! ❌";
    }


    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return num + " is not a Prime Number! ❌";
        }
    }

    return num + " is a Prime Number! ✅";



}

console.log(checkPrime(11));

