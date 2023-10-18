import { useLoaderData } from "react-router-dom";


const ShowBrand = () => {
    const data = useLoaderData()
    return (
        <div className="my-24">
            <h1 className="text-7xl">data = {data.length}</h1>
        </div>
    );
};

export default ShowBrand;