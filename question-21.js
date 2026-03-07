// Find the Missing Number in an Array

function findMissingNumber(arr, n) {
    let expectedTotal = n * (n + 1) / 2;

    let currentTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        currentTotal += arr[i];
    }

    return expectedTotal - currentTotal;
}

console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 9, 10], 10));