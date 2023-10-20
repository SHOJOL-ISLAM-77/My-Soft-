/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ details }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-gray-100 mx-4">
            <h2 className="text-6xl font-bold text-center border-b-2 pb-4">Discounts !!!</h2>
            <div className="mx-auto max-w-screen-lg px-6">
                <Slider {...settings}>
                    {details?.slice(0,5)?.map(discount => (
                        <div key={discount._id} className=" p-4 cursor-pointer">
                            <div className="max-w-sm mx-auto bg-white h-96 shadow-lg rounded-lg overflow-hidden">
                                <div className="relative h-[300px]">
                                    <img
                                        className=" h-full w-full m-auto"
                                        src={discount.image}
                                        alt="Product Image"
                                    />
                                    <div className="absolute top-0 right-0 bg-red-500 text-white p-2 font-semibold rounded-tr-lg rounded-bl-lg">
                                        Go for discount
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Carousel;