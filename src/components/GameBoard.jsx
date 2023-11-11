export default function GameBoard({ onSelectSquare, board }) {
  // BECAUSE WE NEED THE SAME STATE IN APP. SO WE WILL USE IT THERE AND PASS DATA HERE
  //  previous code at the end

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {" "}
                  {playerSymbol}{" "}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

// import { useState } from "react";

// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

// export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
//   // BECAUSE WE NEED THE SAME STATE IN APP. SO WE WILL USE IT THERE AND PASS DATA HERE
//   //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

//   //   function handleSelectSqaure(rowIndex, colIndex) {
//   //     setGameBoard((preGameBoard) => {
//   //       // preGameBoard[rowIndex][colIndex] = 'X'
//   //       // const updatedGameBoard = [
//   //       //   ...preGameBoard.map((innerArray) => [...innerArray]),
//   //       // ];
//   //       const updatedGameBoard = [...preGameBoard];
//   //       updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
//   //       return updatedGameBoard;
//   //     });
//   //     onSelectSquare();
//   //   }

//   return (
//     <ol id="game-board">
//       {gameBoard.map((row, rowIndex) => (
//         <li key={rowIndex}>
//           <ol>
//             {row.map((playerSymbol, colIndex) => (
//               <li key={colIndex}>
//                 <button onClick={() => handleSelectSqaure(rowIndex, colIndex)}>
//                   {" "}
//                   {playerSymbol}{" "}
//                 </button>
//               </li>
//             ))}
//           </ol>
//         </li>
//       ))}
//     </ol>
//   );
// }
