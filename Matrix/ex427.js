// ojandak ankyunagcic verev kam nra vra gtnvox ayn tarreri artadryal@, voronq bazmapatik en trvac "k" amboxj tvin

function bubu(mat, num = 1) {

    const arr = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j <= mat.length-1-i; j++) {
            arr.push(mat[i][j])
        }
    };
  
    console.log(arr);
    let product = 1;
    arr.forEach(el => {
        if ( el%num === 0 && el!==0) {
            product *= el
        }
    });
    return product
};

const matrix = [
    [1, 2, 3, 7],
    [4, 5, 6, 5],
    [7, 8, 9, 10],
    [0, 2, 6, 10]
];
let k = 3;

console.log(bubu(matrix, k));




