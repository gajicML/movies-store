import React from "react";
import { Card, Media } from "react-bulma-components";

const MovieItem = ({ movieData }) => {
  const { poster_path, title, release_date, vote_average } = movieData;
  let imgPath = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : "./noImg.jpg";

  return (
    <Card>
      <Card.Image src={imgPath} />
      <Card.Content className="is-paddingless card-content ">
        <Media>
          <Media.Item>
            <p className="is-size-6 has-text-white"> {title}</p>
            <p className="is-size-7 has-text-grey-light">
              {release_date ? release_date.substring(0, 4) : ""}
            </p>
            <p>{vote_average}</p>
          </Media.Item>
        </Media>
      </Card.Content>
    </Card>
  );
};

export default MovieItem;
