import { useLoaderData } from "react-router-dom";
import ShowBrandCard from "../Components/ShowBrandCard";
import Carousel from "../Components/Slider";


const ShowBrand = () => {
    const data = useLoaderData()
    return (
        <div className="my-24">
            <Carousel></Carousel>
            <h1 className="text-7xl my-11 mt-32 text-center">Our {data.length} products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
                {
                    data?.map(card=> <ShowBrandCard key={data._id} data={card}></ShowBrandCard>)
                }
            </div>
        </div>
    );
};

export default ShowBrand;