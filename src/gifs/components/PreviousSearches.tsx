import type { FC } from "react";

interface Props {
  previousSearches: string[];

  onLabelClick: (term: string) => void;
}

export const PreviousSearches: FC<Props> = ({
  previousSearches,
  onLabelClick,
}) => {
  return (
    <>
      {/* Busquedas previas */}
      <div className="previous-searches">
        <h2>Busquedas previas</h2>
        <ul className="previous-searches-list">
          {previousSearches.map((value) => (
            <li key={value} onClick={() => onLabelClick(value)}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
