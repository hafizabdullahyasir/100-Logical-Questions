// 12. Find the maximum number in an array.

/*
Ready for Question 12?
Agla sawal Arrays ke baare mein hai: 12. Find the maximum number in an array. (Sawal: Is list mein sab se bada number kaunsa hai? [10, 5, 20, 8])

Logic (King of the Hill): Hum man lete hain ke Pehla Number (arr[0]) hi sab se bada (King) hai. Phir hum baaki sab se muqabla karate hain.

Agar koi aur number King se bada nikla, to wo naya King ban jayega.

Agar chota nikla, to hum ignore kar denge.

Example: [10, 5, 20]

Maan lo King = 10.

Agla number 5. Kya 5 > 10 hai? Nahi. (King abhi bhi 10 hai).

Agla number 20. Kya 20 > 10 hai? Haan!

Ab naya King = 20.

Agla number 8. Kya 8 > 20 hai? Nahi.

Abhi toh King = 20 hai hi.   */


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
