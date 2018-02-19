import React from 'react';

const Block = ({ goodMoves, isWinner, value, position, handleClick }) => {
  return (
    <td 
      onClick={(e) => handleClick(e, position)} 
      className={`${isWinner ? goodMoves.indexOf(position) >= 0 ? 'winner' : 'not-winner' : 'not-winner'}`}
    >
      {value}
    </td>
  );
};

export default Block;
