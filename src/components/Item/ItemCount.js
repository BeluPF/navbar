import React from "react";

const Contador = ({countItem, stockItem}) => {

  const [counter, setCounter] = React.useState(parseInt(stockItem));
  
  const handleCounterUp = () => {
    if (counter !== parseInt(stockItem)) {
    setCounter(counter+1)}}
  const handleCounterDown = () => {
    if (counter !== 1) {
    setCounter(counter-1)}
    }
  const onAdd = () => {
    countItem(counter)
  }

return (
<div>
<p>Unidades a comprar: {counter}</p>
<button onClick = {handleCounterUp}>Incrementar</button>
<button onClick = {handleCounterDown}>Decrementar</button>
<button onClick = {onAdd}>Agregar al carrito</button>
</div>
)}
export default Contador;