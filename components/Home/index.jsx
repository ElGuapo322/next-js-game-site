import { getGamesList } from "../../pages/api/gameThunkApi"
import { useDispatch, useSelector } from "react-redux"
import InfiniteScroll from "react-infinite-scroller"
import { clearList } from "../../store/reducers/gameSlice"
import React, { useState, useEffect, useRef } from "react"

import { MainContent, Title, ContentHeader, Filters } from "./styles"
import Spinner from "../../public/icons/Spinner"
import CardGrid from "../UI/CardGrid"
import Select from "../UI/Select"
import Input from "../UI/Input"

export default function Home() {
    const [parameters, setParameters] = useState({
        search: "",
        orderBy: "-rating",
        byPlatform: "",
    })
    const [offset, setOffset] = useState(1)
    const isMounted = useRef(false);

    const { listOfGames, message, listOfPlatforms } = useSelector((state) => state.gameSlice)
    const dispatch = useDispatch()


    useEffect(() => {
        let timeoutId

         if (isMounted) {
            setOffset(1)
            dispatch(clearList())
            timeoutId = setTimeout(
                () =>
                    dispatch(
                        getGamesList({
                            parent_platforms: parameters.byPlatform
                                ? parameters.byPlatform
                                : "1,2,3",
                            ordering: parameters.orderBy,
                            search: parameters.search,
                            page_size: 12,
                            page: 1,
                        }),
                    ),
                500,
            )
        } else isMounted.current=true

        return () => {
            clearTimeout(timeoutId)
            dispatch(clearList())
        }
    }, [parameters])

    const onChangeFilters = (e) => {
        const { name, value } = e.target

        setParameters((state) => ({ ...state, [name]: value }))
    }

    const fetchMore = () => {
        const queryParams = {
            parent_platforms: parameters.byPlatform ? parameters.byPlatform : '1,2,3',
            ordering: parameters.orderBy,
            search: parameters.search,
        }

        dispatch(
            getGamesList({
                page_size: 12,
                page: offset + 1,
                ...queryParams,
            }),
        )
        setOffset(offset + 1)
    }
    return (
        <MainContent>
            <ContentHeader>
                <Title>GAMES</Title>
                <Filters>
                    <Input value={parameters.search} onChange={onChangeFilters} name="search" />
                    <Select
                        onChange={onChangeFilters}
                        placeholder="Order By"
                        options={[
                            { value: "released", label: "Old Release" },
                            { value: "-released", label: "New Release" },
                            { value: "-rating", label: "Highest Rating" },
                            { value: "rating", label: "Lowest Rating" },
                        ]}
                        name="orderBy"
                        value={parameters.orderBy}
                    />
                    <Select
                        onChange={onChangeFilters}
                        placeholder="By platforms"
                        options={listOfPlatforms.platforms.map((platform) => ({
                            value: platform.id,
                            label: platform.name,
                        }))}
                        name="byPlatform"
                        value={parameters.byPlatform}
                    />
                </Filters>
            </ContentHeader>

            <InfiniteScroll
                pageStart={0}
                loadMore={!message || message === "Rejected" ? fetchMore : () => {}}
                hasMore={listOfGames.games.length < offset + 1 ? false : true}
            >
            
                <CardGrid games={listOfGames.games} />
            </InfiniteScroll>
            {message === "loading" && <Spinner />}
        </MainContent>
    )
}
