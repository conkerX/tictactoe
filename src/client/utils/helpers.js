const incrementTime = (time) => {
  let min = Number(time.slice(0, 2));
  let sec = Number(time.slice(3, 5));

  if (sec >= 59) {
    min++;
    sec = 0;
  } else {
    sec++;
  }

  if (min < 10) {
    min = `0${min.toString()}`;
  } else {
    min = min.toString();
  }

  if (sec < 10) {
    sec = `0${sec.toString()}`;
  } else {
    sec = sec.toString();
  }

  return `${min}:${sec}`;
};

const playersMoves = (board, player) => {
  const moves = [];

  board.forEach((spot, i) => {
    if (spot === player) {
      moves.push(i);
    }
  });

  return moves;
};

const checkForWin = (board, player) => {
  const moves = playersMoves(board, player);
  const winningMoves = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];

  for (let i = 0; i < winningMoves.length; i++) {
    const goodMoves = [];
    for (let j = 0; j < winningMoves[i].length; j++) {
      if (moves.includes(winningMoves[i][j])) {
        goodMoves.push(winningMoves[i][j]);
      }

      if (goodMoves.length === 3) {
        return goodMoves;
      }
    }
  }

  return null;
};

module.exports = {
  incrementTime,
  checkForWin,
};
