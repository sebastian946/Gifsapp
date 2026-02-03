import React, { useState } from "react";

interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onQuery(query);
  };

  return (
    <>
      {/* Search section */}
      <div className="search-container">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          placeholder={placeholder}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </>
  );
};
