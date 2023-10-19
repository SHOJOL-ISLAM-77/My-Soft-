/* eslint-disable react/prop-types */
import { useState } from "react";
import StarRatings from "react-star-ratings";

const CartCard = ({ data }) => {
    const { name, image, price, rating } = data;

    const [rat] = useState(parseInt(rating));

    return (
        <div className=" md:w-[336px] text-center lg:w-[300px] xl:w-[336px] bg-white box-border p-5 rounded-lg shadow-2xl max-h-[500px]">
            <div className=" bg-gray-100 rounded-lg">
                <img className="mx-auto  px-3 py-10" src={image} alt="" />
            </div>
            <div className="pt-5">
                <p className="text-xl font-semibold">Name: {name}</p>
                <StarRatings
                    starDimension="25px"
                    starSpacing="2px"
                    rating={rat}
                    starRatedColor="gold"
                    numberOfStars={5}
                    name="rating"
                />
                <p className="text-xl text-gray-400">Price: {price}</p>
            </div>
        </div>
    );
};

export default CartCard;