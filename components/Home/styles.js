import styled from "styled-components"

export const MainContent = styled.div`
  
    margin: 20px 30px 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 80rem) {
        margin: 20px 120px 0 120px;
    }
`

export const Title = styled.div`
    font-weight: 500;
    font-size: 1.13rem;
    margin-left: 0.6rem;
`
export const ContentHeader = styled.div`
    width: 100%;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    display: flex;
    margin-right: 0.6rem;
    align-items: center;
`
export const Filters = styled.div`
    display: flex;

    @media (max-width: 33rem) {
        flex-direction: column;
        justify-content: space-between;
        height: 7.5rem;
    }
`
