"use client";

import Image from "next/image";
import { useState } from "react";

import eggs from "../../public/images/Eggs.webp"
import cheese from "../../public/images/Cheese.webp"
import chocolate from "../../public/images/Chocolate Milk.jpg"
import hamburger from "../../public/images/Hamburger.jpg"
import buns from "../../public/images/Buns.webp"
import milk from "../../public/images/Milk.webp"

export default function Home() {
    const mystyle = {
      color: "white",
      padding: "10px",
      textAlign: "center",
    }

    const [groceryItems, setGroceryItems] = useState([{
        name: "buns",
        image: buns,
      
      },
      {
        name: "eggs",
        image: eggs,
      },
      {
        name: "cheese",
        image: cheese,
      },
      {
        name: "chocolate",
        image: chocolate,
      },
      {
        name: "milk",
        image: milk,
      },
      {
        name: "hamburger",
        image: hamburger,
      },
      {
        name: "buns",
        image: buns,
      
      },
      {
        name: "eggs",
        image: eggs,
      },
      {
        name: "cheese",
        image: cheese,
      },
      {
        name: "chocolate",
        image: chocolate,
      },
      {
        name: "milk",
        image: milk,
      },
      {
        name: "hamburger",
        image: hamburger,
      }]);

  return (

    <div className="flex flex-col bg-blue-500 h-full h-screen ">
      <h1 style={mystyle}>Grocery List</h1>
      <input
        type="text"
        placeholder="Enter text here" 
        style={{ padding: "8px", width: "300px" }}
      />
      <div className="flex flex-1 items-start justify-center w-full bg-yellow-500 overflow-auto">
        <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start justify-center max-w-2xl bg-red-500">
          
          {groceryItems.map((groceryItem, index) => (
            <Image key={index}src={groceryItem.image} className="h-64 w-64 object-fill rounded-lg"/>
          ))}

        </div>
      </div>
     

    </div>
  );
}
