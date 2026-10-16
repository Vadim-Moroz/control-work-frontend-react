import type { IMovieDetails} from "../models/IMovie.tsx";
import type {FC} from "react";
import GenreBadge from "./GenreBadge.tsx";
import PosterPreview from "./PosterPreview/PosterPreview.tsx";
import "./style/MovieInfo.css"

type PropsMovieType ={
    movie:IMovieDetails;
}
const MovieInfo:FC<PropsMovieType> = ({movie}) => {
    return (
        <div className="movie">
            <h2>{movie.title}</h2>
            <PosterPreview image={movie.poster_path}/>
            <p>{movie.overview}</p>
            <p className="popularity">Популярність: {movie.popularity}</p>
            <div>
                {movie.genres.map(genre  =>
                    <GenreBadge key={genre.id} genreId={genre.name}/>
                )}
            </div>
        </div>
    );
};

export default MovieInfo;