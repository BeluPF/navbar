import React from "react";
import { Card, Image } from "semantic-ui-react";
import Contador from "./ItemCount";
import "./Item.css";
import { useNavigate } from "react-router-dom";



const Item = ({data}) => {
  const [itemCounter, setItemCounter] = React.useState(0);
  const saveCounter = (counter) => {
     setItemCounter (counter)
     console.log("se guardo el item ", itemCounter)
  }
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
