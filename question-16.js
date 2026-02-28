// Final Code: Factorial using Recursion

function Factorial(n) {

    if (n == 0) {
        return 1;
    }
    return n * Factorial(n - 1);

}
console.log(Factorial(5));