import { useLoaderData } from "react-router-dom";
import CartCard from "../Components/cartCard";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";



function Cart() {

  const data = useLoaderData()

  const totalPrice = data.reduce((total, card) => total + parseInt(card.price), 0);
  const showSuccess = () => {
    Swal.fire(
      'Good job!',
      'Product add successfully!',
      'success'
    )
  }
  return (
    <div className="grid grid-cols-4  my-10 mt-40">
      <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
          data.map(card => <CartCard key={card?._id} data={card}></CartCard>)
        }
      </div>

      <div>
        <div className="box-border p-6 rounded-lg border-2 shadow-2xl">

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
