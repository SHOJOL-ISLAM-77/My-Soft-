/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';


const ShowBrandCard = ({ data }) => {

    const { name, brand, price, rating, type, image } = data;
    return (
        <div className="w-64 bg-white rounded-lg shadow-lg border mx-auto">
            <img src={image} alt="Product Image" className="w-full h-[250px] rounded-t-lg" />

            <div className="p-4 ">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-gray-500">Band Name: {brand}</p>

                <div className="mt-3">
                    <p className="text-gray-700">Type: {type}</p>
                    <p className="text-gray-700">Price: ${price}</p>
                    <p className="text-gray-700">Rating: {rating}</p>
                </div>

                <div className="mt-4 flex justify-between">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                        Details
                    </button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none">
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowBrandCard;


ShowBrandCard.propTypes = {
    children: PropTypes.node
}