// glxavor ankyunagcic nerqev gtnvox zuyg arjeq unecox tarreri qanak@

function bubu(mat) {

    const arr = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < i; j++) {
            arr.push(mat[i][j])
        }
    };
    return arr.filter(e => e % 2 === 0).length;
};

const matrix = [
    [1, 2, 3, 7],
    [4, 5, 6, 5],
    [7, 8, 9, 10],
    [0, 2, 6, 10]
];

console.log(bubu(matrix));




