import type {IMovie} from "../models/IMovie.tsx";

export const sortMovies = (movies:IMovie[],sortType:string | null)=>{
    const sortedMovies = [...movies];

    if (sortType === "rating+") {
        sortedMovies.sort((a, b) => b.vote_average - a.vote_average);
    }
    if (sortType === "rating-") {
        sortedMovies.sort((a, b) => a.vote_average - b.vote_average);
    }
    if (sortType === "popularity+") {
        sortedMovies.sort((a, b) => b.popularity - a.popularity);
    }
    if (sortType === "popularity-") {
        sortedMovies.sort((a, b) => a.popularity - b.popularity);
    }
    if (sortType === "title+") {
        sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortType === "title-") {
        sortedMovies.sort((a, b) => b.title.localeCompare(a.title));
    }
    return sortedMovies;
}