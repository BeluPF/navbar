import React, { useState } from "react";
import { Button, Input } from "semantic-ui-react";
import "./form.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

//Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "./db"



const initialState = {
  name: "",
  lastName: "",
  address: "",
  email: ",",
};
let date = new Date()
console.log(date);

const Form = () => {
    const [state] = useContext(CartContext);
  const [values, setValues] = useState(initialState);
  //const [purchaseID, setPurchaseID] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "purchases"), {
      values, state, date
    });
    console.log("Document written with ID:", docRef.id);

    setTimeout(() => {
      setValues(initialState);
    }, 1000);

    alert(
      `Your ID transaction is : ${docRef.id} `,
    );
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmitHandler}>
        <Input
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={onChangeHandler}
        />
        <Input
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={onChangeHandler}
        />
        <Input
          placeholder="Address"
          name="address"
          value={values.address}
          onChange={onChangeHandler}
        />
        <Input
          placeholder="E-mail"
          name="email"
          value={values.email}
          onChange={onChangeHandler}
        />
        <Button> Enviar </Button>
      </form>
    </div>
  );
};

export default Form;