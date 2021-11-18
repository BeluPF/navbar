import React from "react";

const handleCounterUp = () => {
  setCounter (counter+1);
};
const handleCounterDown = () => {
  setCounter (counter-1);
};
const contador = () => {
const [counter, setCounter] = React.useState(200);
<div>
<p>{counter}</p>
<button onClick = {handleCounterUp}>Incrementar</button>
<button onClick = {handleCounterDown}>Decrementar</button>
</div>
}
export default contador;