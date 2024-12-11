import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const ItemCard = ({ data }) => {
  const { addToCart } = useContext(CartContext); // Use the context here to get the function

  return (
    <div className="border rounded shadow-md p-4 flex flex-col items-center">
      <img src={data.image} alt={data.name} className="w-32 h-32 object-cover" />
      <h3 className="text-lg font-semibold mt-2">{data.name}</h3>
      <p className="text-gray-600">Price: Rs.{data.price}</p>
      <button
        onClick={() => addToCart(data)} // Directly call addToCart here
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;
