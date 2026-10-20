import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import MoviesPage from "../pages/MoviesPage.tsx";
import MoviePage from "../pages/MoviePage.tsx";

export const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>,
        children: [
            {path: 'movies', element: <MoviesPage/>},
            {path: 'movies/:id', element:<MoviePage/>}
        ]
    }
])