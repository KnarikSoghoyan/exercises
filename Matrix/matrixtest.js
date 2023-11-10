function bubu(mat, num) {

    const arr = []

    for (let i = 0; i < mat.length - 1; i++) {                   // glxavor ankyunagcic verev kam nra vra
        for (let j = mat.length - 1 - i; j >= 0; j--) {
            arr.push(mat[i][j])
        }
    };

    for (let i = 0; i < mat.length; i++) {             //ojandak ankyunagic
        let j = mat.length - 1 - i
        arr.push(mat[i][j])
    }

    for (let i = 0; i < mat.length; i++) {                 //ojandak ankyunagcic nerqev kam nra vra
        for (let j = mat.length-1; j >=0; j--) {
            arr.push(mat[i][j])
        }
    }

    for (let i = 0; i < mat.length; i++) {                       // ojandak ankyunagcic verev gtnvox  1     
        for (let j = 0; j < mat.length-1-i; j++) {
            arr.push(mat[i][j])
        }
    };

    for (let i = 0; i < mat.length - 1; i++) {                        // ojandak ankyunagcic verev gtnvox  2
        for (let j = mat.length - 2 - i; j >= 0; j--) {
            arr.push(mat[i][j])
        }
    };

    for (let i = 0; i < mat.length; i++) {                       // ojandak ankyunagcic verev kam nra vra gtnvox  1      
        for (let j = 0; j <= mat.length-1-i; j++) {
            arr.push(mat[i][j])
        }
    };

    for (let i = 0; i < mat.length; i++) {                         // ojandak ankyunagcic verev kam nra vra gtnvox  2
        for (let j = mat.length - 1 - i; j >= 0; j--) {
            arr.push(mat[i][j])
        }
    };

    return arr //.filter(e => Number.isInteger(e / k) === true).length
};

const matrix = [
    [1, 2, 3, 7],
    [4, 5, 6, 5],
    [7, 5, 9, 10],
    [6, 2, 20, 10]
];

let k = 2;

console.log(bubu(matrix, k));



