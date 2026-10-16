import type {FC} from "react";
import './style/StarsRating.css'

type PropsRatingType ={
    rating: number
}
const StarsRating:FC<PropsRatingType> = ({rating}) => {
    return (
        <div className="rating">
            {rating}
        </div>
    );
};

export default StarsRating;