import React from 'react';

const Block = ({ value, position, handleClick }) => {
  return (
    <td onClick={(e) => handleClick(e, position)} className="vertical horizontal">{value}</td>
  );
};

export default Block;
