// Find the Longest Word in a String


function findLongestWord(str) {

    let longestWord = "";
    let currentWord = "";

    str = str + " ";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char !== " ") {
            currentWord = currentWord + char;
        }
        else {


            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }

            currentWord = "";

        }

    }

    return longestWord;



}
console.log(findLongestWord("I love JavaScript and programming"));