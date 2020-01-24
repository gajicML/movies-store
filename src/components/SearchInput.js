import React from "react";
import { Container, Button } from "react-bulma-components";

const SearchInput = ({ value, onChange, onClick, onKeyDown }) => {
  return (
    <Container className="columns is-mobile is-centered">
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="center  is-medium  search-input"
        style={{ fontSize: 21 }}
        onKeyDown={onKeyDown}
        placeholder="Search Movies"
      />
      <Button onClick={onClick} className="is-dark is-medium">
        Search
      </Button>
    </Container>
  );
};

export default SearchInput;
