import React from "react";
import { Columns } from "react-bulma-components";
import MovieItem from "./MovieItem";

const CardView = () => {
  return (
    <Columns>
      <Columns.Column size={3}>
        <MovieItem />
      </Columns.Column>
      <Columns.Column size={3}>
        <MovieItem />
      </Columns.Column>
      <Columns.Column size={3}>
        <MovieItem />
      </Columns.Column>
      <Columns.Column size={3}>
        <MovieItem />
      </Columns.Column>
    </Columns>
  );
};

export default CardView;
