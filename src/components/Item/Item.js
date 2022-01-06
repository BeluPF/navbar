import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Item.css";
import { useNavigate } from "react-router-dom";



const Item = ({data}) => {

  let navigate = useNavigate();
  
  return (
    <div className="Item">
  <Card >
    <Image src={data.img} wrapped ui={false} onClick={ () => navigate("/item/"+data.id)}/>
    <Card.Content>
      <Card.Header>{data.marca}</Card.Header>
      <Card.Header>{data.modelo}</Card.Header>
      <Card.Meta>{data.año}</Card.Meta>
      <Card.Description>${(data.precio).toLocaleString()}</Card.Description>
      <Card.Description>Stock: {data.stock}</Card.Description>
    </Card.Content>
  </Card>
  </div>
);
  }
export default Item;
