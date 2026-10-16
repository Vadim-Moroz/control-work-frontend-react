import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {IMovieDetails} from "../models/IMovie.tsx";
import {getMovie} from "../services/api.service.tsx";
import "./style/MovieComponent.css"
import MovieInfo from "./MovieInfo.tsx";

const MovieComponent = () => {
    const {id}  =useParams()
    const [movie, setMovie] = useState<IMovieDetails  | null>(null)
    useEffect(() => {
       if(id) getMovie(id).then(value => setMovie(value))
    },[id])
    if (!movie) {
        return <div>Завантаження...</div>;
    }
    return (
        <div className="movie-details">
            <MovieInfo movie={movie}/>
        </div>
    );
};

export default MovieComponent;