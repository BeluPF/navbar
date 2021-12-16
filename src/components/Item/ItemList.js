
import React from "react";
import Item from '../Item/Item';
import "./Item.css";

const ItemList = ({users}) => {
    return (
        <div className="Item">
    {users.map((user)=> {return <Item data={user}/>})}
    </div>
    )
}
   
   export default ItemList;