import React from "react";

const ShadeInput = ({ color, onInputChange }) => {
  return (
    <div className="shade-search">
      <div className="emojis">🌈COLOR PICKER🌈</div>
      <input
        type="text"
        onChange={(e) => onInputChange(e.target.value)}
        value={color}
        className="shade-input"
        placeholder="Search"
      />
      <div className="emojis">🌈COLOR PICKER🌈</div>
    </div>
  );
};

export default ShadeInput;
