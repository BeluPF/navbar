import React from "react";
import { Card, Image } from "semantic-ui-react";

const UserCard = ({data}) => (
  <Card>
    <Image src={data.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.login}</Card.Header>
      <Card.Meta>{data.id}</Card.Meta>
      <Card.Description>{data.url}</Card.Description>
    </Card.Content>
  </Card>
);

export default UserCard;
