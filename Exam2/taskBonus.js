// Create a function that takes an array of character inputs from a Tic Tac Toe game. 
// Inputs will be taken from player1 as "X", player2 as "O", and empty spaces as "#". 
// The program will return the winner or tie results.

function ticTacToe(mat) {
  const temp = []
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
      temp.push(mat[i][j]);
    }
  }

  if (temp[0] === 'X') {
    if ((temp[0] === temp[1]) && (temp[1] === temp[2])) {
      return "Player 1 wins"
    } else {


    }
  }


  // const glxavor = []
  // const ojandak = []

  // for (let i = 0; i < mat.length; i++) {            
  //   glxavor.push(mat[i][i])
  // }
  //   for (let i = 0; i < mat.length; i++) {            
  //     let j = mat.length - 1 - i
  //     ojandak.push(mat[i][j])
  // }
  // return [glxavor, ojandak]


  return temp
}

console.log(ticTacToe(
  [
    ["X", "O", "O"],
    ["O", "X", "O"],
    ["O", "#", "X"]
  ]
));                              //  "Player 1 wins"

// console.log(ticTacToe(
//   [
//   ["X", "O", "O"],
//   ["O", "X", "O"],
//   ["X", "#", "O"]
//   ]
//   ));                              //   "Player 2 wins"

// console.log(ticTacToe(
//   [
//   ["X", "X", "O"],
//   ["O", "X", "O"],
//   ["X", "O", "#"]
// ]
// ));                               // "It's a Tie"










