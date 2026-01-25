// Check whether a number is Armstrong or not

function checkArmstrong(num) {
    let temp = num;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum = sum + digit * digit * digit;
        temp = Math.floor(temp / 10);
    }

    if (sum === num) {
        return true;
    } else {
        return false;
    }
}

console.log(checkArmstrong(153));
console.log(checkArmstrong(370));
console.log(checkArmstrong(9474));
