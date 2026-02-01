// Check if a number is Perfect.


function checkPerfect(num) {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum = sum + i;
        }
    }

    if (sum === num) {
        return num + " is a Perfect Number! ✅";
    } else {
        return num + " is not a Perfect Number! ❌";
    }

}
console.log(checkPerfect(28));
