import React from "react";
import "./App.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Container, Section } from "react-bulma-components";
import CardView from "./components/CardView";
import SearchInput from "./components/SearchInput";
import LoaderComponent from "./components/Loader";

function App() {
  return (
    <Container>
      <Section>
        <SearchInput />
      </Section>
      <Section>
        <CardView />
      </Section>
      <Section>
        <LoaderComponent />
      </Section>
    </Container>
  );
}

export default App;
