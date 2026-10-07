import {useEffect} from "react";
import MoviesListCard from "./MoviesListCard.tsx";
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../slices/MovieSlice.tsx";

export const MoviesList = () => {
    const [query,setQuery]=useSearchParams()
    const {movies, sortType} = useAppSelector(({movieSlice}) => movieSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const page = query.get("page");
        if(page)dispatch(movieSliceActions.loadMovies(page));
    },[query,dispatch])
    const sortedMovies = [...movies];

    if (sortType === "rating+") {
        sortedMovies.sort((a, b) => b.vote_average - a.vote_average);
    }

    if (sortType === "rating-") {
        sortedMovies.sort((a, b) => a.vote_average - b.vote_average);
    }

    if (sortType === "popularity+") {
        sortedMovies.sort((a, b) => b.popularity - a.popularity);
    }

    if (sortType === "popularity-") {
        sortedMovies.sort((a, b) => a.popularity - b.popularity);
    }

    if (sortType === "title+") {
        sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortType === "title-") {
        sortedMovies.sort((a, b) => b.title.localeCompare(a.title));
    }
    return (
        <div>
            <div className="filters">
                <button onClick={()=>{
                    dispatch(movieSliceActions.setSortType("rating+"));
                    }}>За рейтингом +</button>

                <button onClick={()=>{
                    dispatch(movieSliceActions.setSortType("rating-"));
                }}>За рейтингом -</button>

                <button onClick={()=>{
                    dispatch(movieSliceActions.setSortType("popularity+"));
                }}>За популярністю +</button>

                <button onClick={()=>{
                    dispatch(movieSliceActions.setSortType("popularity-"));}}>За популярністю -</button>

                <button onClick={()=>{
                    dispatch(movieSliceActions.setSortType("title+"));}}>За алфавітом +</button>

                <button onClick={()=>{
                    dispatch(movieSliceActions.setSortType("title-"));}}>За алфавітом +</button>
            </div>
            <div>{sortedMovies.map(value => <MoviesListCard movie={value}/>)}</div>
        </div>
    );
};