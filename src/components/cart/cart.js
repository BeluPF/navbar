import React, {useContext} from "react";
import CartContext from "../../context/CartContext";
import { Grid, Image } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";
//componente
import Form from "../db/form";

const Cart = () =>{
    const [state, setState, cantItems, cantProd, removeItem] = useContext(CartContext);
    let navigate = useNavigate();
return (
    <div>
    <h1 style={{marginBotom: "20px"}} >Carro de compras</h1>
    
<Grid columns={3} divided>
{state.map( (prod) => {

    return (
    <Grid.Row>
      <Grid.Column>
        <Image src= {prod.img} />
        <div> Producto: {prod.marca} {prod.modelo} {prod.motor} </div>
        <div> Cantidad: {prod.cant}</div>
        <button onClick = {() => removeItem(prod.id)}>Quitar Producto</button>
      </Grid.Column>
    </Grid.Row>
    )}
   
)}
 </Grid>
    <div style={{marginTop: "20px"}}>Cantidad de productos: {cantItems()} </div> 
    <div>Cantidad de items: {cantProd()}</div>
    { cantProd()===0 && <div>
        <h1>Carrito Vacio</h1>
        <button onClick = { () => navigate("/")}>Volver a productos</button>
        </div>
        }
        <Form />
    </div>)
    
    

}

export default Cart;