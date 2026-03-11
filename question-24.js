//Move all zeroes to the end of the array.


function moveZeroesToEnd(arr) {
    let VipSeat = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNo = arr[i];

        if (currentNo !== 0) {
            arr[VipSeat] = currentNo;
            VipSeat++;
        }
    }

    for (let i = VipSeat; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;



}

console.log(moveZeroesToEnd([1, 0, 2, 0, 3, 0, 4]));


