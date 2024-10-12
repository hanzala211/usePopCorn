import { useEffect, useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar';
import { Box } from './components/Box';
import { MovieList } from './components/MovieList';
import { Main } from './components/Main';
import { WatchedMovies } from './components/WatchedMovies';
import { API_KEY } from './assets/Constants';
import { Loader } from './components/Loader';
import { Error } from './components/Error';
import { Container } from './components/SelectedMovie';
// const tempWatchedData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     runtime: 148,
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: "tt0088763",
//     Title: "Back to the Future",
//     Year: "1985",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ];
function App() {
  const [input, onInput] = useState("");
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLoading, setSelectedLoading] = useState(false);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    async function searchByInput(query) {
      try{
        setIsLoading(true);
        setIsError(false);
        const result = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`, {
          signal: controller.signal
        });
        const data = await result.json();
        if(data.Response === "True"){
          setMovies(data.Search);
          setIsError(false);
        }else if(data.Response === "False"){
          setError(data.Error);
          setIsError(true);
          setMovies([]);
        }
        setIsLoading(false);
      } catch(error){
        setError(error);
      }
    }
    if(input.length > 3){
      searchByInput(input);
    }else if(input.length < 3) {
      setMovies([]);
      setError("");
      setIsError(false);
    }
    return () => {
      controller.abort(); 
    }
  },[input])
  
  useEffect(() => {
    async function searchById(id) {
      try{
        setSelectedLoading(true);
        const result = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        const data = await result.json();
        setSelectedMovie(data);
        setSelectedLoading(false);
      }catch(error){
        console.error(error)
      }
    }
    searchById(selectedId);
  }, [selectedId])
  useEffect(() => {
    const localItems = JSON.parse(localStorage.getItem("watched")) || []; // whether it will get item from localstorage or it will be empty
    setWatchedMovies(localItems);
  }, [])
  useEffect(() => {
    if (watchedMovies.length > 0) { // this if case is used because on every mount it stores the empty array in it
      localStorage.setItem("watched", JSON.stringify(watchedMovies));
    } 
 },[watchedMovies]);
  function handleCloseSelected(){
    setSelectedLoading(true);
    const refTime = setTimeout(() => {
      setSelectedId("");
      setSelectedLoading(false);
    }, 1000)
    return () => clearTimeout(refTime); 
  }
  function handleAddSelected(item){
    const updatedItem = {...item, userRating}
    setWatchedMovies((prevMovies) => [...prevMovies, updatedItem])
    setSelectedId(null);
  }

  return <>
      <NavBar heading="usePopcorn" img="🍿" foundResult={movies} backgroundColor="#6741D9" onInput={onInput} input={input} />;
      <Main>
        <Box padding="15px 0">
            <ul>
              {isError && <Error error={error} /> }
              {!isLoading ? movies?.map((item, i) => <MovieList watchedMovies={watchedMovies} item={item} key={i} setSelectedId={setSelectedId} />) : <Loader />  }
            </ul>
        </Box>
        <Box>
          <ul>
            {!selectedId ? watchedMovies?.map((item, i) => <WatchedMovies item={item} key={i}/>) : selectedLoading ? <Loader /> : <Container selectedId={selectedId} watchedMovies={watchedMovies} setUserRating={setUserRating} onClick={handleCloseSelected} item={selectedMovie} addWatchedMovie={handleAddSelected}/>}
          </ul>
        </Box>
      </Main>
  </>
}

export default App
