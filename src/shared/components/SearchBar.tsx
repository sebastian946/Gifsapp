import React from "react";

interface Props {
  placeholder?: string;
}

export const SearchBar = ({ placeholder = "Buscar" }: Props) => {
  return (
    <>
      {/* Search section */}
      <div className="search-container">
        <input type="text" placeholder={placeholder} />
        <button>Buscar</button>
      </div>
    </>
  );
};
