import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  game: [{
   
    id:0,
    name: "Grid Name 1",
    activeCellColor: "#ffffff",
    deadCellColor: "#3d4852",
    isRunning:false,
},
{
    
    id:1,
    name: "Grid Name 2",
    activeCellColor: "#ffffff",
    deadCellColor: "#3d4852",
    isRunning:false,
}, {
    id:2,
  
    name: "Grid Name 3",
    activeCellColor: "#ffffff",
    deadCellColor: "#3d4852",
    isRunning:false,
},
{
    id:3,
    name: "Grid Name 4",
    activeCellColor: "#ffffff",
    deadCellColor: "#3d4852",
    isRunning:false,
}],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    saveGridState: (state, action) => {

      const { id, running } = action.payload;
      const gameIndex = state?.game.findIndex(item => item.id === id);
      if (gameIndex !== -1) {
        state.game[gameIndex].isRunning = running;
      }
    },
    addGame:(state, action)=>{
          let gameData = state.game;
          gameData.push(action.payload);
          return state
    },
    updateGameInfo: (state, action) => {
      const { id } = action.payload;
      const gameIndex = state?.game.findIndex(item => item.id === id);
      state.game[gameIndex] = {...action.payload}
    }
  },
  
});


export const { saveGridState, addGame, updateGameInfo } = gameSlice.actions;

export const selectGridById = (state, id) => {
    const game = state.game.find(item => item.id === id);
    return game ? game.grid : [];
  };

export const selectGrid = state => state.game; // Change state.grid to state.game

export default gameSlice.reducer;
