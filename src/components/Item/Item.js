import React from "react";
import { Card, Image } from "semantic-ui-react";
import Contador from "./ItemCount";
import "./Item.css";
import { useNavigate } from "react-router-dom";



const Item = ({data}) => {
  
  let navigate = useNavigate();
  
  return (
  <Card className="Item" >
    <Image src={data.avatar_url} wrapped ui={false} onClick={ () => navigate("/item/"+data.id)}/>
    <Card.Content>
      <Card.Header>{data.login}</Card.Header>
      <Card.Meta>{data.id}</Card.Meta>
      <Card.Description>{data.url}</Card.Description>
      <Contador />
    </Card.Content>
  </Card>

);
  }
export default Item;
