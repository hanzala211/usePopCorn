import styled from "styled-components";
export function Box ({ children, padding }){
    return <StyledBox style={{padding: `${padding}`}}>
        {children}
    </StyledBox>
}
const StyledBox = styled.div`
    overflow-y: auto;
    background-color: #2B3035;
    width: 100%;
    max-width: 500px;
    border-radius: 20px;
    box-sizing: border-box;
    height: 83vh;
    ul{
        display: flex;
        flex-direction: column;
    }
    li{
        border-bottom: 1px solid #343A40;
        padding: 15px 20px;
    }
`;