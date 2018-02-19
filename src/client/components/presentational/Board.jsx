import React from 'react';
import Block from './Block.jsx';

const Board = ({ goodMoves, isWinner, board, handleClick }) => {
  return (
    <table>
      <tbody>
        <tr>
          <Block goodMoves={goodMoves} isWinner={isWinner} value={board[0]} position={0} handleClick={handleClick} />
          <Block goodMoves={goodMoves} isWinner={isWinner} value={board[1]} position={1} handleClick={handleClick} />
          <Block goodMoves={goodMoves} isWinner={isWinner} value={board[2]} position={2} handleClick={handleClick} />
        </tr>
        <tr>
          <Block goodMoves={goodMoves} isWinner={isWinner} value={board[3]} position={3} handleClick={handleClick} />
          <Block goodMoves={goodMoves} isWinner={isWinner} value={board[4]} position={4} handleClick={handleClick} />
          <Block goodMoves={goodMoves} isWinner={isWinner} value={board[5]} position={5} handleClick={handleClick} />
        </tr>
        <tr>
          <Block goodMoves={goodMoves} isWinner={isWinner} value={board[6]} position={6} handleClick={handleClick} />
          <Block goodMoves={goodMoves} isWinner={isWinner} value={board[7]} position={7} handleClick={handleClick} />
          <Block goodMoves={goodMoves} isWinner={isWinner} value={board[8]} position={8} handleClick={handleClick} />
        </tr>
      </tbody>
    </table>
  );
};

export default Board;
