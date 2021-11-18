import React from "react";
import { Card, Image } from "semantic-ui-react";

const UserCard = ({ img, name, date, description }) => (
  <Card>
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{date}</Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  </Card>
);

export default UserCard;
