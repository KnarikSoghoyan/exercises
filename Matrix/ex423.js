// glxavor ankyunagcic nerqev kam nra vra gtnvox zuyg arjeq unecox tarreri mijin qarakusayin@

function bubu(mat) {

    const arr = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j <= i; j++) {
            arr.push(mat[i][j])
        }
    };
    // console.log(arr);
    const newArr = arr.filter(e => e % 2 === 0);
    let res = newArr.reduce((acc, value) => {
        return acc + value ** 2
    }, 0)
    return Math.sqrt(res / newArr.length)
};

const matrix = [
    [1, 2, 3, 7],
    [4, 5, 6, 5],
    [7, 5, 9, 10],
    [0, 2, 1, 10]
];

console.log(bubu(matrix));




