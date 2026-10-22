import {MoviesList} from "../components/MoviesList.tsx";
import PaginationComponent from "../components/pagination/PaginationComponent.tsx";
import './page-styles/MoviesPage.css'
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {movieSliceActions} from "../slices/MovieSlice.tsx";


const MoviesPage = () => {
    const [query]=useSearchParams()
    const {movies, sortType,searchMovieText,genres,loading, error} = useAppSelector(({movieSlice}) => movieSlice);
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
    },[page,dispatch,sortType,searchMovieText,genres])
    return (
        <div className="MoviesPage">
            <PaginationComponent/>
            {loading && <p>Завантаження фільмів...</p>}
            {error && <p>Помилка: {error}</p>}
            <MoviesList movies={movies} sortType={sortType} />
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;