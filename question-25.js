// Find the Intersection of Two Arrays.


function findIntersection(arr1, arr2) {
    let sameNo = [];
    let mutualCount = 0;


    for (let i = 0; i < arr1.length; i++) {
        let currentNo = arr1[i];


        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j]) {
                sameNo[mutualCount] = currentNo;
                mutualCount++;
                break;

            }

        }
    }

    return sameNo;

}

console.log(findIntersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));