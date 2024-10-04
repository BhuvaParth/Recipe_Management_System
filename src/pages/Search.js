import React from "react";

export default function Search() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 py-6 w-full">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search for recipes, ingredients, or cuisines"
            className="w-full max-w-2xl border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="bg-blue-600 text-white rounded-r-lg px-4 py-2 hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
