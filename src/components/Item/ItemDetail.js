import React,  {useContext} from "react";
import { Card, Image } from "semantic-ui-react";
import Contador from "./ItemCount";
import './ItemDetail.css';
import CartContext from "../cart/CartContext";

const ItemDetail = ({data}) => { 
  const [state, setState] = useContext(CartContext);

 const [itemCounter, setItemCounter] = React.useState(0);
  const saveCounter = (counter) => {
      const prodCart = {id:data.id, url:data.url, cant:counter}
      
      setState([...state, prodCart]);
      console.log(state);
  }

  return(

  <Card className="ItemDetail">
    <Image src={data.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.login}</Card.Header>
      <Card.Meta>{data.id}</Card.Meta>
      <Card.Description>{data.url}</Card.Description>
      <Contador countItem={saveCounter}/>
    </Card.Content>
  </Card>
  
);
}

export default ItemDetail;
