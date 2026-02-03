import React, { useState } from "react";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState([
    "Dragon Ball Z",
    "One Punch Man",
  ]);

  const handleTermClicked = (term: string) => {
    console.log(term);
  };

  const handleSearch = (query: string) => {
    console.log(query);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search Bar */}
      <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

      {/* Previous Searches */}
      <PreviousSearches
        previousSearches={previousTerms}
        onLabelClick={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
