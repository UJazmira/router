import React, { useState } from "react";

const Filters = () => {
  const [selectedTag, setSelectedTag] = useState("Sport");
  const elems = ["Sport", "BMW", "Mers", "Tesla", "Audi"];
  return (
    <div>
      <div>
        {elems.map((elem, i) => (
          <span
            onClick={() => setSelectedTag(elem)}
            className={
              selectedTag === elem
                ? "btn btn-success"
                : "btn btn-outline-success"
            }
            key={i}
          >
            {elem}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Filters;
