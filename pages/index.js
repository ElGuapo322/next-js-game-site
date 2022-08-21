import { getGamesList, getPlatforms } from "../pages/api/gameThunkApi"
import React from "react"
import { wrapper } from "../store/store"
import GlobalLayout from "../components/UI/Layout"
import Header from "../components/UI/Header"
import Home from "../components/Home"

export default function Index(props) {
    return (
        <GlobalLayout>
            <Header />
            <Home />
        </GlobalLayout>
    )
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
      await store.dispatch(getGamesList({ page_size: 12, page: 1, ordering: "-rating" }))
      await store.dispatch(getPlatforms());
    });
  


