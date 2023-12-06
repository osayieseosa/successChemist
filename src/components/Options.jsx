import React from "react";

const Options = ({ value, name }) => {
  return (
    <option value={value} className="bg-back-color">
      {name}
    </option>
  );
};

export default Options;
