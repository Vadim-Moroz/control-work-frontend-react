import type {FC} from "react";

type PropsPosterType={
    image:string
}
const PosterPreview:FC<PropsPosterType> = ({image}) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="Movie poster"/>
        </div>
    );
};

export default PosterPreview;