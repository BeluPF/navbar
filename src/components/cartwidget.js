import React from "react";

const Contador = () => {
const [counter, setCounter] = React.useState(200);
const handleCounterUp = () => {
  setCounter(counter+1);
};
const handleCounterDown = () => {
  setCounter(counter-1);
};
return (
<div>
<p>{counter}</p>
<button onClick = {handleCounterUp}>Incrementar</button>
<button onClick = {handleCounterDown}>Decrementar</button>
</div>
)}
export default Contador;