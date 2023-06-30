"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const SearchBar = ({ style }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div
      className={style}
      style={{
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      }}
    >
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={handleInputChange}
      />
      <AiOutlineSearch className="text-xl" />
    </div>
  );
};

export default SearchBar;
