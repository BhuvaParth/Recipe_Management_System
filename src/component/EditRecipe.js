import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditRecipe() {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state;

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
    ingredients: "",
    cookingTime: "", 
    price: "",
  });

  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (recipe) {
      setFormData({
        image: recipe.image || "",
        title: recipe.title || "",
        description: recipe.description || "",
        ingredients: recipe.ingredients || "",
        cookingTime: recipe.cookingtime || "", 
        price: recipe.price || "",
      });
    }
  }, [recipe]);

  const validate = () => {
    const newErrors = {};

    if (!formData.image) {
      newErrors.image = "Image URL is required.";
    } 

    if (!formData.title) {
      newErrors.title = "Title is required.";
    } else if (formData.title.length < 3 || formData.title.length > 50) {
      newErrors.title = "Title must be between 3 and 50 characters.";
    }

    if (!formData.description) {
      newErrors.description = "Description is required.";
    } else if (formData.description.length < 10 || formData.description.length > 350) {
      newErrors.description = "Description must be between 10 and 350 characters.";
    }

    if (!formData.ingredients) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (formData.ingredients.length < 5 || formData.ingredients.length > 200) {
      newErrors.ingredients = "Ingredients must be between 5 and 200 characters.";
    }

    if (!formData.cookingTime) {
      newErrors.cookingTime = "Cooking time is required.";
    } else if (formData.cookingTime < 5 || formData.cookingTime > 200) {
      newErrors.cookingTime = "Cooking time must be between 5 and 200 minutes.";
    }

    if (!formData.price) {
      newErrors.price = "Price is required.";
    } else if (formData.price < 20 || formData.price > 5000) {
      newErrors.price = "Price must be between $20 and $5000.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(`http://localhost:3000/recipesData/${recipe.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          navigate("/"); 
        } else {
          console.error("Failed to update the recipe");
        }
      } catch (error) {
        console.error("Error updating recipe:", error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto max-w-4xl p-6 bg-white shadow-lg mt-10 rounded-lg mb-16">
      <h1 className="text-2xl font-bold mb-6">Edit Recipe</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            placeholder="Enter image URL"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={formData.image}
            onChange={handleChange}
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Recipe title"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            placeholder="Enter recipe description"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            rows="4"
            placeholder="List ingredients"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={formData.ingredients}
            onChange={handleChange}
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="cookingTime" className="block text-sm font-medium text-gray-700">
            Cooking Time (minutes)
          </label>
          <input
            type="number"
            id="cookingTime"
            name="cookingTime"
            placeholder="e.g., 30"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={formData.cookingTime}
            onChange={handleChange}
          />
          {errors.cookingTime && <p className="text-red-500 text-sm">{errors.cookingTime}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price (USD)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="e.g., 15"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={formData.price}
            onChange={handleChange}
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Update Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
