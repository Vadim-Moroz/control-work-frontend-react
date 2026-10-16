import {createAsyncThunk} from "@reduxjs/toolkit";
import {getGenre, getMovies, searchMovies} from "../services/api.service.tsx";

export const loadMovies = createAsyncThunk(
    'movieSlice/loadMovie',
    async ({page,sortType}:{page: string,sortType:string | null},thunkAPI) => {
        try{
            const movies = await getMovies(page,sortType)
            return thunkAPI.fulfillWithValue(movies)
        }catch(e){
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async ({page,searchMovieText}:{page: string,searchMovieText:string},thunkAPI) => {
        try{
            const movies = await searchMovies(page,searchMovieText)
            return thunkAPI.fulfillWithValue(movies)
        }catch(e){
            return thunkAPI.rejectWithValue(e)
        }
    }
)
export const genreMovie = createAsyncThunk(
    'movieSlice/genreMovie',
    async ({page,genreId,sortType}:{page: string,genreId:number,sortType:string | null},thunkAPI) => {
        try{
            const movies = await getGenre(page,genreId,sortType)
            return thunkAPI.fulfillWithValue(movies)
        }catch(e){
            return thunkAPI.rejectWithValue(e)
        }
    }
)

