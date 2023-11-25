// Create a function that takes an array of character inputs from a Tic Tac Toe game. 
// Inputs will be taken from player1 as "X", player2 as "O", and empty spaces as "#". 
// The program will return the winner or tie results.

function ticTacToe(matrix) {
  const allElements = []
  const column1 = [];
  const column2 = [];
  const column3 = [];
  const glxavor = []
  const ojandak = []
  const temp = [column1, column2, column3, glxavor, ojandak]

  for (let i = 0; i < matrix.length; i++) {
    temp.push(matrix[i]);
    column1.push(matrix[i][0]);
    column2.push(matrix[i][1]);
    column3.push(matrix[i][2]);
    glxavor.push(matrix[i][i]);

    let j = matrix.length - 1 - i
    ojandak.push(matrix[i][j]);

    for (let j = 0; j < matrix.length; j++) {
      allElements.push(matrix[i][j])
    };
  };
  let conditionOfTie = allElements.includes("#")
  function conditionOfWinner(player) {
    return temp.some(e => (e[0] === player && (e[0] === e[1] && e[1] === e[2])))
  }

  if (conditionOfWinner("X")) {
    return "Player 1 wins"
  };
  if (conditionOfWinner("O")) {
    return "Player 2 wins"
  };
  if (conditionOfTie) {
    return "It's a Tie"
  } else {
    return "Game isn't over yet"
  }

};

console.log(ticTacToe(
  [
    ["X", "O", "O"],
    ["O", "X", "O"],
    ["O", "#", "X"]
  ]
));                              //  "Player 1 wins"

console.log(ticTacToe(
  [
    ["X", "O", "O"],
    ["O", "X", "O"],
    ["X", "#", "O"]
  ]
));                              //   "Player 2 wins"

console.log(ticTacToe(
  [
    ["X", "X", "O"],
    ["O", "X", "O"],
    ["X", "O", "#"]
  ]
));                               // "It's a Tie"