import * as dayjs from "dayjs"
import Link from "next/link"
import React from "react"

import { CardBox, Image, ReleaseDate, GameName, Platforms, Platform, Rating } from "./styles"

export default function Card({ game }) {
    return (
        <Link href="/[id]" as={`/` + game.id} shallow={false}>
            <CardBox>
                <Image bgImage={game?.background_image}>
                    <Rating>{game?.rating}</Rating>
                </Image>
                <ReleaseDate>Released: {game?.released ? dayjs(game?.released).format("DD/MM/YYYY"): 'No info'}</ReleaseDate>
                <GameName>{game?.name}</GameName>
                <Platforms>
                    {game?.parent_platforms &&
                        game?.parent_platforms.map(({ platform }) => (
                            <Platform key={platform.id}>{platform.name}</Platform>
                        ))}
                </Platforms>
            </CardBox>
        </Link>
    )
}
