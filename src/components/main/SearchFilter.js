import React, { useState } from "react";
import "../../styles/index.css";

const SearchFilter = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isFullTimeOnly, setIsFullTimeOnly] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      description: description,
      location: location,
      isFullTimeOnly: isFullTimeOnly,
    });
  };

  const handleChecked = (e) => {
    if (checked === false) {
      setChecked(true);
      setIsFullTimeOnly("on");
    } else {
      setChecked(false);
      setIsFullTimeOnly("");
    }
  };

  return (
    <div className="SearchFilter">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          style={{ width: 220, height: 40 }}
          placeholder="Filter by title, companies, expertise..."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="text"
          style={{ width: 220, height: 40 }}
          placeholder="Filter by location."
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={(e) => handleChecked(e)}
          onClick={() => setIsFullTimeOnly(isFullTimeOnly ? "on" : "")}
        />
        {""}
        Full Time
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchFilter;
