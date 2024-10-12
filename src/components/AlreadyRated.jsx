import styled from "styled-components";
export function RatedString ({text}){
    return <StyledDiv>
        {text}
    </StyledDiv>
}

const StyledDiv = styled.div`
    background-color: #343A40;
    color: white;
    padding: 20px;
    font-size: 18px;
    text-align: center;
`;