import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveGridState, updateGameInfo } from '../../redux/slice/gameSlice';

function GameNameEditor({ id }) {
    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState('');
    const gameData = useSelector(state => state.game.game);
    const dispatch = useDispatch();

    // Find the game info by ID
    const singleGameInfo = gameData.find(el => el.id === id);

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const handleSave = () => {
        // Dispatch an action to update the game name in Redux state
        dispatch(updateGameInfo({ ...singleGameInfo, name:value }));
        console.log('working')
        setIsEdit(false); // Exit edit mode
    };
   
    return (
        <div className='ml-[10%]'>
            {isEdit ? (
                <div className="relative rounded-md shadow-sm">
                    <input
                        type="text"
                        name="gameName"
                        value={value}
                        onChange={handleInputChange}
                        placeholder='Enter a game name'
                        onMouseLeave={()=>{ handleSave(); setIsEdit(false)}}
                        className="block w-[300px] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
            
                </div>
            ) : (
                <div
                    onClick={() => setIsEdit(true)}
                    className="cursor-pointer w-[300px] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 bg-green-400"
                >
                    {gameData[id].name}
                </div>
            )}
        </div>
    );
}

export default GameNameEditor;
