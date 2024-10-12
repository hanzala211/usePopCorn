import styled from "styled-components";

export function WatchedMovies({item}){
    const {Title: title, Poster: poster, Runtime: length, imdbRating, userRating} = item;
    return <StyledList>
        <img src={poster} alt={`${title} movie`} />
        <div className="mainDiv">
            <h3>{title}</h3>
            <div className="ratingDiv">
                <p><span>⭐️</span>{imdbRating}</p>
                <p><span>🌟</span>{userRating}</p>
                <p><span>⏳</span>{length}</p>
                <button>X</button>
            </div> 
        </div>
    </StyledList>
}

const StyledList = styled.li`
    color: white;
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    gap: 20px;
    position: relative;
    h3 {
        font-size: 1rem;
        text-align: left;
    }
    .mainDiv{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        width: 250px;
    }
    img{
        max-width: 50px;
    }
    .ratingDiv{
        display: flex;
        gap: 10px;
        justify-content: space-between;
    }
    button{
        background-color: red;
        border: none;
        cursor:pointer;
        padding: 4px 8px;
        border-radius: 50%;
        position: absolute;
        right: 10px;
        transition: 0.1s opacity linear;
        bottom: 35px;
    }
    p > span{
        margin-right: 5px;
    }
    button:hover{
        opacity: 0.5;
    }
`;