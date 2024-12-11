import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/cartContext";
import ItemCard from "./ItemCard"; 

const MarketPlace = () => {
  const [items, setItems] = useState([]); 

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://crudcrud.com/api/44b03477ae7940cca2e1f10d7b1360e5/marketplace"); 
        const data = await response.json();
        setItems(data); 
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems(); // Fetch items when the component mounts
  }, []); // Empty dependency array ensures the request is made only once

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {items.map((item) => (
        <ItemCard key={item._id} data={item} /> // Pass item data to ItemCard
      ))}
    </div>
  );
};

export default MarketPlace;
