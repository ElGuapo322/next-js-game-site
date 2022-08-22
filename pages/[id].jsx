import { getOneGame, getScreenshotsOfGame } from "./api/gameThunkApi"
import { wrapper } from "../store/store"
import { useDispatch, useSelector } from "react-redux"
import React from "react"

import GameDetails from "../components/GameDetails"
import GlobalLayout from "../components/UI/Layout"
import Spinner from "../public/icons/Spinner"


export default function details({ query }) {
     const state = useSelector(state=>state)
    return (
        <GlobalLayout>
             <GameDetails game={state.gameSlice.oneGame} screenshots={state.gameSlice.screenshots} />
        </GlobalLayout>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async ({query}) => {
        await store.dispatch(getScreenshotsOfGame(query.id));
        await store.dispatch(getOneGame(query.id))    
      });