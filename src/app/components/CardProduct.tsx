import Image from "next/image";
import React, { useEffect } from "react";
import { Product } from "../../../types";
import ModalProduct from "./ModalProduct";
import useModalState from "../hooks/modal-hook";

interface props {
  Product: Product;
}
const CardProduct = ({ Product }: props) => {
  const { isOpen, setIsOpen } = useModalState();
  const { id, title, images, description, price, creationAt, category } =
    Product;

    useEffect(() => {
      console.log("debug modal");
      
    },[isOpen])


  return (
    <div
      key={id}
      className="product-card bg-white rounded-lg shadow-md flex flex-col justify-between "
      onClick={() => setIsOpen(true)} 
    >
      <Image
        height={224}
        width={310}
        src={images[0]}
        alt={title}
        className="object-cover w-full h-56"
        loading="lazy"
      />
      {isOpen && <ModalProduct Product={Product} modal={isOpen} />}

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-sm">{description.slice(0, 100)}...</p>
        <div className="flex flex-col justify-between items-start mt-4">
          <span className="text-gray-500 text-sm">{category.name}</span>
          <span className="text-indigo-600 font-bold text-lg">
            Price: ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
