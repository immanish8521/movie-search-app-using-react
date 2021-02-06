import React from 'react';
import movieData from './Components/movieData';
import DisplayMovie from './Components/DisplayMovie';


function App() {
  return (
    <div>
      <h1 className="heading_style">List of top 6 netflix series in 2020</h1>
      {movieData.map((val) => {
        return(
          <DisplayMovie
            key = {val.id}
            movieName={val.movieName}
            movieImage={val.movieImage}
            movieTitle={val.movieTitle}
            movieLinks={val.movieLinks}
          />
        )
      })}
   </div>
  )
}

export default App;
