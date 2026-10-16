import {MoviesList} from "../components/MoviesList.tsx";
import PaginationComponent from "../components/pagination/PaginationComponent.tsx";
import './page-styles/MoviesPage.css'


const MoviesPage = () => {
    return (
        <div className="MoviesPage">
            <PaginationComponent/>
            <MoviesList/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;