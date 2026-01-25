// Question 5: Print Fibonacci series up to n terms.


function fibonacciSeries(n) {

    let a = 0;
    let b = 1;

    console.log(a);
    console.log(b);

    for (let i = 2; i < n; i++) {
        let nextTerm = a + b;
        console.log(nextTerm);
        a = b;
        b = nextTerm;
    }

    return;
}

console.log(fibonacciSeries(10));
