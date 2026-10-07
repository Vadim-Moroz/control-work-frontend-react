import type {FC} from "react";

type PropsGenreType ={
    genreId:number
}

const GenreBadge:FC<PropsGenreType> = ({genreId}) => {
    return (
        <div>
            {genreId}
        </div>
    );
};

export default GenreBadge;