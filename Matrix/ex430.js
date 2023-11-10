// glxavor ankyunagcic nerqev kam nra vra gtnvox zuyg arjeq unecox tarreri mijin tvabanakan@

function bubu(mat) {

    const arr = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j <= i; j++) {
            arr.push(mat[i][j])
        }
    };
    const newArr = arr.filter(el => el % 2 === 0);
    let res = newArr.reduce((accum, value) => { return accum + value }, 0)
    return res / newArr.length
};

const matrix = [
    [3, 17, 3, 10],
    [4, 0, 12, 9],
    [6, 1, 5, 5],
    [7, 2, 3, 8]
];

console.log(bubu(matrix));




