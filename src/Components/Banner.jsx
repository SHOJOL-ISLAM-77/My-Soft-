

function Banner() {
    return (
        <div className="flex items-center justify-around text-center flex-col-reverse md:flex-row gap-3 py-5"> 
            <img className="md:w-1/2" src="https://i.ibb.co/ZTnx4nz/pngwing-com-3.png" alt="" />
            <div>
                <h1 className="sm:text-4xl text-3xl lg:text-7xl font-bold">Make Sure You Use Our Brands!!</h1>
                <br />
                <button className="btn  sm:btn-sm md:btn-md lg:btn-lg btn-outline min-w-[150px]">
                    Go
                </button>
            </div>
        </div>
    )
}

export default Banner
