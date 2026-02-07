// 11. Reverse a string.

/*
Humne numbers reverse kiye the (Question 2 mein Math use karke). Strings mein Math nahi chalta.

Logic:

Ek khali string banao: reversed = ""

Original string par Ulta Loop chalao (Aakhri letter se pehle tak).

Har letter ko reversed mein jodte jao.

Aapka Challenge: Agar string "Code" hai (Length = 4). Hamein loop aakhri index se shuru karna hai. Coding mein ginti 0 se shuru hoti hai: C=0, o=1, d=2, e=3.

Toh loop kahan se shuru hoga? Length (4) se ya Length - 1 (3) se? */

function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }

    return reversed;
}

console.log(reverseString("Code"));