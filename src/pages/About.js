import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function About() {
  const location = useLocation();
  const navigate = useNavigate();  
  const recipe = location.state;

  const handleEdit = () => {
    navigate("/editrecipe", { state: recipe });
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/recipesData/${recipe.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        navigate("/");
      } else {
        console.error("Failed to delete the recipe");
      }
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  if (!recipe) {
    return <div className="text-center">No recipe data found.</div>;
  }

  return (
    <div className="max-w-screen-xl w-full flex flex-col gap-4 mx-auto px-4 py-8 ">
      <div className="flex flex-col md:flex-row justify-between md:justify-end items-center gap-2 mb-4">
        <div className="flex justify-center w-full md:w-auto">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            onClick={handleEdit} 
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition ml-2"
            onClick={handleDelete} 
          >
            Delete
          </button>
        </div>
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
          <p className="text-gray-700 mb-4">About : {recipe.description}</p>
          <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
          <p className="text-gray-700 mb-4">{recipe.ingredients}</p>
          <p className="text-gray-500 mb-2">Cooking Time: {recipe.cookingTime}</p>
          <p className="text-gray-500 text-lg font-bold mb-2">
            Price: ${recipe.price}
          </p>
        </div>
      </div>
    </div>
  );
}
