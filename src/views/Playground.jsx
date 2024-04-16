import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button/Button';
import GameNameEditor from '../components/GameNameEditor/Index';
import { produce } from 'immer'
import Cell from '../components/Cell/Cell';
import { useDispatch, useSelector } from 'react-redux';
import { saveGridState } from '../redux/slice/gameSlice';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

function Playground() {
    const { state } = useLocation();
    const [numRows, setNumRows] = useState(20)
    const [grid, setGrid] = useState([])

    const data = useSelector(state => state.game)

    const activeGame = data.game.filter(el => el.id === state.id)
    const [numCols, setNumCols] = useState(50)
    const [running, setRunning] = useState(activeGame[0].isRunning);
    const [activeColor, setActiveColor] = useState([255, 0, 0]); // Initial color for active cells
    const [deadColor, setDeadColor] = useState([0, 0, 255]);
    const dispatch = useDispatch()



    useEffect(() => {
        initializeGrid();
    }, []);

    //Initialising the grid
    const initializeGrid = () => {
        console.log('resetting')
        const newGrid = [];
        for (let i = 0; i < numRows; i++) {
            newGrid.push(Array.from(Array(numCols), () => Math.random() > 0.7 ? 1 : 0));
        }
        setGrid(newGrid)
    };

    useEffect(() => {
        let intervalId;
        if (running) {
            intervalId = setInterval(simulate, 500); // Adjust simulation speed (milliseconds)
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [running]);


    const simulate = () => {

        setGrid(prevGrid => prevGrid.map((row, i) =>
            row.map((cell, j) => {
                const neighbors = countNeighbors(prevGrid, i, j);
                if (cell === 1) {
                    if (neighbors < 2) return 0;
                    else if (neighbors === 2 || neighbors === 3) return 1;
                    else return 0;
                } else {
                    if (neighbors === 3) return 1;
                    else return 0;
                }
            })
        ))

    };


    const countNeighbors = (grid, x, y) => {
        let count = 0;
        const directions = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1], [0, 1],
            [1, -1], [1, 0], [1, 1]
        ];
        for (let [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            if (newX >= 0 && newX < numRows && newY >= 0 && newY < numCols) {
                if (grid[newX][newY] === 1) count++;
            }
        }
        return count;
    };


    const resetGrid = () => {
        setRunning(false)
        initializeGrid();
        dispatch(saveGridState({ id: state.id, running }))
    };

    const toggleRunning = () => {
        setRunning(!running);

    };
    const navigate = useNavigate()

    const handleColumnChange = (e) => {
        const newCols = parseInt(e.target.value);
        setNumCols(newCols);
        setNumRows(parseInt(e.target.value) * 2)
        // Update grid with new number of columns
    };



    return (
        <div className='h-screen bg-gray-400 flex flex-col py-10'>
            <GameNameEditor id={state.id} />
            <div className='flex justify-center py-8'>
                <Button text={running ? "Pause" : "Start"} onClick={toggleRunning } classes={"bg-blue-500 hover:bg-blue-400"}></Button>
                <Button text={"Reset"} onClick={resetGrid} classes={"bg-red-500 hover:bg-red-400"}></Button>
                <Button text={"Home"} onClick={() => {
                    navigate('/');
                    dispatch(saveGridState({ id: state.id, running }))
                }} classes={"bg-gray-700 hover:bg-gray-500"}></Button>

            </div>
            <div className='mx-auto flex justify-center overflow-scroll'>
                <div className='mx-auto ring-2 ring-white' style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${numCols}, 20px)`,
                }}>
                    {grid.map((row, i) =>
                        row.map((cell, j) => <Cell key={`${i}-${j}`} isAlive={cell} />)
                    )}
                </div>
            </div>
            <div className='w-full px-40 mt-10 flex gap-x-4'>
                <div className='bg-white flex items-center w-[300px] py-2 justify-center rounded-lg'>
                    <input
                        type="range"
                        min="25"
                        max="100"
                        value={numCols}
                        onChange={handleColumnChange}
                        className=""

                    />
                    <span className="ml-2">{numCols}</span>
                </div>
            </div>
        </div>
    )
}

export default Playground