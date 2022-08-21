import { createSlice, current } from "@reduxjs/toolkit"
import { getPlatform, getGamesList,getOneGame,getPlatforms,getScreenshotsOfGame } from "../../pages/api/gameThunkApi"
import { HYDRATE} from 'next-redux-wrapper';

const initialState = {
    listOfGames: {
        games: [],
    },
    oneGame: {},
    screenshots:[],
    message: "",
    listOfPlatforms: {
        platforms: [],
    },
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        clearList(state) {
            state.listOfGames = { games: [], gameIDs: [] }
        },
    },
   
    extraReducers: (builder) => {
        builder.addCase(getGamesList.fulfilled, (state, action) => {
            state.listOfGames.games = [...state.listOfGames.games, ...action.payload]
            state.message = ""
        })
        builder.addCase(getGamesList.pending, (state) => {
            state.message = "loading"
        })
        builder.addCase(getGamesList.rejected, (state, action) => {
            state.message = action.error.message
        })
        builder.addCase(getOneGame.fulfilled, (state, action) => {
            state.oneGame = action.payload
        })
        builder.addCase(getScreenshotsOfGame.fulfilled, (state, action) => {
            state.screenshots = action.payload
        })
        builder.addCase(getPlatforms.fulfilled, (state, action) => {
            state.listOfPlatforms.platforms = [ ...state.listOfPlatforms.platforms, ...action.payload ]

        })
        // builder.addCase(getPlatforms.rejected, (state, action) => {
        //     // state.listOfPlaforms = action.payload
        // })
        
    },
})

export const { clearList } = productSlice.actions
export default productSlice.reducer