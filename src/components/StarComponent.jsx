import { useState, useEffect } from "react";
import { FillStar } from "../assets/Constants";
import { Button } from "./Buttons";
export function StarRating({ maxLength , addWatchedMovie, watchedMovie, setUserRating}) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  const [isRated, setisRated] = useState(false);
  useEffect(() => {
    setUserRating(rating);
},[rating])
  function onClick(rating) {
    setRating(rating);
    setisRated(true);
  } 
  function hoverIn(rating) {
    setTempRating(rating);
  }
  function hoverOut(rating) {
    setTempRating(rating);
  }
  return (
    <>
    <div style={{backgroundColor:"#343A40", padding: "20px", borderRadius: "30px", display:"flex" , flexDirection:"column", alignItems:"center"}}>
      {
        !isRated ?<div style={{display: "flex", alignItems:"flex-start", justifyContent: "center"}}>
          {Array.from({ length: maxLength }, (_, i) => (
            <span key={i} style={{ cursor: "pointer", backgroundColor: "transparent", width: "30px" }}
            onClick={() => onClick(i + 1)}
            onMouseEnter={() => hoverIn(i + 1)}
            onMouseLeave={() => hoverOut(0)}>
              <FillStar color="#FCC419" fillColor="#FCC419" full={tempRating ? tempRating >= i + 1 : rating >= i + 1} />
            </span>
          ))}
          <p style={{ display: "inline", color: "#FCC419", marginLeft: "7px", fontSize: "20px" }}>{tempRating || rating || ""}</p>
        </div> : <p>You Rated this movie {rating} ⭐️</p>
      }
      {rating ? <Button text="Add to List" color="white" backgroundColor="#6741D9" padding="10px 20px" width="100%" addWatchedMovie={addWatchedMovie} watchedMovie={watchedMovie} /> : ""}
      </div>
    </>
  );
}