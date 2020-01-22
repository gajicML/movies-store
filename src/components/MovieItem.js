import React from "react";
import { Card, Media, Heading } from "react-bulma-components";

const MovieItem = ({ name, year, image }) => {
  name = "Forest Gump";
  year = "1994";
  image = "https://upload.wikimedia.org/wikipedia/hr/0/04/Forrest.jpg";
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
