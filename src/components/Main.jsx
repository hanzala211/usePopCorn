import styled from "styled-components";
export function Main({children}){
    return <StyledMain>
        {children}
    </StyledMain>
}

const StyledMain = styled.main`
    display: flex;
    gap: 20px;
    justify-content: center;
`;