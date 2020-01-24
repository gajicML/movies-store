import React from "react";
import { Columns } from "react-bulma-components";
import MovieItem from "./MovieItem";

const CardView = ({ movies }) => {
  return (
    <Columns>
      {movies.map((movie, index) => {
        return (
          <Columns.Column
            size={3}
            key={index}
            className="column is-12-mobile is-3-tablet is-3-desktop"
          >
            <MovieItem movieData={movie} />
          </Columns.Column>
        );
      })}
    </Columns>
  );
};

export default CardView;
