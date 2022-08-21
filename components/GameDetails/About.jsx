import * as dayjs from "dayjs"
import React from "react"

import { Title, Button, AboutGame, Description, Text, Info, InfoItem } from "./styles"

export default function About({ game }) {
    return (
        <AboutGame>
            <Description>
                <Title fontSize="1.25rem">Description</Title>
                <Text marginTop="1.25rem">{game.description_raw}</Text>
            </Description>
            <div>
                <Title fontSize="1.25rem">Info</Title>
                <Info>
                    <InfoItem>
                        <Title fontSize="1rem">Platforms</Title>
                        <Text marginTop=".4rem">
                            {game?.parent_platforms?.map(({ platform }, i) => (
                                <div key={platform.name}>
                                    {platform.name + (i !== game.parent_platforms.length - 1 ? ", " : "")}
                                </div>
                            ))}
                        </Text>
                    </InfoItem>
                    <InfoItem>
                        <Title fontSize="1rem">Genres</Title>
                        <Text marginTop=".4rem">
                            {game?.genres?.map((genre, i) => (
                                <div key={genre.name}>{genre.name + (i !== game.genres.length - 1 ? ", " : "")}</div>
                            ))}
                        </Text>
                    </InfoItem>
                    <InfoItem>
                        <Title fontSize="1rem">Release Date</Title>
                        <Text marginTop=".4rem">{dayjs(game.released).format("DD/MM/YYYY")}</Text>
                    </InfoItem>
                    <InfoItem>
                        <Title fontSize="1rem">Developers</Title>
                        <Text marginTop=".4rem">
                            {game?.developers?.map((developer, i) => (
                                <div key={developer.name}>
                                    {developer.name + (i !== game.developers.length - 1 ? ", " : "")}
                                </div>
                            ))}
                        </Text>
                    </InfoItem>
                    <InfoItem>
                        <Title fontSize="1rem">Publishers</Title>
                        <Text marginTop=".4rem">
                            {game?.publishers?.map((publisher, i) => (
                                <div key={publisher.name}>
                                    {publisher.name + (i !== game.publishers.length - 1 ? ", " : "")}
                                </div>
                            ))}
                        </Text>
                    </InfoItem>
                    <InfoItem>
                        <Title fontSize="1rem">Website</Title>
                        {game?.website ? (
                            <Text marginTop=".4rem">
                                <a href={game.website}>
                                    Go to website
                                </a>{" "}
                            </Text>
                        ) : (
                            "No website provided"
                        )}
                    </InfoItem>
                </Info>
            </div>
        </AboutGame>
    )
}
