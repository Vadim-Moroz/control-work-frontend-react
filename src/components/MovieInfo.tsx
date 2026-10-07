import type {IMovie} from "../models/IMovie.tsx";
import type {FC} from "react";
import GenreBadge from "./GenreBadge.tsx";

type PropsMovieType ={
    movie:IMovie
}
const MovieInfo:FC<PropsMovieType> = ({movie}) => {
    return (
        <div>
            <h2>{movie.title}</h2>

            <p>{movie.overview}</p>

            <div>
                {movie.genre_ids.map(id =>
                    <GenreBadge key={id} genreId={id}/>
                )}
            </div>
        </div>
    );
};

export default MovieInfo;