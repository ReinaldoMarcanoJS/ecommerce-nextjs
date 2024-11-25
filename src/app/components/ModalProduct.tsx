import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Product } from "../../../types";
import Image from "next/image";
import { calculateTimeDifference } from "../libs/datedifference";
import { TbXboxX } from "react-icons/tb";
import useModalState from "@/app/hooks/modal-hook"
import { Slideshow } from "./ui/SliderEffect";
interface props {
  Product: Product;
  modal: boolean;
}

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

const ModalProduct = ({ Product, modal }: props) => {
  const { isOpen, setIsOpen } = useModalState();
  const { id, title, images, description, price, creationAt, category } =
    Product;
  const slideImages = [
      images[0],
      images[1],
      images[2],
  ];

  return (
    <div
      key={id}
      className={
        isOpen 
        ? " fixed max-w-[1290px] w-11/12 h-5/6 flex product-card top-16 left-24 bg-white rounded-lg shadow-md justify-between overlay-container"
        : "hidden"
      }
    >
      <span className="absolute top-1 right-1 "onClick={() => setIsOpen(false)} ><TbXboxX  color="gray" size={30} />
</span>
       <Image
        height={638}
        width={700}
        src={images[0]}
        alt={title}
        className="object-cover w-full h-full max-w-[500px]"
      />
      <div className="p-4">
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="flex flex-col justify-between items-start mt-4">
          <span className="text-gray-700 text-sm">Categoria: <strong>{category.name}</strong></span>
          <span className="text-indigo-600 font-bold text-lg">
            Price: ${price}
          </span>
          <span>Publicado hace {calculateTimeDifference(creationAt)}</span>
        </div>
        
        <div className="flex justify-center">
          <button className="mt-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Añadir al carrito
          </button>
        </div>
        <div className="flex">
                <Image
                  height={400}
                  width={700}
                  src={slideImages[0]}
                  alt={title}
                  className="object-cover w-52 h-52"
                />
                <Image
                height={400}
                width={700}
                src={slideImages[1]}
                alt={title}
                className="object-cover w-52 h-52"
              />
              <Image
              height={400}
              width={700}
              src={slideImages[2]}
              alt={title}
              className="object-cover w-52 h-52"
            />
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
