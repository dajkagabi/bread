import React, { useState } from "react";
import edes from "../../assets/edes-kartya.jpg";
import sos from "../../assets/sos-kartya.jpg";

import brownies from "../../assets/Edes/brownies.jpg";
import churros from "../../assets/Edes/churros.jpg";
import cookie from "../../assets/Edes/cookie.jpg";
import croissant from "../../assets/Edes/croissant.jpg";
import fahcsiga from "../../assets/Edes/fahejas-csiga.jpg";
import gyumfank from "../../assets/Edes/gyumolcslekvaros-fank.jpg";
import pudcsiga from "../../assets/Edes/pudingos-csiga.jpg";

import sajtos from "../../assets/Sos/sajtos.jpg";
import hamburgerZsemle from "../../assets/Sos/hamburger-zsemle.jpg";
import klasszikusKenyer from "../../assets/Sos/klasszikus.jpg";
import multigrainKenyer from "../../assets/Sos/multigrain.jpg";
import rozsKenyer from "../../assets/Sos/rozs-kenyer.jpg";
import rusztikusKifli from "../../assets/Sos/rusztikus.jpg";
import szendvicsKifli from "../../assets/Sos/szendvics-kifli.jpg";
import tonkolyKenyer from "../../assets/Sos/tonkoly-kenyer.jpg";

const allProducts = [
  { name: "Brownie", category: "Édes", price: "750 Ft", image: brownies },
  { name: "Churros", category: "Édes", price: "680 Ft", image: churros },
  { name: "Csokis keksz", category: "Édes", price: "400 Ft", image: cookie },
  { name: "Croissant", category: "Édes", price: "550 Ft", image: croissant },
  { name: "Fahéjas csiga", category: "Édes", price: "420 Ft", image: fahcsiga },

  {
    name: "Gyümölcslekváros fánk",
    category: "Édes",
    price: "350 Ft",
    image: gyumfank,
  },
  {
    name: "Pudingos csiga",
    category: "Édes",
    price: "420 Ft",
    image: pudcsiga,
  },

  { name: "Sajtos kenyér", category: "Sós", price: "320 Ft", image: sajtos },

  {
    name: "Hamburger zsemle",
    category: "Sós",
    price: "280 Ft",
    image: hamburgerZsemle,
  },
  {
    name: "Klasszikus kenyér",
    category: "Sós",
    price: "950 Ft",
    image: klasszikusKenyer,
  },
  {
    name: "Multigrain kenyér",
    category: "Sós",
    price: "1200 Ft",
    image: multigrainKenyer,
  },
  { name: "Rozs kenyér", category: "Sós", price: "1100 Ft", image: rozsKenyer },
  {
    name: "Rusztikus kifli",
    category: "Sós",
    price: "180 Ft",
    image: rusztikusKifli,
  },
  {
    name: "Szendvics kifli",
    category: "Sós",
    price: "250 Ft",
    image: szendvicsKifli,
  },
  {
    name: "Tönköly kenyér",
    category: "Sós",
    price: "1050 Ft",
    image: tonkolyKenyer,
  },
];



const categories = [
  {
    name: "Édes",

    image: edes,
  },
  {
    name: "Sós",

    image: sos,
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? allProducts.filter((product) => product.category === selectedCategory)
    : [];

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleGoBack = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-25 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Válasszon kategóriát
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Kattintson az egyik kártyára a keresés elindításához.
        </p>
      </div>

      {selectedCategory === null ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => handleSelectCategory(category.name)}
            >
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity"></div>
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 p-8 w-full text-white">
                <h3 className="text-3xl font-bold mb-2">{category.name}</h3>
                <p className="text-lg opacity-90">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-7xl mx-auto">
          <button
            onClick={handleGoBack}
            className="mb-6 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition-colors"
          >
             Vissza a kategóriákhoz
          </button>

          <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
            {selectedCategory} Termékek
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {product.name}
                  </h4>
                  <p className="text-gray-600 mt-2">Ár: {product.price}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 text-xl col-span-full">
                Sajnáljuk, ebben a kategóriában nincsenek termékek.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
