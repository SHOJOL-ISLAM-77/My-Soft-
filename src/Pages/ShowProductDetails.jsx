import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const ShowProductDetails = () => {

    const { user } = useContext(AuthContext)
    const detailsData = useLoaderData();
    const { name, brand, type, shortDescription, rating, image, price } = detailsData;
    const [rat] = useState(parseInt(rating));
    const userName = user.displayName;


    const handleAddToCart = () => {

        const cartData = { name, brand, type, shortDescription, rating, image, userName, price }

        fetch('https://mysoft-server-side.vercel.app/cartData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Product add successfully!',
                        'success'
                    )
                }
            })
    }

    return (
        <div className="my-36 mx-4  border-4 border-yellow-400 rounded-2xl">
            <div>
                <div className="flex justify-between flex-col lg:flex-row gap-5">

                    <div className="flex items-center gap-3 flex-col sm:flex-row">
                        <img className="lg:h-[500px] md:max-w-sm max-w-[250px] border-r-4 border-none" src={image} alt="" />
                        
                        <div className="inline lg:hidden ">
                            <h3 className="md:text-xl">Product Name: <span className="font-semibold underline">{name}</span></h3>
                            <p className="md:text-lg">Brand: <span className="font-semibold underline">{brand}</span></p>
                            <div>
                                <StarRatings
                                    starDimension="25px"
                                    rating={rat}
                                    starRatedColor="gold"
                                    numberOfStars={5}
                                    name="rating"
                                />
                            </div>
                            <p className="md:text-xl text-lg">Price: <span className="font-semibold ">$ {price}</span></p>
                            <p className="md:text-xl text-lg">Type: <span className="font-semibold underline">{type}</span></p>
                        </div>
                    </div>
                    <div className="flex-1 flex-grow my-10 flex flex-col gap-6">
                        <div className="lg:inline hidden ">
                            <h3 className="xl:text-5xl lg:text-3xl">Product Name: <span className="font-semibold underline">{name}</span></h3>
                            <p className="lg:text-3xl ">Brand: <span className="font-semibold underline">{brand}</span></p>
                            <div>
                                <StarRatings
                                    starDimension="45px"
                                    rating={rat}
                                    starRatedColor="gold"
                                    numberOfStars={5}
                                    name="rating"
                                />
                            </div>
                            <p className="xl:text-3xl md:text-2xl">Price: <span className="font-semibold ">$ {price}</span></p>
                            <p className="xl:text-3xl md:text-2xl">Type: <span className="font-semibold underline">{type}</span></p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold ">About this product:</h3>
                            <p className="xl:text-md text-justify xl:p-8 p-4"> {shortDescription}</p>
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