import styled from "styled-components"

export const OriginalSelect = styled.select`
    color: transparent;
    position: absolute;
    appearance: none;
    border: none;
    cursor: pointer;
    outline: none;
    height: 2.2rem;
    width: 9.6rem;
    opacity: 0;
    option {
        color: white;
        background: black;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
      }
    
`
export const Wrapper = styled.div`
    justify-content: space-between;
    border: 1px solid #e5e5e5;
    padding-right: 20px;
    align-items: center;
    border-radius: 4px;
    padding-left: 25px;
    height: 2.2rem;
    outline: none;
    display: flex;
    width: 9.6rem;
    z-index: -1;
`
export const WrapperContent = styled.div`
    align-items: center;
    margin-left: -15px;
    display: flex;
`
