import {useEffect} from "react";
import MoviesListCard from "./MoviesListCard.tsx";
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../slices/MovieSlice.tsx";
import {useForm} from "react-hook-form";
import {sortMovies} from "../services/sort.tsx";
import './style/MovieList.css'

export const MoviesList = () => {
    const [query]=useSearchParams()
    const {movies, sortType,searchMovieText,genres} = useAppSelector(({movieSlice}) => movieSlice);
    const dispatch = useAppDispatch();
    const page = query.get("page")||"1";

    useEffect(() => {
        if (searchMovieText) {
            dispatch(movieSliceActions.searchMovie({
                page,
                searchMovieText
            }));
        } else if (genres !== null) {
            dispatch(movieSliceActions.genreMovie({
                page,
                genreId: genres,
                sortType
            }));
        } else {
            dispatch(movieSliceActions.loadMovies({
                page,
                sortType
            }));
        }
    },[query,dispatch,sortType,searchMovieText,genres])

    const sortedMovies = sortMovies(movies,sortType)

    const {
        register,
        handleSubmit,
    } = useForm<{ nameMovie: string }>({
        mode: "all"
    });

    const customSubmit = (formData: { nameMovie: string }): void => {
        if(formData.nameMovie) {
            dispatch(movieSliceActions.searchMovie({page, searchMovieText: formData.nameMovie}))
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
                    dispatch(movieSliceActions.setSortType("title-"));}}>За алфавітом +</button>

                <div className="genreContainer">
                    <button  className="genreButton">Жанри {'->'}</button>
                    <div className="genres">
                        <button onClick={() => {
                            dispatch(movieSliceActions.setSortGenre(28));
                        }}>Бойовик
                        </button>
                        <button onClick={() => {
                            dispatch(movieSliceActions.setSortGenre(35));
                        }}>Комедія
                        </button>
                        <button onClick={() => {
                            dispatch(movieSliceActions.setSortGenre(12));
                        }}>Пригоди
                        </button>
                        <button onClick={() => {
                            dispatch(movieSliceActions.setSortGenre(27));
                        }}>Жахи
                        </button>
                        <button onClick={() => {
                            dispatch(movieSliceActions.setSortGenre(878));
                        }}>Фантастика
                        </button>
                        <button onClick={() => {
                            dispatch(movieSliceActions.setSortGenre(18));
                        }}>Драма
                        </button>
                        <button onClick={() => {
                            dispatch(movieSliceActions.setSortGenre(null));
                        }}>Усі фільми
                        </button>
                    </div>
                </div>
            </div>
            <div className="movies">{sortedMovies.map(value => <MoviesListCard movie={value}/>)}</div>
        </div>
    );
};