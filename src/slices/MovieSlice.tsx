import type {IMovie} from "../models/IMovie.tsx";
import {createSlice, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import {genreMovie, loadMovies, searchMovie} from "./MovieThunck.tsx";

type movieSliceType = {
    movies:IMovie[],
    sortType: "rating+" | "rating-" | "popularity+" | "popularity-" | "title+" | "title-" | null;
    searchMovieText: string;
    genres: number | null;
}

const initisialState:movieSliceType={movies:[],sortType:null,searchMovieText:"",genres:null};
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
        })
        .addCase(searchMovie.fulfilled, (state, action:PayloadAction<IMovie[]>)=>{
            state.movies = action.payload
        })
        .addCase(genreMovie.fulfilled, (state, action:PayloadAction<IMovie[]>)=>{
            state.movies = action.payload
        })
        .addCase(loadMovies.rejected, (state, action)=>{
            console.log(state)
            console.log(action)
        })
        .addMatcher(isRejected(loadMovies),(state)=>{
            console.log(state);
        })

});
export const movieSliceActions = {
    ...movieSlice.actions,loadMovies,searchMovie,genreMovie
}