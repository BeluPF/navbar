import React from "react";

const Contador = () => {
const [counter, setCounter] = React.useState(10);
const handleCounterUp = () => {
  if (counter !== 10) {
  setCounter(counter+1);
  }
};
const handleCounterDown = () => {
  if (counter !== 0) {
  setCounter(counter-1);}
};
return (
<div>
  
<p>Stock: {counter}</p>
<button onClick = {handleCounterUp}>Incrementar</button>
<button onClick = {handleCounterDown}>Decrementar</button>
</div>
)}
export default Contador;