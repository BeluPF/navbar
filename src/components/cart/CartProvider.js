import React, {createContext, useState} from 'react';
import CartContext from './CartContext';

const CartProvider = (props) => {
    const [state, setState] =useState([]);
    return (
        <div>
            <CartContext.Provider value={[state,setState]}>
                {props.children}
            </CartContext.Provider>
        </div>
    );
}
export default CartProvider;
