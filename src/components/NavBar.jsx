import styled from "styled-components";

export function NavBar ({ heading, backgroundColor, foundResult, img, onInput,input}) {

   return <StyledNavBar backgroundColor={backgroundColor}>
                <h1><span>{img}</span>{heading}</h1>
                <input type="text" placeholder="Search movies..." value={input} onChange={(e) => onInput(e.target.value)}/>
                <p>Found <span>{foundResult.length}</span> results</p>
          </StyledNavBar>;
}

const StyledNavBar = styled.nav`
    background-color: ${(props) => props.backgroundColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8em 2.2em;
    color: white;
    border-radius: 10px;
    h1 > span{ 
        font-size: 33px;
        margin-right: 8px
    }
    h1{
        font-size: 24px;
        font-weight: 600;
        display: flex;
        align-items:center;
    }
    input{
        background-color: #7950F2; 
        color: white;
        border: none;
        padding: 10px 15px;
        font-size: 19px;
        width: 100%;
        max-width: 370px;
        border-radius: 10px;
        transition: 0.2s all linear;
    }
    input:focus {
        transform: translateY(-3px);
        outline: none;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    }
    input::placeholder{
        color: #ADB5BD;
        font-weight: 500;
    }
    p > span{
        font-size: 20px;
        font-weight: 600;
    }
`;  