import React, {createContext, useState} from 'react';
import CartContext from './CartContext';

const CartProvider = (props) => {
    const [state, setState] =useState([]);

    const emptyCart = () => {
        setState([]);
    };

const cantItems = () => {
    let qItems = 0
    state.forEach(prod => {
        qItems = qItems + prod.cant
    });
    console.log(qItems);
    return qItems
}

const removeItem = (id) => {
const filterState = state.filter( prod => prod.id !== id)
setState(filterState)
}

    const cantProd = () => {
        return state.length
    }

    return (
        <div>
            <CartContext.Provider value={[state,setState, cantProd, cantItems, removeItem]}>
                {props.children}
            </CartContext.Provider>
        </div>
    );
}
export default CartProvider;
