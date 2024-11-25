"use client";
import React, { useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Product } from "../../../types";
import CardProduct from "../components/CardProduct";

const Dashboard = () => {
  const [products, setProducts] = React.useState<Product[]>([]); // Initialize state with empty array


  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products/?price_min=10&price_max=1000&offset=10&limit=10"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
        // Update state with fetched products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    getProducts(); // Call getProducts on component mount
  }, []);

  return (
    <div className="container pl-24 pr-4 bg-black/30 min-h-screen">
      <section className="flex h-14 justify-between px-14 items-center border-b">
        <h1 className="font-semibold">Tucompraonline</h1>
        <div className="flex gap-3">
          <input
            type="text"
            className="w-96 h-9 bg-white border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
          />
          <CiShoppingCart size={35} />
        </div>
      </section>

      <div key={"grid"} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
        {products.map(( product: Product, i) => {
          return <CardProduct key={i} Product={product} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
