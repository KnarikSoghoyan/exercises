// glxavor ankyunagcic nerqev kam nra vra gtnvox kent arjeq unecox tarreri mijin tvabanakan@

function bubu(mat) {

    const arr = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j <= i; j++) {
            arr.push(mat[i][j])
        }
    };

    const newArr = arr.filter(e => e % 2 === 1);
    // console.log(newArr);
    let res = newArr.reduce((acc, value) => {
        return acc + value
    }, 0)
    return res / newArr.length
};

const matrix = [
    [1, 2, 3, 7],
    [4, 5, 6, 5],
    [7, 8, 9, 10],
    [0, 2, 6, 10]
];

console.log(bubu(matrix));




