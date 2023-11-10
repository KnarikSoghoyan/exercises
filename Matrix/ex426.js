// ojandak ankyunagcic verev gtnvox zuyg arjeq unecox tarreri gumar@

function bubu(mat) {

    const arr = []
    for (let i = 0; i < mat.length - 1; i++) {
        for (let j = mat[i].length - 2 - i; j >= 0; j--) {
            arr.push(mat[i][j])
        }
    };
    // console.log(arr);
    let sum = 0;
    arr.forEach(el => {
        if (!el % 2) {
            return sum += el
        }
    })
    return sum
};

const matrix = [
    [1, 2, 3, 7],
    [4, 5, 6, 5],
    [7, 8, 9, 10],
    [0, 2, 6, 10]
];

console.log(bubu(matrix));




