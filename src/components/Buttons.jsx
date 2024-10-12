import { useEffect } from "react";
import styled from "styled-components";

export function Button({color, backgroundColor, text, padding, width, addWatchedMovie, watchedMovie}){
    return <StyledButton onClick={() => {    
            addWatchedMovie(watchedMovie)
    }} color={color} backgroundColor={backgroundColor} padding={padding} width={width}>
        {text}
    </StyledButton>
}

const StyledButton = styled.button`
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    padding: ${(props) => props.padding};
    width: ${(props) => props.width};
    border: none;
    cursor: pointer;
    border-radius: 10px;
    font-size: 1.1em;
    margin-top: 20px;
    transition: 0.3s all ease-in-out;
    &:hover{
        background-color: rgba(103, 65, 217, 0.7);
    }   
`;