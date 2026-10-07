import type {FC} from "react";

type PropsRatingType ={
    rating: number
}
const StarsRating:FC<PropsRatingType> = ({rating}) => {
    return (
        <div>
            {rating}
        </div>
    );
};

export default StarsRating;