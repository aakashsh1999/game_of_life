import React, { useState } from 'react'
import RunningGameCard from '../components/RunningGameCard/RunningGameCard'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addGame } from '../redux/slice/gameSlice';

function Dashboard() {
    const gameData = useSelector(state => state.game.game)
    const dispatch = useDispatch()



    const addNewGame = () => {
        const tempData = gameData;
        let newGame = {
            name: `Grid Name ${tempData.length + 1}`,
            id: tempData.length,
            activeCellColor: "#ffffff",
            deadCellColor: "#3d4852",
            isRunning:false,
        }
        dispatch(addGame(newGame))

    }

    return (
        <div className='w-full h-full max-w-7xl mx-auto flex flex-col items-center py-8 gap-y-6'>
            {
                gameData.map((game, index) => (
                    <RunningGameCard key={index} gameData={game} index={index} />
                ))
            }
            <button className='w-[400px] text-center font-semibold py-8 rounded-lg px-3  bg-green-400'
                onClick={() => addNewGame()}>
                + Add More
            </button>
        </div>
    )
}

export default Dashboard