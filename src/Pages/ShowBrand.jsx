import { Link, useLoaderData } from "react-router-dom";
import ShowBrandCard from "../Components/ShowBrandCard";
import Carousel from "../Components/ShowBrandSlider";


const ShowBrand = () => {
    const data = useLoaderData()
    return (
        <div className="my-24">
            {
                data.length > 0 ? <div>
                    <Carousel details={data}></Carousel>
                    <h1 className="text-2xl md:text-7xl my-11 mt-32 text-center">Our {data.length} products</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
                        {
                            data?.map(card => <ShowBrandCard key={card._id} data={card}></ShowBrandCard>)
                        }
                    </div>
                </div> : <div className="h-[450px] text-center">
                    <h1 className="text-7xl my-7 mt-32 text-center">Search No Result</h1>

                    <p className="text-xl">We are sorry. I will add products very soon</p>
                    <Link to="/"><button className="btn btn-primary my-10">Go Home</button></Link>

                </div>
            }
        </div>
    );
};

export default ShowBrand;