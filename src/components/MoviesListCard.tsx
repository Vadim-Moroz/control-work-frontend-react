import type {FC} from "react";
import type {IMovie} from "../models/IMovie.tsx";
import PosterPreview from "./PosterPreview/PosterPreview.tsx";
import MovieInfo from "./MovieInfo.tsx";
import StarsRating from "./StarsRating.tsx";
import {Link} from "react-router-dom";

type PropsMovieType ={
    movie:IMovie
}

const MoviesListCard:FC<PropsMovieType> = ({movie}) => {

    return (
        <div className="movie-card">
            <PosterPreview image={movie.poster_path}/>

            <StarsRating rating={movie.vote_average}/>

            <MovieInfo movie={movie}/>
            <Link to={`/movies/${movie.id}`}>Детальніше</Link>
            {/*<UserInfo/>*/}
        </div>
    );
};

export default MoviesListCard;