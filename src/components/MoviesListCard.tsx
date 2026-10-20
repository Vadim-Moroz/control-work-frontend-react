import type {FC} from "react";
import type {IMovie} from "../models/IMovie.tsx";
import PosterPreview from "./PosterPreview/PosterPreview.tsx";
import StarsRating from "./StarsRating.tsx";
import {Link} from "react-router-dom";
import './style/MovieListCard.css'
import UserInfo from "./UserInfo.tsx";
import GenreBadge from "./GenreBadge.tsx";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";

type PropsMovieType ={
    movie:IMovie
}

const MoviesListCard:FC<PropsMovieType> = ({movie}) => {
    const { genresList } = useAppSelector(({ movieSlice }) => movieSlice);
    return (
        <div className="movie-card">
            <PosterPreview image={movie.poster_path}/>
            <h1>{movie.title}</h1>
            <StarsRating rating={movie.vote_average}/>
            <div>
                {movie.genre_ids.map(genreId => genresList.find(genre => genre.id === genreId))
                    .filter(genre => genre !== undefined)
                    .map(genre => (<GenreBadge key={genre.id} genreId={genre.name} />))}
            </div>
            <p>{movie.overview}</p>
            <UserInfo/>
            <Link to={`/movies/${movie.id}`}>Детальніше</Link>

        </div>
    );
};

export default MoviesListCard;