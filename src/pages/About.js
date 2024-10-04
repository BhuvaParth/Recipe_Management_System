import React from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();
  const recipe = location.state;
  if (!recipe) {
    return <div className="text-center">No recipe data found.</div>;
  }
  return (
    <div className="max-w-screen-xl w-full flex flex-col gap-4 mx-auto px-4 py-8">
      <div className="flex justify-end items-center gap-2 top-4 right-4 space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Edit
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          Delete
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-80 max-w-80 min-w-80 mb-6 lg:mb-0">
          <div className="min-w-[320px] max-w-[320px] min-h-[320px] max-h-[320px]">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-auto h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="lg:w-2/2 max-w-2/2 lg:pl-8 max-h-[320px] min-h-[320px]">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-4">{recipe.description}</p>
          <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
          <p className="text-gray-700 mb-4">{recipe.ingredients}</p>
          <p className="text-gray-500 mb-2">{recipe.cookingtime}</p>
          <p className="text-gray-500 text-lg font-bold mb-2">
            Price: ${recipe.price}
          </p>
        </div>
      </div>
    </div>
  );
}
