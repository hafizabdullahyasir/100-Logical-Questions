// 13. Check if two strings are Anagrams.

/*
  PROBLEM: Check if two strings are Anagrams (JavaScript)

  Anagram ka matlab:
  Dono strings mein same letters hon
  aur har letter ki quantity (count) bhi same ho
  Order matter nahi karta

  Example:
  "aab" & "aba"  -> TRUE
  "abc" & "abb"  -> FALSE

  APPROACH (Logic Building):
  1) Ek empty object banate hain jo letters ka count rakhega
  2) Pehli string (str1) ke har character ka count +1 karte hain
  3) Doosri string (str2) ke har character ka count -1 karte hain
  4) Agar:
     - koi letter pehle se exist hi nahi karta
     - ya count zero se neeche chala jaye
     to strings anagram nahi hain

  DRY RUN EXAMPLE:
  str1 = "aab"
  str2 = "aba"

  Step 1 (str1):
  count = { a:2, b:1 }

  Step 2 (str2):
  'a' -> 2 → 1
  'b' -> 1 → 0
  'a' -> 1 → 0

  Final count = { a:0, b:0 }
  => Anagram

  Time Complexity: O(n)
  Space Complexity: O(1) (constant characters)
*/


function checkAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const charCount = {};

    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }
    return true;

}

console.log(checkAnagram("listen", "silent")); //   true
// console.log(checkAnagram("hello", "billion")); //   false
