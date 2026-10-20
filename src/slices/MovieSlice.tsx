import type {IGenre, IMovie} from "../models/IMovie.tsx";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {genreMovie, loadGenres, loadMovies, searchMovie} from "./MovieThunck.tsx";

type movieSliceType = {
    movies:IMovie[],
    sortType: "rating+" | "rating-" | "popularity+" | "popularity-" | "title+" | "title-" | null;
    searchMovieText: string;
    genres: number | null;
    genresList: IGenre[];
    loading: boolean;
    error: string | null;
}

const initisialState:movieSliceType={movies:[],sortType:null,searchMovieText:"",genres:null,genresList:[],loading:false,error:null};
export const movieSlice = createSlice({
    name:"movieSlice",
    initialState:initisialState,
    reducers:{
        setSortType: (state, action: PayloadAction<movieSliceType["sortType"]>) => {
            state.sortType = action.payload;
        },
        setSearch:(state, action: PayloadAction<movieSliceType["searchMovieText"]>) => {
            state.searchMovieText = action.payload;
        },
        setSortGenre:(state, action: PayloadAction<movieSliceType["genres"]>) => {
            state.genres = action.payload;
        }
    },
    extraReducers:builder => builder
        .addCase(loadMovies.fulfilled, (state, action:PayloadAction<IMovie[]>)=>{
            state.movies = action.payload
            state.loading = false
            state.error = null
        })
        .addCase(searchMovie.fulfilled, (state, action:PayloadAction<IMovie[]>)=>{
            state.movies = action.payload
            state.loading = false
            state.error = null
        })
        .addCase(genreMovie.fulfilled, (state, action:PayloadAction<IMovie[]>)=>{
            state.movies = action.payload
            state.loading = false
            state.error = null
        })
        .addCase(loadMovies.rejected, (state, action)=>{
            state.loading = false
            state.error=action.error.message ?? "Не вдалося завантажити фільми"
        }).
        addCase(searchMovie.rejected, (state, action)=>{
            state.loading = false
            state.error=action.error.message ?? "Не вдалося знайти фільм за назвою"
        })
        .addCase(genreMovie.rejected, (state, action)=>{
            state.loading = false
            state.error=action.error.message ?? "Не вдалося відсортувати фільми за жанром"
        })
        .addCase(loadGenres.fulfilled, (state, action) => {
            state.genresList = action.payload;
        })

});
export const movieSliceActions = {
    ...movieSlice.actions,loadMovies,searchMovie,genreMovie,loadGenres
}