/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';


const ShowBrandCard = ({ data }) => {

    const { name, brand, price, rating, type, image, _id } = data;
    const [rat] = useState(parseInt(rating));

    return (
        <div className="w-64 md:w-80 bg-base-300 rounded-lg shadow-lg border mx-auto">
            <img src={image} alt="Product Image" className="w-full h-[250px] rounded-t-lg p-3" />

            <div className="p-4 ">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-gray-500">Band Name: {brand}</p>

                <div className="mt-3">
                    <p className="text-gray-700">Type: {type}</p>
                    <p className="text-gray-700">Price: ${price}</p>
                    <div >
                        <StarRatings
                            starDimension="25px"
                            starSpacing="2px"
                            rating={rat}
                            starRatedColor="gold"
                            numberOfStars={5}
                            name="rating"
                        />
                    </div>
                </div>

                <div className="mt-4 flex justify-between">
                    <Link to={`/showBrand/brandDetails/${_id}`} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                        Details
                    </Link>
                    <Link to={`/updateBrand/${_id}`} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none">
                        Update
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShowBrandCard;


ShowBrandCard.propTypes = {
    children: PropTypes.node
}