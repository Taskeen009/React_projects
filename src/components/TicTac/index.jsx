import { useState } from 'react';
import './style.css';

function Sqaure({ value, onClick }) {
    return <button className="square" onClick={onClick}>{value}</button>;
}

const Tictac = () => {
    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXturn, setIsXturn] = useState(true);

    function getWinner(squares) {
        const winningPattern = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (let [a, b, c] of winningPattern) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]; // Return the winner ("X" or "O")
            }
        }
        return null; // No winner yet
    }

    function handleclick(getCurentsquare) {
        let cpySquares = [...squares];
        if (cpySquares[getCurentsquare] || getWinner(cpySquares)) return; // Stop if square is filled or there's a winner
        cpySquares[getCurentsquare] = isXturn ? "X" : "O";
        setIsXturn(!isXturn);
        setSquares(cpySquares);
    }

    function handleRestart() {
        setSquares(Array(9).fill('')); // Reset the board
        setIsXturn(true);             // Reset to "X"'s turn
    }

    function getStatus() {
        const winner = getWinner(squares);
        if (winner) {
            return `Winner: ${winner}`;
        } else if (squares.every(square => square)) {
            return "It's a draw!";
        } else {
            return `Next turn: ${isXturn ? "X" : "O"}`;
        }
    }

    return (
        <>
            <div className="status">{getStatus()}</div>
            <div className="container">
                <div className="row">
                    <Sqaure value={squares[0]} onClick={() => handleclick(0)} />
                    <Sqaure value={squares[1]} onClick={() => handleclick(1)} />
                    <Sqaure value={squares[2]} onClick={() => handleclick(2)} />
                </div>
                <div className="row">
                    <Sqaure value={squares[3]} onClick={() => handleclick(3)} />
                    <Sqaure value={squares[4]} onClick={() => handleclick(4)} />
                    <Sqaure value={squares[5]} onClick={() => handleclick(5)} />
                </div>
                <div className="row">
                    <Sqaure value={squares[6]} onClick={() => handleclick(6)} />
                    <Sqaure value={squares[7]} onClick={() => handleclick(7)} />
                    <Sqaure value={squares[8]} onClick={() => handleclick(8)} />
                </div>
            </div>
            <button className="restart-button" onClick={handleRestart}>Restart</button>
        </>
    );
};

export default Tictac;





// import { useState } from 'react';
// import './style.css';

// function Sqaure({ value, onClick }) {
//   return <button className="square" onClick={onClick}>{value}</button>;
// }

// const Tictac = () => {
//   const [squares, setSquares] = useState(Array(9).fill(''));
//   const [isXturn, setIsXturn] = useState(true);

//   function handleclick(getCurentsquare) {
//     let cpySquares = [...squares];
//     // Prevent overwriting an already filled square
//     if (cpySquares[getCurentsquare]) return;
//     cpySquares[getCurentsquare] = isXturn ? "X" : "O"; // Set X or O
//     setIsXturn(!isXturn); // Toggle turns
//     setSquares(cpySquares); // Update the state
//   }

//   return (
//     <div className="container">
//       {[0, 1, 2].map(row => (
//         <div className="row" key={row}>
//           {[0, 1, 2].map(col => {
//             const index = row * 3 + col; // Calculate square index
//             return (
//               <Sqaure 
//                 key={index} 
//                 value={squares[index]} 
//                 onClick={() => handleclick(index)} 
//               />
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Tictac;
