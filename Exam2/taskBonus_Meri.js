// Bonus
// Create a function that takes an array of character inputs from a Tic Tac Toe game.
// Inputs will be taken from player1 as "X", player2 as "O", and empty spaces as "#". The
// program will return the winner or tie results.

// Examples:
// ticTacToe([
//   ["X", "O", "O"],
//   ["O", "X", "O"],
//   ["O", "#", "X"]
// ]) ➞ "Player 1 wins"
// ticTacToe([
//   ["X", "O", "O"],
//   ["O", "X", "O"],
//   ["X", "#", "O"]
// ]) ➞ "Player 2 wins"
// ticTacToe([
//   ["X", "X", "O"],
//   ["O", "X", "O"],
//   ["X", "O", "#"]
// ]) ➞ "It's a Tie"

const arr = [
  ["X", "X", "X"],
  ["O", "X", "O"],
  ["X", "O", "#"],
];

const ticTacToe = (arr) => {
  const x = "Player 1 wins";
  const o = "Player 2 wins";
  const hash = "It's a Tie";

  const diagonal = [];
  const secDiagonal = [];
  const vArr = [];
  const vArr1 = [];
  const vArr2 = [];

  for (let i = 0; i < arr.length; i++) {
    const length = arr.length - 1;

    diagonal.push(arr[i][i]);
    secDiagonal.push(arr[i][length - i]);

    vArr.push(arr[i][0]);
    vArr1.push(arr[i][1]);
    vArr2.push(arr[i][2]);
  }

  const finalArr = [...arr, diagonal, secDiagonal, vArr, vArr1, vArr2];

  if (finalArr.some((el) => el.every((el) => el === "X"))) return x;
  if (finalArr.some((el) => el.every((el) => el === "O"))) return o;

  return hash;
};

const result = ticTacToe(arr);

console.log(result);