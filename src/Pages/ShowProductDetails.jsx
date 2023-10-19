import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ShowProductDetails = () => {

    const detailsData = useLoaderData();
    console.log(detailsData);
    const { name, brand, type, shortDescription, rating, image } = detailsData;

    const [rat] = useState(parseInt(rating));


    const handleAddToCart = () => {

    }

    return (
        <div className="my-36  border-4 border-yellow-400 rounded-2xl">
            <div>
                <div className="flex justify-between gap-5">
                    <img className="h-[500px] border-r-4 border-yellow-400" src={image} alt="" />
                    <div className="flex-1 my-10 flex flex-col gap-6">
                        <h3 className="text-5xl ">Product Name: <span className="font-semibold underline">{name}</span></h3>
                        <p className="text-3xl ">Brand: <span className="font-semibold underline">{brand}</span></p>
                        <div>
                            <StarRatings
                                rating={rat}
                                starRatedColor="gold"
                                numberOfStars={5}
                                name="rating"
                            />
                        </div>
                        <p className="text-3xl ">Type: <span className="font-semibold underline">{type}</span></p>
                        <div>
                            <h3 className="text-xl font-bold ">About this product:</h3>
                            <p className="text-md text-justify p-8"> {shortDescription}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center my-6 ">
                    <button onClick={handleAddToCart} className="btn btn-outline btn-warning btn-wide">Add to Cart</button>
                </div>

            </div>
        </div>
    );
};

export default ShowProductDetails;