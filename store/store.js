import {configureStore, combineReducers} from "@reduxjs/toolkit"
import { createWrapper, HYDRATE } from "next-redux-wrapper"
import gameSlice from "./reducers/gameSlice"

const combinedReducer = combineReducers({
    gameSlice
})

const masterReducer = (state, action) =>{
    if(action.type === HYDRATE){
            const nextState = {...state,
            gameSlice:{
                listOfGames: {...state.listOfGames, ...action.payload.gameSlice.listOfGames},
                oneGame:{...state.oneGame, ...action.payload.gameSlice.oneGame},
                screenshots: [...action.payload.gameSlice.screenshots],
                message: action.payload.gameSlice.oneGame.message||'',
                listOfPlatforms: {...state.listOfPlatforms, ...action.payload.gameSlice.listOfPlatforms},
            }
            }
            return nextState
    }else return combinedReducer(state, action)
}

export const makeStore = () => {
   return configureStore({
        reducer: masterReducer
    }, )
}
export const wrapper = createWrapper(makeStore)