// glxavor ankyunagcic nerqev gtnvox ayn tarreri qanak@, voronq bazmapatik en trvac amboxj "k" tvin

function bubu(mat, num) {

    const arr = []
    let count = 0
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < i; j++) {
            if (!(mat[i][j]%num)) {
                count ++
            }
        }
    }
    return count
};

const matrix = [
    [1, 2, 3, 7],
    [4, 5, 6, 5],
    [7, 5, 9, 10],
    [6, 2, 20, 10]
];

let k = 2;

console.log(bubu(matrix, k));



