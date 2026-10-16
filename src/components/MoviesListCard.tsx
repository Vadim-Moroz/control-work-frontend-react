import type {FC} from "react";
import type {IMovie} from "../models/IMovie.tsx";
import PosterPreview from "./PosterPreview/PosterPreview.tsx";
import StarsRating from "./StarsRating.tsx";
import {Link} from "react-router-dom";
import './style/MovieListCard.css'

type PropsMovieType ={
    movie:IMovie
}

const MoviesListCard:FC<PropsMovieType> = ({movie}) => {

    return (
        <div className="movie-card">
            <PosterPreview image={movie.poster_path}/>
            <h1>{movie.title}</h1>
            <StarsRating rating={movie.vote_average}/>
            <Link to={`/movies/${movie.id}`}>Детальніше</Link>
            {/*<UserInfo/>*/}
        </div>
    );
};

export default MoviesListCard;