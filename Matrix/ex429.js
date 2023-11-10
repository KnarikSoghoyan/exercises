// glxavor ankyunagcic verev kam nra vra gtnvox ayn tarreri qanak@, voronq 5 tvin bajanelis kmna 2 mnacord

function bubu(mat) {

    const arr = []
    for (let i = 0; i < mat.length - 1; i++) {
        for (let j = mat[i].length - 1 - i; j >= 0; j--) {
            arr.push(mat[i][j])
        }
    };
    // console.log(arr);
    return arr.filter(el => el % 5 === 2).length
};

const matrix = [
    [0, 2, 7, 17],
    [4, 12, 0, 9],
    [6, 1, 5, 5],
    [7, 2, 6, 22]
];

console.log(bubu(matrix));




