import React from "react";
import { mockGifs } from "./mock-data/gifs.mock";

export const GifsApp = () => {
  return (
    <>
      {/*Header*/}
      <div className="content-center">
        <h1>Buscador de gifs</h1>
        <p>Descubre y comparte el gif perfecto</p>
      </div>
      {/* Search section */}
      <div className="search-container">
        <input type="text" placeholder="Buscador Gifs" />
        <button>Buscar</button>
      </div>
      {/* Busquedas previas */}
      <div className="previous-searches">
        <h2>Busquedas previas</h2>
        <ul className="previous-searches-list">
          <li>Goku</li>
          <li>Saitama</li>
          <li>Vegata</li>
          <li>Elden ring</li>
          <li>Dark souls</li>
        </ul>
      </div>
      {/* Gifs */}
      <div className="gifs-container">
        {mockGifs.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width} x {gif.height} (1.5 mb)
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
