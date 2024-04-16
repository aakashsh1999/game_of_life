import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import gameReducer from  '../redux/slice/gameSlice';


const persistConfig={
    key:'root',
    storage
}


const rootReducer = combineReducers({
    game :gameReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store)


export default store