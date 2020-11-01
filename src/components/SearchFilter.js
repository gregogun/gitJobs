import React, { useState } from "react";
import TextInput from "../styled_comps/TextInput";
import Button from "../styled_comps/Button";
import "../styles/index.css";

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
      setIsFullTimeOnly("on");
    } else {
      setIsFullTimeOnly("");
    }
  };

  return (
    <div className="SearchFilter">
      <div className="form-wrapper">
        <form action="" onSubmit={handleSubmit}>
          <TextInput
            type="search"
            placeholder="Filter by title, companies, expertise..."
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="search"
          />

          <TextInput
            type="search"
            placeholder="Filter by location."
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            className="search-location"
          />
          <input
            type="checkbox"
            name="checkbox"
            checked={checked}
            onChange={(e) => handleChecked(e)}
            onClick={() => {
              setIsFullTimeOnly(isFullTimeOnly ? "on" : "");
              setChecked(checked ? false : true);
            }}
            className="checkbox"
          />
          {""}
          <label htmlFor="checkbox" className="checkbox-label">
            Full time On
          </label>
          <Button>Search</Button>
        </form>
      </div>
    </div>
  );
};

export default SearchFilter;
