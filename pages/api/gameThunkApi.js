import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getGamesList = createAsyncThunk("games/list", async (params, { rejectWithValue }) => {
    try {
        const response = await axios.get("https://api.rawg.io/api/games?key=931fad4437a2401ea5b906f9118d0f95", { params })
        return response.data.results
    } catch (err) {
        return rejectWithValue(err)
    }
})

export const getOneGame = createAsyncThunk("games/one", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=931fad4437a2401ea5b906f9118d0f95`)

        return response.data
    } catch (err) {
        return rejectWithValue(err)
       
    }
})

export const getScreenshotsOfGame = createAsyncThunk("games/screenshots", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://api.rawg.io/api/games/${id}/screenshots?key=931fad4437a2401ea5b906f9118d0f95`)

        return response.data.results
    } catch (err) {
        return rejectWithValue(err)
    }
})

export const getPlatforms = createAsyncThunk("games/platforms", async () => {
    try {
        const response = await axios.get("https://api.rawg.io/api/platforms/lists/parents?key=931fad4437a2401ea5b906f9118d0f95")
        return response.data.results
    } catch (err) {
        return err
    }
})