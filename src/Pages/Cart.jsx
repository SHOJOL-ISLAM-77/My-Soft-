import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import StarRatings from "react-star-ratings";



function Cart() {

  const data = useLoaderData()

  const [deleteData, setDeleteData] = useState(data);

  const totalPrice = deleteData.reduce((total, card) => total + parseInt(card.price), 0);

  const showSuccess = () => {
    Swal.fire(
      'Good job!',
      'Product add successfully!',
      'success'
    )
  }
  console.log(deleteData);


  const handleDelete = (id) => {
    fetch(`https://mysoft-server-side.vercel.app/cartData/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire(
      'Good job!',
      'Product add successfully!',
      'success'
    )
        const filter = deleteData.filter((item) => item._id !== id);
        setDeleteData(filter)
      });

  }
  return (
    <div className="grid grid-cols-4  my-10 mt-40 gap-10">
      <div className="col-span-4 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 gap-y-8 lg:gap-10">
        {
          deleteData.map(card => <div key={card._id} className="mx-auto md:w-[300px] text-center lg:w-[300px] xl:w-[336px] bg-base-300 box-border p-5 rounded-lg max-h-[500px]">
            <div className="  bg-base-300 rounded-lg">
              <img className="mx-auto lg:w-80 h-[300px]  lg:px-3 py-10" src={card.image} alt="" />
            </div>
            <div className="pt-5">
              <p className="text-xl font-semibold">Name: {card.name}</p>
              <StarRatings
                starDimension="25px"
                starSpacing="2px"
                rating={parseInt(card.rating)}
                starRatedColor="gold"
                numberOfStars={5}
                name="rating"
              />
              <p className="text-xl text-gray-400">Price: {card.price}</p>
            </div>
            <button className="btn btn-outline " onClick={() => handleDelete(card._id)}>DELETE</button>
          </div>)
        }
      </div>

      <div className="col-span-4 lg:col-span-1">
        <div className="box-border p-6 rounded-lg border-2 shadow-2xl max-w-[500px] mx-auto">
          <hr />
          <div className="py-8">
            <p className="text-2xl font-medium leading-[48px]">Total price: ${totalPrice}<span className="text-gray-400"></span>
            </p>
          </div>
          <hr />
          <div className="text-center">
            <button onClick={showSuccess} className="font-semibold py-4 px-[72px] bg-[#E527B2] rounded-lg text-white mt-5 relative top-12">Make
              Purchase</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
