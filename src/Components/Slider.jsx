import  { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    fetch('/discount.json')
      .then(res => res.json())
      .then(data => setDiscounts(data))
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 0.3,
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
    <div className="bg-gray-100 p-4">
      <h2 className="md:text-6xl text-2xl font-bold text-center border-b-2 pb-4">Our up coming products !!!</h2>
      <div className="mx-auto max-w-screen-lg">
        <Slider {...settings}>
          {discounts.map(discount => (
            <div key={discount.id} className="p-4">
              <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative h-[300px]">
                  <img
                    className="w-full h-full object-cover"
                    src={discount.img}
                    alt="Product Image"
                  />
                  <div className="absolute top-0 right-0 bg-red-500 text-white p-2 font-semibold rounded-tr-lg rounded-bl-lg">
                    date: {discount.date}
                  </div>
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-xl font-semibold mb-2">{discount.productName}</h3>
                  <span className="text-gray-700 text-base">Price: ${discount?.originalPrice}</span>
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
