import React from "react";
import FilterBTN from "../FilterBTN";

const Status = ({ setStatus, setpageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];

  return (
    <div className="p-3 d-flex flex-wrap gap-3">
      {status.map((items, index) => (
        <FilterBTN
          task={setStatus}
          setpageNumber={setpageNumber}
          key={index}
          name="status"
          index={index}
          items={items}
        />
      ))}
    </div>
  );
};

export default Status;
