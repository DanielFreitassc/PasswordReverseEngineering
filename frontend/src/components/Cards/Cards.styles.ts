import styled from "styled-components";

export const CardsComponents = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 330px;
    height: 446px;      
    border: 4px solid purple;
    color: white;
    margin: 10px;

    img {
        position: absolute;
        width: 320px;
        height: 439px;
    }
    h2 {
        z-index: 1;
    }
`