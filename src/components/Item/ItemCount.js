import React from "react";

const Contador = ({countItem}) => {

  const [counter, setCounter] = React.useState(10);
  const handleCounterUp = () => {
    if (counter !== 10) {
    setCounter(counter+1)}}
  const handleCounterDown = () => {
    if (counter !== 0) {
    setCounter(counter-1)}
    }
  const onAdd = () => {
    countItem(counter)
    setCounter(0)
  }

return (
<div>
<p>Stock: {counter}</p>
<button onClick = {handleCounterUp}>Incrementar</button>
<button onClick = {handleCounterDown}>Decrementar</button>
<button onClick = {onAdd}>Agregar al carrito</button>
</div>
)}
export default Contador;