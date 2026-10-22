import MoviesListCard from "./MoviesListCard.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../slices/MovieSlice.tsx";
import {useForm} from "react-hook-form";
import './style/MovieList.css'
import type {IMovie} from "../models/IMovie.tsx";
import {type FC, useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useSearchParams} from "react-router-dom";

type MoviesListProps = {
    movies: IMovie[];
    sortType: "rating+" | "rating-" | "popularity+" |
        "popularity-" | "title+" | "title-" | null;
};

export const MoviesList:FC<MoviesListProps> = ({ movies}) => {
    const [query, setQuery] = useSearchParams();
    const {genresList} = useAppSelector(({ movieSlice }) => movieSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(movieSliceActions.loadGenres());
    }, [dispatch]);

    const {
        register,
        handleSubmit,
        reset
    } = useForm<{ nameMovie: string }>({
        mode: "all"
    });

    const customSubmit = (formData: { nameMovie: string }): void => {
        const nameMovie = formData.nameMovie.trim();
        if(formData.nameMovie) {
            dispatch(movieSliceActions.setSearch(nameMovie))
            setQuery({ page: "1" });
        }else{
            alert("Будь ласка, введіть назву фільму!")
        }
    }

    return (
        <div className="MoviesList">
            <div className="findform">
                <form onSubmit={handleSubmit(customSubmit)} className="searchForm">
                    <input type="text" {...register("nameMovie")} placeholder="Назва фільму"
                           className="searchForm__input"/>
                    <button type="submit" className="searchButton">Пошук</button>
                </form>
                <button onClick={() => {
                    dispatch(movieSliceActions.setSearch(""));
                    setQuery({page: "1"});
                    reset({nameMovie: ""});
                }} className="cleanButton">Скинути пошук
                </button>
            </div>

            <div className="filters">
                <button onClick={()=>{
                    dispatch(movieSliceActions.setSortType("rating+"));
                    setQuery({ page: "1" });
                    }}>За рейтингом +</button>

                <button onClick={()=>{
                    dispatch(movieSliceActions.setSortType("rating-"));
                    setQuery({ page: "1" });
                }}>За рейтингом -</button>

                <button onClick={()=>{
                    dispatch(movieSliceActions.setSortType("popularity+"));
                    setQuery({ page: "1" });
                }}>За популярністю +</button>

                <button onClick={()=>{
                    dispatch(movieSliceActions.setSortType("popularity-"));
                    setQuery({ page: "1" });
                }}>За популярністю -
                </button>

                <button onClick={()=>{
                    dispatch(movieSliceActions.setSortType("title+"));
                    setQuery({ page: "1" });
                }}>За алфавітом +
                </button>

                <button onClick={()=>{
                    dispatch(movieSliceActions.setSortType("title-"));
                    setQuery({ page: "1" });
                }}>За алфавітом -
                </button>

                <div className="genreContainer">
                    <button  className="genreButton">Жанри {'->'}</button>
                    <div className="genres">
                        {genresList.map(genre => (
                            <button key={genre.id} onClick={() => {
                                dispatch(movieSliceActions.setSortGenre(genre.id));
                                setQuery({ page: "1" });
                            }}>{genre.name}
                            </button>
                        ))}
                        <button onClick={() => {
                            dispatch(movieSliceActions.setSortGenre(null));
                            setQuery({ page: "1" });
                        }}>Усі фільми
                        </button>
                    </div>
                </div>
            </div>
            <div className="movies">{movies.map(value => <MoviesListCard key={value.id} movie={value}/>)}</div>
        </div>
    );
};