// glxavor ankyunagcic nerqev gtnvox ayn tarreri mijin tvabanakany, voronq bazmapatik en 5 tvin

function bubu(mat) {

    const arr = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < i; j++) {
            arr.push(mat[i][j])
        }
    };
    const newArr = arr.filter(e => Number.isInteger(e / 5))
    // console.log(newArr);
    let res = newArr.reduce((accum, value) => { return accum + value }, 0)
    return res / newArr.length
};

const matrix = [
    [1, 2, 3, 7],
    [4, 5, 6, 5],
    [7, 5, 9, 10],
    [10, 2, 20, 10]
];

console.log(bubu(matrix));




