import React from "react";
import { Container, Button } from "react-bulma-components";

const SearchInput = ({ value, onChange, onClick }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default SearchInput;
