import styled from "styled-components"

export const CardBox = styled.div`
    // border: 1px solid #e5e5e5;
    flex-direction: column;
    border-radius: 4px;
    cursor: pointer;
    margin: 0.6rem;
    display: flex;
    width: calc(100% - 1.2rem);
    -webkit-box-shadow: 5px 5px 16px 0px rgba(246, 248, 249, 0.6);
    -moz-box-shadow: 5px 5px 16px 0px rgba(246, 248, 249, 0.6);
    box-shadow: 5px 5px 16px 0px rgba(246, 248, 249, 0.6);
    transition: all 0.25s ease;
    &:hover{
        transform: scale(1.1)
    }

    @media (min-width: 40rem) {
        width: calc(50% - 1.2rem);
    }
    @media (min-width: 56rem) {
        width: calc(25% - 1.2rem);
    }
`

export const Image = styled.div`
    background-image: ${(props) => `url(${props.bgImage})`};
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    display: flex;

    &::before {
        padding-top: 90%;
        content: "";
    }
`
export const Rating = styled.div`
    border-bottom-right-radius: 10px;
    border-top-left-radius: 3px;
    justify-content: center;
    background: #6dc849;
    align-items: center;
    display: flex;
    height: 32px;
    width: 32px;
    color: #fff;
    padding: 20px;
`

export const ReleaseDate = styled.h5`
    font-weight: normal;
    margin: 0 auto;

`

export const GameName = styled.h1`
    margin: 5px 5px 10px 5px;
    font-size: 1.25rem;
    text-align: center;
`
export const Platforms = styled.div`
    justify-content: center;
    margin: 0 4px 10px 4px;
    align-self: center;
    flex-wrap: wrap;
    display: flex;
`

export const Platform = styled.div`
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    margin-bottom: 5px;
    font-size: 0.8rem;
    margin-right: 3px;
    padding: 0.22rem 0.4rem 0.22rem 0.4rem;
    margin-left: 3px;
`
