import type { FC } from "react";

interface Props {
  previousSearches: string[];
}

export const PreviousSearches: FC<Props> = ({ previousSearches }) => {
  return (
    <>
      {/* Busquedas previas */}
      <div className="previous-searches">
        <h2>Busquedas previas</h2>
        <ul className="previous-searches-list">
          {previousSearches.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
