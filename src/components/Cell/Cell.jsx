import React from 'react'

const Cell = ({ isAlive }) => {
    return <div className={`cell ring-1 w-5 h-5 ${isAlive ? 'bg-black' : 'bg-red-400'}`}></div>;
  };
  
  export default Cell;