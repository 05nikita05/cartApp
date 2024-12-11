import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
const Cart = () => {
  const { cart, cartTotal, removeFromCart } = useContext(CartContext);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Your Cart</h2>
      <div className="mt-4">
        {cart.map((item) => (
        //   <div key={item._id} className="flex justify-between items-center mb-2">
        //     <div>
        //       <h3>{item.name}</h3>
        //       <p>${item.price}</p>
        //     </div>
        //     <button
        //       onClick={() => removeFromCart(item._id)}
        //       className="bg-red-500 text-white px-2 py-1 rounded"
        //     >
        //       Remove
        //     </button>
        //   </div>
        <div className="border p-4 rounded shadow-md bg-cyan-300">
      <h3 className="text-lg font-bold">{item.name}</h3>
      <p>Price: Rs.{item.price}</p>
      <button
        onClick={() =>  removeFromCart(item._id)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Remove from cart
      </button>
    </div>
        ))}
      </div>
      <div className="mt-4">
        <h3>Total: Rs.{cartTotal}</h3>
      </div>
    </div>
  );
};

export default Cart;
