import React from "react";
import { Columns } from "react-bulma-components";
import MovieItem from "./MovieItem";

const CardView = ({ movies }) => {
  return (
    <Columns>
      {movies.map((movie, index) => {
        return (
          <Columns.Column
            key={index}
            className="column is-12-mobile is-2-tablet is-2-desktop card-column"
          >
            <MovieItem movieData={movie} />
          </Columns.Column>
        );
      })}
    </Columns>
  );
};

export default CardView;
