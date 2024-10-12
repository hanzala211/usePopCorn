import styled from "styled-components";
import { StarRating } from "./StarComponent";
import { RatedString } from "./AlreadyRated";
export function Container({item, onClick, addWatchedMovie, setUserRating, watchedMovies, selectedId}){
    const resultId = watchedMovies.find((item) => {
            return item.imdbID === selectedId;
    })
    return <StyledContainer>
        <div className="headingDiv">
            <img src={item.Poster} alt={`${item.Title} movie`} />
            <button className="removeButton" onClick={onClick}><img src="/img/leftArrow.svg" /></button>
            <div className="titleDiv">
                    <h2>{item.Title}</h2>
                    <p>{item.Released}</p>
                    <p>{item.Genre}</p>
                    <p><span>⭐️</span>{item.imdbRating} IMDb Rating</p>
            </div>
        </div>
        <div className="mainDiv">
            {!resultId ? <StarRating setUserRating={setUserRating} maxLength={10} addWatchedMovie={addWatchedMovie} watchedMovie={item} /> : <RatedString  text={`You Rated this movie ${resultId.userRating} ⭐️`}/> }
            <p><em>{item.Plot}</em></p>
            <p>Starring {`${item.Actors}`}</p>
            <p>Directed by {`${item.Director}`}</p> 
        </div>
    </StyledContainer>
}


const StyledContainer = styled.div`
    color: white;
    .headingDiv{
        display: flex;
        align-items:center;
        gap: 20px;
        text-align: left;
        background-color: #343A40;
        position: relative;
    }
    img{
        width: 120px;
    }
    .titleDiv{
        display: grid;
        gap: 8px; 
    }
    .mainDiv{
        padding: 20px;
        text-align: left;
        display: grid;
        gap: 30px;
    }
    .removeButton{
        position: absolute;
        top: 6px;
        left: 5px;
        border: none;
        cursor: pointer;
        border-radius: 50%;
    }
    .removeButton > img{
        width: 100%;
        max-width: 30px;
        border-radius: 50%;
    }
    p > span{
        margin-right: 7px;
    }
`;