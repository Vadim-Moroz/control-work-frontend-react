import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {IMovie} from "../models/IMovie.tsx";
import {getMovie} from "../services/api.service.tsx";

const MovieComponent = () => {
    const {id}  =useParams()
    const [movie, setMovie] = useState<IMovie | null>(null)
    useEffect(() => {
       if(id) getMovie(id).then(value => setMovie(value))
    },[id])
    return (
        <div>
            {movie?.overview}
        </div>
    );
};

export default MovieComponent;