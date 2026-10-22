import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import MoviesPage from "../pages/MoviesPage.tsx";
import MoviePage from "../pages/MoviePage.tsx";
import HomePage from "../pages/HomePage.tsx";

export const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>,
        children: [
            {path: '', element: <HomePage/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: 'movies/:id', element:<MoviePage/>}
        ]
    }
])