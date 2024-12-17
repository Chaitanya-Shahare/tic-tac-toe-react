import { useState } from "react";
import "./TicTacToe.scss";

const initializeBoard = () => Array(9).fill(null);

// 1. isX
// 1.1 if isX on click toggle isX & change the clicked button value to X
// 1.2 else toggle isX & change clicked button value to O
// 2. Check game if the game is completed or not
// 2.2 Check all the combinations for the winner
// 3. Reset button

function TicTacToe() {
  const [board, setBoard] = useState(initializeBoard());
  const [isX, setIsX] = useState(true);

  const handleClick = (index) => {
    if (board[index] !== null || checkWinner()) return;
    let newBoard = [...board];
    if (isX) {
      newBoard[index] = "X";
    } else {
      newBoard[index] = "O";
    }

    setBoard(newBoard);

    setIsX((prev) => !prev);
  };

  const WinningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    for (let i = 0; i < WinningPatterns.length; i++) {
      let [a, b, c] = WinningPatterns[i];
      if (board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const getStatus = () => {
    let winner = checkWinner();
    if (winner) {
      return winner + " is the Winner!!";
    } else {
      return (isX ? "X's" : "O's") + " Turn";
    }
  };

  const resetGame = () => {
    setBoard(initializeBoard());
    setIsX(true);
  };

  return (
    <>
      {getStatus()}
      <div className="board">
        {board.map((_, index) => {
          return (
            <button key={index} onClick={() => handleClick(index)}>
              {_}
            </button>
          );
        })}
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </>
  );
}

export default TicTacToe;
