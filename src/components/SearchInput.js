import React from "react";
import { Button } from "react-bulma-components";

const SearchInput = ({ value, onChange, onClick }) => {
  return (
    <div className="row">
      <div className="input-field col s6 offset-s3">
        <input
          autoFocus
          value={value}
          onChange={onChange}
          type="text"
          className="center white-text"
          style={{ fontSize: 21 }}
        />
        <Button onClick={onClick} className="is-primary">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchInput;
