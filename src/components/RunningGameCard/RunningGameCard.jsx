import React from 'react'
import { useNavigate } from 'react-router-dom';

function RunningGameCard({ gameData, index }) {

  const navigate = useNavigate(); // Get the navigate function from the hook

  // Function to navigate to a specific grid
  const goToGrid = () => {
    navigate(`/playground/${gameData.name.split(" ").join("_").toLowerCase()}`,
      {
        state: {
          id: index
        }
      }
    ); // Use the navigate function to navigate to the specified route
  };

  return (
    <div className='w-[400px] cursor-pointer text-center font-semibold py-8 rounded-lg px-3 bg-green-400' onClick={() => goToGrid()}>{gameData.name}</div>
  )
}

export default RunningGameCard