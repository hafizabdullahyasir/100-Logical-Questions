// Two Sum (LeetCode #1) 🏆

function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            // Agar dono ka total target ke barabar hai
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]]; // Jawab mil gaya!
            }
        }
    }
    return "Koi match nahi mila!";
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [2, 7] ✅
console.log(twoSum([3, 2, 4], 6));      // Output: [2, 4] ✅ .....
