import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "./MovieSlice.tsx";

export const store = configureStore({
    reducer: {
        movieSlice:movieSlice.reducer
    }
})