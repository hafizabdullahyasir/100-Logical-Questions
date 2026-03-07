function findMaxNumber(arr) {

    let maxNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }

    return maxNumber;


}

console.log(findMaxNumber([10, 5, 20, 8]));

// he;llooo
