import React,  {useContext} from "react";
import { Card, Image } from "semantic-ui-react";
import Contador from "./ItemCount";
import CartContext from "../../context/CartContext";
import "./Item.css";
const ItemDetail = ({data}) => { 
  const [state, setState] = useContext(CartContext);

 const [itemCounter, setItemCounter] = React.useState(0);
  const saveCounter = (counter) => {
      const prodCart = {id:data.login, url:data.url, cant:counter}
      const checkForItems = state.filter(value => value.id === data.id)
      console.log("esto es checkforitems: ", checkForItems);
      if ((checkForItems.length > 0)) {
        alert ("producto ya añadido, vaya al carrito para ajustar cantidades")
      } else {      
        setState([...state, prodCart]);
      }
  }
  console.log(state);
  return(

  <Card className="Item">
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
