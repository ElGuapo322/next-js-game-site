import styled from "styled-components"

export const DetailsBg = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.48)), ${(props) => `url(${props.bgImage})`};
    height: ${(props) => props.height - 10 + "rem"};
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;

    @media screen and (max-width: 47rem) {
        
        height: ${(props) => props.height + "rem"};
    }
`
export const HeaderContent = styled.div`
    
    margin: 0 1rem 0 1rem;
    width: 22rem;

    @media screen and (min-width: 75rem) {
        
        margin-left: 20rem;
    }
    @media screen and (min-width: 47rem) {
        margin-left: 10rem;
        text-align: center;
        width: 100%;
    }
`

export const Title = styled.div`
    text-align: ${(props) => props.textAlign};
    font-size: ${(props) => props.fontSize};
    margin: ${(props) => props.margin};
    color: ${(props) => props.color};
    font-weight: 700;
    max-width: 75%;
    padding-top: ${(props) => props.paddingTop} ;

    @media screen and (max-width: 47rem) {
        max-width: 22rem;
    }
`

export const Button = styled.button`
    margin-left: ${(props) => props.marginLeft};
    background: transparent;
    border: 1px solid #fff;
    border-radius: 4px;
    margin-top: 1rem;
    font-size: 1rem;
    cursor: pointer;
    height: 2.8rem;
    width: 12rem;
    color: #fff;
`
export const AboutGame = styled.div`
    margin: 4rem 15rem 4rem 15rem;
    display: flex;

    @media screen and (max-width: 75rem) {
        margin: 4rem 5rem 4rem 5rem;
    }
    @media screen and (max-width: 47rem) {
        margin: 4rem;
    }

    @media screen and (max-width: 47rem) {
        flex-direction: column;
        align-items: center;
        margin: 1rem;
    }
`
export const Description = styled.div`
    margin-right: 2rem;
    max-width: 50%;
    @media screen and (max-width: 47rem) {
        max-width: 100%;
        margin-bottom: 2rem;
    }
`
export const Text = styled.div`
    margin-top: ${(props) => props.marginTop};
    line-height: 1.5;
    flex-wrap: wrap;
    display: flex;

    @media screen and (max-width: 30rem) {
        font-size: 0.9rem;
    }
`

export const Info = styled.div`
    margin-top: 1.25rem;
    flex-wrap: wrap;
    display: flex;
    min-width: 50%;
`
export const InfoItem = styled.div`
    margin-bottom: 1rem;
    width: 8rem;
`
export const SliderBox = styled.div`
    margin-bottom: 2rem;
`
