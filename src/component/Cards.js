import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cards({ searchQuery = "" }) { 
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/recipesData");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (data.recipesData) {
          setRecipes(data.recipesData);
        } else if (Array.isArray(data)) {
          setRecipes(data);
        } else {
          throw new Error("Data format is not recognized");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!Array.isArray(recipes) || recipes.length === 0) {
    return <div className="text-center">No recipes found.</div>;
  }

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Delicious Recipes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <Link
              to="/about"
              state={recipe}
              key={recipe.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">
                  {recipe.title.length > 50 
                    ? `${recipe.title.slice(0, 50)}...` 
                    : recipe.title}
                </h2>
                <p className="text-gray-700 font-medium mb-2">
                  Ingredients: {recipe.ingredients.length > 120 
                    ? `${recipe.ingredients.slice(0, 120)}...` 
                    : recipe.ingredients}
                </p>
                <p className="text-gray-800 font-medium">
                  Cooking Time: {recipe.cookingTime} Minutes.
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center">No recipes found for "{searchQuery}"</div>
        )}
      </div>
    </div>
  );
}
