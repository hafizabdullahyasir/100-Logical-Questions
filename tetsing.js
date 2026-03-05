// hello
// hello tetsing
const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((acc, current) => {
    return acc + current;
}, 0);

console.log(result);