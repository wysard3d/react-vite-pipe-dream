import './GameBoard.css';

function GameBoard() {
  const size = 24;
  const squares = Array.from({ length: size * size }, (_, i) => i);

  return (
    <div className="board">
      {squares.map((num) => (
        <div key={num} className="square"></div>
      ))}
    </div>
  );
}

export default GameBoard;
