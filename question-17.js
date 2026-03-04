// Find the nth Fibonacci number using recursion.
//fib(1) = 1  ✅
// fib(0) = 0  ✅
// fib(2) = fib(1) + fib(0) = 1 + 0 = 1
// fib(3) = fib(2) + fib(1) = 1 + 1 = 2
// fib(4) = fib(3) + fib(2) = 2 + 1 = 3
// fib(5) = fib(4) + fib(3) = 3 + 2 = 5
// fib(6) = fib(5) + fib(4) = 5 + 3 = 8 

function FibonacciRecursion(n) {

    if (n <= 1) return n;


    return FibonacciRecursion(n - 1) + FibonacciRecursion(n - 2);



}

console.log(FibonacciRecursion(6));