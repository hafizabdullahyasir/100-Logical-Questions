// Question 26: Reverse Array IN-PLACE (Two-Pointer Technique)
// No extra array allowed — swap elements directly within the same array

function reverseInPlace(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        // // Swap arr[start] and arr[end]
        // let temp = arr[start];
        // arr[start] = arr[end];
        // arr[end] = temp;

        // start++; // Move start pointer forward
        // end--;   // Move end pointer backward

        arr[start] = arr[start] + arr[end];
        arr[end] = arr[start] - arr[end];
        arr[start] = arr[start] - arr[end];

        start++;
        end--;
    }

    return arr;
}

// Test Run:
let myNumbers = [4, 5, 6, 8, 10];
console.log(reverseInPlace(myNumbers)); // [50, 40, 30, 20, 10]
