import React,  {useContext} from "react";
import { Card, Image } from "semantic-ui-react";
import Contador from "./ItemCount";
import CartContext from "../../context/CartContext";
import "./Item.css";
const ItemDetail = ({data}) => { 
  const [state, setState] = useContext(CartContext);

  const saveCounter = (counter) => {
      const prodCart = {id: data.id, marca:data.marca, modelo:data.modelo, año:data.año, motor:data.motor, img:data.img, precio: data.precio, stock:data.stock, tipo:data.tipo, cant:counter}
      const checkForItems = state.filter(value => value.id === data.id)
      console.log("esto es checkforitems: ", checkForItems);
      if ((checkForItems.length > 0)) {
        alert ("producto ya añadido, vaya al carrito para ajustar cantidades")
      } else {      
        setState([...state, prodCart]);
        alert ("producto agregado al carrito")
      }
  }
  console.log(state);
  return(

  <Card className="Item">
    <Image src={data.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.modelo}</Card.Header>
      <Card.Header>{data.marca}</Card.Header>
      
      <Card.Description>{data.año}</Card.Description>
      <Card.Description>${(data.precio).toLocaleString()}</Card.Description>
      <Card.Description>Stock: {data.stock}</Card.Description>
      <Contador stockItem={data.stock} countItem={saveCounter}/>
    </Card.Content>
  </Card>
  
);
}

export default ItemDetail;
