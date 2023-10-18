import { useEffect, useState } from "react"


function OurBrand() {
    const [brands, setBrands] = useState([]);

    useEffect(()=>{
        fetch('brand.json')
        .then(res=>res.json())
        .then(data=> setBrands(data))
    },[])
    return (
        <div className="my-20 relative z-0">
            <h2 className='text-4xl md:text-6xl text-center font-extrabold'>Our Brands </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 gap-10">
                {
                    brands.map(brand=> <div className="card xl:w-96 w-3/4 mx-auto  shadow-2xl border cursor-pointer" key={brand.id}>
                        <figure><img className="h-[200px]" src={brand.image} alt="" /></figure>
                        <div className="card-body">
                        <h3 className="text-3xl font-medium text-center">{brand.name}</h3>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default OurBrand
