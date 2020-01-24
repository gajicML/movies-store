import React from "react";
// import { Container, Button } from "react-bulma-components";

const SearchInput = ({ value, onChange, onClick, onKeyDown }) => {
  return (
    <div className=" is-mobile  search-container">
      <input
        value={value}
        onChange={onChange}
        type="text"
        className=" is-large search-input mainLoginInput "
        style={{ fontSize: 20 }}
        onKeyDown={onKeyDown}
        placeholder="&#61442;  Search movies"
      />
      {/* <Button onClick={onClick} className="is-dark is-medium">
        Search
      </Button> */}
    </div>
  );
};

export default SearchInput;
