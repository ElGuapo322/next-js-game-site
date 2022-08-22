import React from "react"

import { Grid } from "./styles"
import Card from "../Card"

export default function CardGrid({ games }) {
    return (
        <Grid>
            {games && games.map((game, index) => (
                <Card game={game} key={game.id + game.slug + index} />
            ))}
        </Grid>
    )
}
