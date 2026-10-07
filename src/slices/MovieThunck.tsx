import {createAsyncThunk} from "@reduxjs/toolkit";
import {getMovies} from "../services/api.service.tsx";

export const loadMovies = createAsyncThunk(
    'movieSlice/loadMovie',
    async (page:string,thunkAPI) => {
        try{
            const movies = await getMovies(page)
            return thunkAPI.fulfillWithValue(movies)
        }catch(e){
            return thunkAPI.rejectWithValue(e)
        }
    }
)

