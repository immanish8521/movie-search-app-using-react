import React from 'react';
import './Styles/displayMovie.css';

const DisplayMovie = ({movieName, movieImage, movieTitle, movieLinks}) => {
    return (
        
        <div className="cards">
            <div className="card">
                <img src={movieImage} alt="movie-pic" className="card_img" />
                <div className="card_info">
                    <span className="card_category">{movieTitle}</span>
                    <h3 className="card_title">{movieName}</h3>
                    <a href={movieLinks} target='_blank'>
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
    
    )
}

export default DisplayMovie;
