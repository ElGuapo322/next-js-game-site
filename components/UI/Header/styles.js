import styled from "styled-components"

export const NavBar = styled.div`
    align-items: center;
    display: flex;
    height: 3rem;
    width: 100%;
    position:sticky;
    background: black;
`
export const Logo = styled.a`
    text-decoration: none;
    margin-left: 3rem;
    font-size: 1.5rem;
    color: white;

    @media (max-width: 80rem) {
        margin-left: 1.25rem;
    }
`
