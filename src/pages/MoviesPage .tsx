import {MoviesList} from "../components/MoviesList.tsx";
import PaginationComponent from "../components/pagination/PaginationComponent.tsx";


const MoviesPage = () => {
    return (
        <div>
            <PaginationComponent/>
            <MoviesList/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;