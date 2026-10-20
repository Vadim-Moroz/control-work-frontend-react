import MoviesListCard from "./MoviesListCard.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../slices/MovieSlice.tsx";
import {useForm} from "react-hook-form";
import {sortMovies} from "../services/sort.tsx";
import './style/MovieList.css'
import type {IMovie} from "../models/IMovie.tsx";
import {type FC, useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";

type MoviesListProps = {
    movies: IMovie[];
    sortType: "rating+" | "rating-" | "popularity+" |
        "popularity-" | "title+" | "title-" | null;
};

export const MoviesList:FC<MoviesListProps> = ({ movies, sortType}) => {
    const {genresList} = useAppSelector(({ movieSlice }) => movieSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(movieSliceActions.loadGenres());
    }, [dispatch]);
    const sortedMovies = sortMovies(movies,sortType)

    const {
        register,
        handleSubmit,
    } = useForm<{ nameMovie: string }>({
        mode: "all"
    });

    const customSubmit = (formData: { nameMovie: string }): void => {
        const nameMovie = formData.nameMovie.trim();
        if(formData.nameMovie) {
            dispatch(movieSliceActions.setSearch(nameMovie))
        }else{
            alert("Будь ласка, введіть назву фільму!")
        }
    }

    return (
        <div className="MoviesList">
            <form onSubmit={handleSubmit(customSubmit)} className="searchForm">
                <input type="text" {...register("nameMovie")} placeholder="Назва фільму" className="searchForm__input" />
                <button type="submit" className="searchButton">Пошук</button>
            </form>
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
                    dispatch(movieSliceActions.setSortType("title-"));}}>За алфавітом -</button>

                <div className="genreContainer">
                    <button  className="genreButton">Жанри {'->'}</button>
                    <div className="genres">
                        {genresList.map(genre => (
                            <button key={genre.id} onClick={() => {
                                dispatch(movieSliceActions.setSortGenre(genre.id));
                            }}>{genre.name}
                            </button>
                        ))}
                        <button onClick={() => {
                            dispatch(movieSliceActions.setSortGenre(null));
                        }}>Усі фільми
                        </button>
                    </div>
                </div>
            </div>
            <div className="movies">{sortedMovies.map(value => <MoviesListCard key={value.id} movie={value}/>)}</div>
        </div>
    );
};