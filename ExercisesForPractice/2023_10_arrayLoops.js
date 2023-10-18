// 1.տրված է միաչափ զանգված: Առանց լրացուցիչ զանգված կիրառելու տրված զանգվածի տարրերը
//  դասավորել տրվածին հակառակ ուղղությամբ:


const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.reverse())


// or


const myArray = [1, 2, 3, 4, 5];

function reverse(arr) {

    arr.forEach((e, index) => {

        arr.unshift(e)
        arr.splice(arr[index + 1], 1)
    })
    return arr
}
console.log(reverse(myArray));

// _________________________________________________________________________________



// 2. Տրված է միաչափ զանգված: Ստանալ նոր զանգված, որի սկզբում գրված կլինեն զանգվածի կենտ արժեք ունեցող տարրերը:


let oddAtFront = () => {
    const arr3 = [1, 2, 3, 4, 5];

    arr3.forEach((e, index) => {
        if (e % 2 !== 0) {
            arr3.splice(index, 1)
            let res = arr3.unshift(e)
        }
    });
    return arr3;
}
console.log(oddAtFront());

// _________________________________________________________________________________


// 3. Տրված զանգվածից գտնել թվաբանական պրոգրեսիա պարունակող թվերը և տպել


let progression = () => {

    const arr = [1, 4, 4, 0, -8, -6, 3, 7, -2, 16, 4, 8, -10, 5];

    let d = arr[1] - arr[0]
    let elementsOfProgression = []

    arr.find(e => {
        let dif = Math.abs(e - arr[0])
        if ((Number.isInteger(dif / d) === true) && (elementsOfProgression.includes(e) === false)) {
            elementsOfProgression.push(e);
        }
        elementsOfProgression.sort(function (a, b) {
            return a - b
        })
    })

    return elementsOfProgression
}
console.log(progression())


// _________________________________________________________________________________

