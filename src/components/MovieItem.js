import React from "react";
import { Card, Media, Heading } from "react-bulma-components";

const MovieItem = ({ name, year, image }) => {
  return (
    <Card>
      <Card.Image src={image} />
      <Card.Content>
        <Media>
          <Media.Item>
            <Heading size={4}>
              {name} ({year})
            </Heading>
          </Media.Item>
        </Media>
      </Card.Content>
    </Card>
  );
};

export default MovieItem;
