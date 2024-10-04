import React, { useState } from "react";
import Cards from "../component/Cards";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 py-6 w-full">
        <div className="flex justify-center ">
          <input
            type="text"
            placeholder="Search for recipes, ingredients, or cuisines"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full max-w-2xl border-2 border-gray-950 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
        </div>
      </div>
      <Cards searchQuery={searchQuery} />
    </>
  );
}
