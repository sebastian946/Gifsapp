import React from "react";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search Bar */}
      <SearchBar placeholder="Busca lo que quieras" />

      {/* Previous Searches */}
      <PreviousSearches
        previousSearches={[
          "Goku",
          "Saitama",
          "Vegata",
          "Elden ring",
          "Dark souls",
        ]}
      />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
