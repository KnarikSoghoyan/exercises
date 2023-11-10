// ojandak ankyunagcic verev kam nra vra gtnvox 0 arjeq unecox tarreri qanak@

function bubu(mat) {

    const arr = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = mat.length - 1 - i; j >= 0; j--) {
            arr.push(mat[i][j])
        }
    };
    // console.log(arr);
    return arr.filter(el => el === 0).length
};

const matrix = [
    [0, 2, 3, 7],
    [4, 0, 0, 9],
    [7, 0, 5, 5],
    [0, 2, 6, 8]
];

console.log(bubu(matrix));




