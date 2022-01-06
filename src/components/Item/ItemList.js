
import React from "react";
import Item from '../Item/Item';
import "./Item.css";

const ItemList = ({items}) => {
    return (
        <div className="Item">
    {items.map((item)=> {return <Item key={item.id} data={item}/>})}
    </div>
    )
}
   
   export default ItemList;