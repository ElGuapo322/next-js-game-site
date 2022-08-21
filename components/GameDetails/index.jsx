import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import dynamic from "next/dynamic"
import React from "react"

import { DetailsBg, Title, Button, HeaderContent, SliderBox } from "./styles"
import Header from "../UI/Header"
import About from "./About"


export default function GameDetails({ game, screenshots }) {
    return (
        <div>{ game && 
            <>
            <Header />
            <DetailsBg maxWidth="100%" height={50} bgImage={game.background_image}>
                
                <HeaderContent>
                    <Title color="#fff" fontSize="3rem" paddingTop={"230px"}>
                        {game.name}
                    </Title>
                    {game?.stores?.length > 0 && (
                        <a href={game.stores[0].url}>
                            <Button>Buy</Button>
                        </a>
                    )}
                </HeaderContent>
            </DetailsBg>
            <SliderBox>
                <Title margin="2rem 0 1rem 1rem" fontSize="1.25rem">
                    Screenshots
                </Title>
                <Carousel ssr responsive={responsive}>
                    {screenshots.map((screen) => {
                        return <DetailsBg key={screen.image} height={22} bgImage={screen.image} />
                    })}
                </Carousel>
            </SliderBox>
            <About game={game} />
            </>
            }
            
        </div>
    )
}

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1260 },
        items: 4,
    },
    desktopSmall: {
        breakpoint: { max: 1260, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 648 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 648, min: 0 },
        items: 1,
    },
}
