import React from "react";
import { Card, Media } from "react-bulma-components";

const MovieItem = ({ movieData }) => {
  return (
    <Card>
      <Card.Image
        src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`}
      />
      <Card.Content className="is-paddingless card-content has-background-black">
        <Media>
          <Media.Item>
            <p className="is-size-6 has-text-white"> {movieData.title}</p>
            <p className="is-size-7 has-text-grey-light">
              {" "}
              {movieData.release_date.substring(0, 4)}
            </p>
          </Media.Item>
        </Media>
      </Card.Content>
    </Card>
  );
};

export default MovieItem;
