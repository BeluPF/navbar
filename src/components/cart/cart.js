import React, {useContext} from "react";
import CartContext from "../../context/CartContext";
import { Grid, Image } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";


const Cart = () =>{
    const [state, setState, cantItems, cantProd, removeItem] = useContext(CartContext);
    let navigate = useNavigate();
return (
    <div>
    <h1>futuro carro de compras</h1>

<Grid columns={3} divided>
{state.map( (prod) => {

    return (
    <Grid.Row>
      <Grid.Column>
        <Image src= {prod.url} />
        Producto: {prod.id}
        Cantidad: {prod.cant}
        <button onClick = {() => removeItem(prod.id)}>Quitar Producto</button>
      </Grid.Column>
    </Grid.Row>
    )}
   
)}
 </Grid>
    Cantidad de productos: {cantItems()}
    Cantidad de items: {cantProd()}
    { cantProd()==0 && <div>
        <h1>Carrito Vacio</h1>
        <button onClick = { () => navigate("/")}>Volver a productos</button>
        </div>
        }
    </div>)

}

export default Cart;