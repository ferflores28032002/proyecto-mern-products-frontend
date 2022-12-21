import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { FormImages, FormImagesForId, FormShoes } from "./components/";

import { useProducts, useShoes } from "./hooks";

export const App = () => {
  const { product, products } = useProducts();
  const { shoes, shoess } = useShoes();

  console.log(shoes)
  useEffect(() => {
    shoess();
    product()
  }, []);

  return (
    <div className="container mx-auto">
      <ToastContainer />

      <div className="flex flex-col lg:flex-row justify-center h-screen items-center gap-x-10">
        <div className="max-w-md shadow-2xl p-6">
          <h1>Añadir producto</h1>
          <FormImages />
        </div>

        <div className="max-w-md shadow-2xl p-6 ">
          <h1>Añadir imagen a producto existente</h1>
          <FormImagesForId />
        </div>
      </div>

      <div>
        <div className="max-w-md shadow-2xl p-6 ">
          <h1>Añadir shoes</h1>

          <FormShoes />
        </div>
      </div>

      <div className="mt-10 text-center">
        <h1>Productos</h1>

        {products?.map((pro) => (
          <div key={pro._id} className="border py-6">
            <h1>{pro.name}</h1>
            <h1>{pro._id}</h1>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <h1>Zapatos</h1>

        {shoes?.map((pro) => (
          <div key={pro._id} className="border py-6">
            <h1>{pro.name}</h1>
            <h1>{pro._id}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
