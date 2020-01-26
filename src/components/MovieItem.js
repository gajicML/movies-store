import React from "react";
import { Card, Media } from "react-bulma-components";
import Stars from "./Stars";

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
            <div>
              <p id="year" className="is-size-6 has-text-grey-light">
                {release_date ? release_date.substring(0, 4) : ""}
              </p>
              <Stars vote_average={vote_average} />
            </div>
          </Media.Item>
        </Media>
      </Card.Content>
    </Card>
  );
};

export default MovieItem;
