//Question 3: Find GCD and LCM of two numbers.


function findGCD(num1, num2) {


    for (let i = Math.min(num1, num2); i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            return i;
        }
    }
}

function findLCM(num1, num2) {

    let gcd = findGCD(num1, num2);

    return (num1 * num2) / gcd;


}

console.log(findGCD(12, 18));
console.log(findLCM(12, 18));
