import styled from "styled-components";
export function MovieList ({item, setSelectedId}){
    const {Title: title, Poster: poster, Year: released, imdbID} = item;
    return <StyledList className='searchedData' id={imdbID} onClick={(e) => {
      return setSelectedId(e.target.closest("li").id)
      }} >
              <img src={poster} alt={`${title} movie`} />
              <div>
                <h3>{title}</h3>
                <p><span>📆</span>{released}</p>
              </div>
            </StyledList>
}

const StyledList = styled.li`
  display:flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  transition: 0.3s background-color ease-in-out;
  height: 10vh;
  overflow: hidden;
  text-align: left;
  &:hover{
    background-color: #343a40;
  }
  color: white;
  img{
    width: 100%;
    max-width: 50px;
  }
  p{
    display: flex;
    margin-top: 10px;
    gap: 10px;  
  }
`;