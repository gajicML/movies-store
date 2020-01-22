import React from "react";
import "./App.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Container } from "react-bulma-components";
import CardView from "./components/CardView";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <Container>
      <SearchInput />
      <CardView />
    </Container>
  );
}

export default App;
