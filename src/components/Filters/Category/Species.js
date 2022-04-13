import React from "react";
import FilterBTN from "../FilterBTN";

let species = [
  "Human",
  "Alien",
  "Humanoid",
  "Poopybutthole",
  "Mythological",
  "Unknown",
  "Animal",
  "Disease",
  "Robot",
  "Cronenberg",
  "Planet",
];

const Species = ({ setSpecies, setpageNumber }) => {
  return (
    <div className="p-3 d-flex flex-wrap gap-3">
      {species.map((items, index) => (
        <FilterBTN
          key={index}
          name="species"
          index={index}
          items={items}
          task={setSpecies}
          setpageNumber={setpageNumber}
        />
      ))}
    </div>
  );
};

export default Species;
