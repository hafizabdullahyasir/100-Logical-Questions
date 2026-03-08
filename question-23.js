// Find the Second Largest Number in an Array.

function findSecondLargestNo(arr) {

    let firstLargest = 0;
    let secondLargest = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNo = arr[i];

        if (currentNo > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = currentNo;
        }
        else if (currentNo > secondLargest && currentNo !== firstLargest) {
            secondLargest = currentNo;
        }



    }
    return secondLargest;



}

console.log(findSecondLargestNo([10, 5, 20, 8]));