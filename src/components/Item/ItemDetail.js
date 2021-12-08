import React from "react";
import { Card, Image } from "semantic-ui-react";
import Contador from "./ItemCount";
import './ItemDetail.css';

const ItemDetail = ({data}) => { 
 const [itemCounter, setItemCounter] = React.useState(0);
  const saveCounter = (counter) => {
     setItemCounter (counter)
     console.log("se guardo el item ", itemCounter)
  }

  return(
  
  <Card className="ItemDetail">
    <Image src={data.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.login}</Card.Header>
      <Card.Meta>{data.id}</Card.Meta>
      <Card.Description>{data.url}</Card.Description>
      <Contador countItem = {saveCounter}/>
    </Card.Content>
  </Card>

);
}

export default ItemDetail;
