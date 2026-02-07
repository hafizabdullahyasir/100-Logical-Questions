// Calculate the sum of elements in an array.

/*
Ready for Question 15?
Ye sawal Arrays ka sab se basic aur zaroori sawal hai.

15. Calculate the sum of elements in an array. (Sawal: Is list mein jitne numbers hain, sab ko jama (add) karo).

Misaal: [1, 2, 3, 4, 10]

Calculation: 1 + 2 + 3 + 4 + 10 = 20

Logic:

Ek variable banao sum = 0.

Array par loop chalao.

Har number ko sum mein jodte jao. */

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(calculateSum([1, 2, 3, 4, 10]));
console.log(calculateSum([10, -2, 5]));